'use client'

import {useState} from 'react'

export function ClarityDashboard() {
  const embedUrl = process.env.NEXT_PUBLIC_CLARITY_EMBED_URL
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{padding: '2rem', fontFamily: 'inherit'}}>
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
            background: 'linear-gradient(135deg, #0078d4, #005a9e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 15l6 6M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="10" r="3" fill="white" opacity="0.4" />
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
            User Behavior
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '0.8rem',
              color: 'var(--muted-fg-color, #6b7280)',
              marginTop: '1px',
            }}
          >
            Heatmaps & session recordings via Microsoft Clarity
          </p>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <a
            href="https://clarity.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.75rem',
              color: '#0078d4',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '999px',
              padding: '3px 10px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Open Clarity ↗
          </a>
        </div>
      </div>

      {/* Info cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}
      >
        {[
          {label: 'Heatmaps', desc: 'See where users click most', icon: '🔥'},
          {label: 'Session Recordings', desc: 'Watch real user sessions', icon: '▶️'},
          {label: 'Scroll Depth', desc: 'How far users scroll down', icon: '📏'},
        ].map(({label, desc, icon}) => (
          <div
            key={label}
            style={{
              borderRadius: '10px',
              border: '1px solid var(--card-border-color, #e5e7eb)',
              padding: '0.875rem 1rem',
              background: 'var(--card-bg-color, #fff)',
            }}
          >
            <div style={{fontSize: '1.25rem', marginBottom: '4px'}}>{icon}</div>
            <div style={{fontWeight: 600, fontSize: '0.875rem', marginBottom: '2px'}}>
              {label}
            </div>
            <div style={{fontSize: '0.75rem', color: 'var(--muted-fg-color, #6b7280)'}}>
              {desc}
            </div>
          </div>
        ))}
      </div>

      {/* Embed */}
      {embedUrl ? (
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--card-border-color, #e5e7eb)',
            background: 'var(--card-bg-color, #fff)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            position: 'relative',
            minHeight: '680px',
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
                  stroke="#0078d4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Loading Clarity dashboard…
            </div>
          )}
          <iframe
            src={embedUrl}
            width="100%"
            height="680"
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
            lineHeight: '1.6',
          }}
        >
          <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>📊</div>
          <strong>Set up Microsoft Clarity to see heatmaps here.</strong>
          <br />
          1. Create a project at{' '}
          <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer">
            clarity.microsoft.com
          </a>
          <br />
          2. Add{' '}
          <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>
            NEXT_PUBLIC_CLARITY_ID
          </code>{' '}
          and{' '}
          <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>
            NEXT_PUBLIC_CLARITY_EMBED_URL
          </code>{' '}
          to your <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>.env.local</code>
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
