import { useEffect, useState } from 'react'

/** Live star/fork counts for a repo, plus loading/error flags. `null` counts mean unknown. */
export interface GitHubStats {
  /** Star count, or `null` when not yet loaded or unavailable. */
  stars: number | null
  /** Fork count, or `null` when not yet loaded or unavailable. */
  forks: number | null
  /** Whether the counts are still being fetched. */
  loading: boolean
  /** Whether the fetch failed and the counts fell back to `null`. */
  error: boolean
}

/** A cached stats entry persisted to localStorage. */
interface CacheEntry {
  /** Cached star count. */
  stars: number
  /** Cached fork count. */
  forks: number
  /** Epoch milliseconds when this entry was written, used for the TTL check. */
  ts: number
}

const TTL = 6 * 60 * 60 * 1000 // 6 hours
const cacheKey = (repo: string) => `ghstats:steve1316/${repo}`

/**
 * Fetches live star and fork counts for github.com/steve1316/<repo> from the public REST API.
 * Results are cached in localStorage (6h TTL) to soften the unauthenticated 60 req/hr/IP limit,
 * and any failure falls back gracefully to null counts (rendered as "-").
 * @param repo The repo slug under github.com/steve1316.
 * @returns The current stars, forks, and loading/error state.
 */
export function useGitHubStats(repo: string): GitHubStats {
  const [state, setState] = useState<GitHubStats>({ stars: null, forks: null, loading: true, error: false })

  useEffect(() => {
    let cancelled = false

    try {
      const raw = localStorage.getItem(cacheKey(repo))
      if (raw) {
        const cached: CacheEntry = JSON.parse(raw)
        if (Date.now() - cached.ts < TTL) {
          setState({ stars: cached.stars, forks: cached.forks, loading: false, error: false })
          return
        }
      }
    } catch {
      // ignore malformed / unavailable cache
    }

    fetch(`https://api.github.com/repos/steve1316/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const stars = data.stargazers_count ?? 0
        const forks = data.forks_count ?? 0
        setState({ stars, forks, loading: false, error: false })
        try {
          localStorage.setItem(cacheKey(repo), JSON.stringify({ stars, forks, ts: Date.now() }))
        } catch {
          // ignore storage failures (private mode, quota)
        }
      })
      .catch(() => {
        if (!cancelled) setState({ stars: null, forks: null, loading: false, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [repo])

  return state
}
