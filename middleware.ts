import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// These routes require authentication
const isProtectedRoute = createRouteMatcher([
  '/admin/blog(.*)',
  '/api/admin(.*)',
])

// The guestbook API route
const isGuestbookApi = createRouteMatcher([
  '/api/guestbook(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  // Protect all admin routes
  if (isProtectedRoute(req)) {
    await auth.protect()
  }

  // Only protect POST requests to the guestbook API (submitting a new message)
  // GET requests (viewing messages) remain public
  if (isGuestbookApi(req) && req.method === 'POST') {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
