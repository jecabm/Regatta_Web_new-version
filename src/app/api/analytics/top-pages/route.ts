import {BetaAnalyticsDataClient} from '@google-analytics/data'
import {NextResponse} from 'next/server'

export async function GET() {
  const propertyId = process.env.GOOGLE_GA4_PROPERTY_ID
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY

  if (!propertyId || !keyJson) {
    return NextResponse.json(
      {error: 'Missing GOOGLE_GA4_PROPERTY_ID or GOOGLE_SERVICE_ACCOUNT_KEY'},
      {status: 500},
    )
  }

  try {
    const credentials = JSON.parse(keyJson)
    const client = new BetaAnalyticsDataClient({credentials})

    const [response] = await client.runReport({
      property: propertyId,
      dimensions: [{name: 'pagePath'}],
      metrics: [{name: 'screenPageViews'}],
      dateRanges: [{startDate: '7daysAgo', endDate: 'today'}],
      orderBys: [{metric: {metricName: 'screenPageViews'}, desc: true}],
      limit: 10,
    })

    const pages = (response.rows ?? []).map((row) => ({
      page: row.dimensionValues?.[0]?.value ?? '',
      views: parseInt(row.metricValues?.[0]?.value ?? '0', 10),
    }))

    return NextResponse.json(pages, {
      headers: {'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'},
    })
  } catch (err) {
    console.error('GA4 API error:', err)
    return NextResponse.json({error: 'Failed to fetch analytics data'}, {status: 500})
  }
}
