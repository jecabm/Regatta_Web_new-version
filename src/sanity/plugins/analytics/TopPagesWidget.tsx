'use client'

import {useEffect, useState} from 'react'

interface PageData {
  page: string
  views: number
}

const rankColors = ['#f97316', '#fb923c', '#fdba74', '#6b7280', '#6b7280']

export function TopPagesWidget() {
  const [pages, setPages] = useState<PageData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/analytics/top-pages')
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error)
        setPages(data)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const maxViews = pages[0]?.views ?? 1

  return (
    <div style={{padding: '2rem', fontFamily: 'inherit'}}>
      {/* Header */}
      <div
        style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem'}}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--card-fg-color, #101112)',
              letterSpacing: '-0.01em',
            }}
          >
            Top Pages This Week
          </h2>
          <p style={{margin: 0, fontSize: '0.8rem', color: 'var(--muted-fg-color, #6b7280)', marginTop: '1px'}}>
            Most visited pages · last 7 days
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          borderRadius: '12px',
          border: '1px solid var(--card-border-color, #e5e7eb)',
          background: 'var(--card-bg-color, #fff)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {loading && (
          <div style={{padding: '3rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem'}}>
            Loading analytics…
          </div>
        )}

        {error && (
          <div style={{padding: '2rem', textAlign: 'center', color: '#dc2626', fontSize: '0.875rem'}}>
            <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>⚠️</div>
            {error.includes('Missing') ? (
              <>
                <strong>Google Analytics API not configured.</strong>
                <br />
                Add <code style={{background: '#fef2f2', padding: '2px 5px', borderRadius: '4px'}}>GOOGLE_GA4_PROPERTY_ID</code> and{' '}
                <code style={{background: '#fef2f2', padding: '2px 5px', borderRadius: '4px'}}>GOOGLE_SERVICE_ACCOUNT_KEY</code> to your .env.local
              </>
            ) : (
              'Could not load analytics data. Check your Google Cloud credentials.'
            )}
          </div>
        )}

        {!loading && !error && pages.length === 0 && (
          <div style={{padding: '3rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem'}}>
            No page data yet — visit your site to start collecting data.
          </div>
        )}

        {!loading && !error && pages.map((item, i) => (
          <div
            key={item.page}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.875rem 1.25rem',
              borderBottom: i < pages.length - 1 ? '1px solid var(--card-border-color, #f3f4f6)' : 'none',
            }}
          >
            {/* Rank */}
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: i < 3 ? rankColors[i] : '#f3f4f6',
                color: i < 3 ? 'white' : '#6b7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>

            {/* Page path + bar */}
            <div style={{flex: 1, minWidth: 0}}>
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--card-fg-color, #101112)',
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.page || '/'}
              </div>
              <div style={{background: '#f3f4f6', borderRadius: '4px', height: '4px', overflow: 'hidden'}}>
                <div
                  style={{
                    height: '100%',
                    width: `${(item.views / maxViews) * 100}%`,
                    background: i < 3 ? rankColors[i] : '#9ca3af',
                    borderRadius: '4px',
                    transition: 'width 0.6s ease',
                  }}
                />
              </div>
            </div>

            {/* View count */}
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: i < 3 ? rankColors[i] : 'var(--card-fg-color, #101112)',
                flexShrink: 0,
              }}
            >
              {item.views.toLocaleString()}
              <span style={{fontWeight: 400, color: '#9ca3af', fontSize: '0.75rem', marginLeft: '3px'}}>
                views
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
