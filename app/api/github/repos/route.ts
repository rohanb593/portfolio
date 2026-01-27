// Minimal route handler for Cloudflare Workers
export const runtime = 'edge';

export async function GET(request: Request) {
  // This MUST be the first thing that runs
  console.log('[ROUTE] Handler invoked');
  
  try {
    // Return immediate response to test if route works
    return Response.json({
      success: true,
      message: 'Route handler is working',
      timestamp: new Date().toISOString(),
      url: request.url,
    });
  } catch (error: any) {
    console.error('[ROUTE] Error:', error);
    return Response.json({
      error: true,
      message: error?.message || 'Unknown error',
      stack: error?.stack,
    }, { status: 500 });
  }
}
