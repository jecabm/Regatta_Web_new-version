'use client'

import {useState} from 'react'

export function AnalyticsDashboard() {
  const embedUrl = process.env.NEXT_PUBLIC_LOOKER_EMBED_URL
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'inherit',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}
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
              d="M3 3v18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 16l4-4 4 4 5-5"
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
            Website Traffic
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '0.8rem',
              color: 'var(--muted-fg-color, #6b7280)',
              marginTop: '1px',
            }}
          >
            Live data via Google Analytics 4
          </p>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.75rem',
              color: '#16a34a',
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '999px',
              padding: '3px 10px',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#16a34a',
                display: 'inline-block',
              }}
            />
            Live
          </span>
        </div>
      </div>

      {/* Chart container */}
      {embedUrl ? (
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--card-border-color, #e5e7eb)',
            background: 'var(--card-bg-color, #fff)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
            position: 'relative',
            minHeight: '620px',
          }}
        >
          {!loaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                color: 'var(--muted-fg-color, #6b7280)',
                fontSize: '0.875rem',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{animation: 'spin 1s linear infinite'}}
              >
                <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="3" />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Loading report…
            </div>
          )}
          <iframe
            src={embedUrl}
            width="100%"
            height="620"
            frameBorder="0"
            style={{
              border: 0,
              display: 'block',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>
      ) : (
        <div
          style={{
            borderRadius: '12px',
            border: '1px dashed #e5e7eb',
            padding: '3rem',
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '0.875rem',
          }}
        >
          Set <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>NEXT_PUBLIC_LOOKER_EMBED_URL</code> in your{' '}
          <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>.env.local</code> to display your GA4 report here.
        </div>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
