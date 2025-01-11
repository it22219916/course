import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const url = request.nextUrl.clone(); // Clone the current URL for manipulation
  const pathname = request.nextUrl.pathname;

  // Condition 1: Redirect users not logged in trying to access /course or /admin
  if (
    !session &&
    (pathname.startsWith("/course") || pathname.startsWith("/admin"))
  ) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Condition 2: Redirect logged-in admins away from non-admin routes
  if (session?.admin && !pathname.startsWith("/admin")) {
    url.pathname = "/admin/course";
    return NextResponse.redirect(url);
  }

  // Condition 3: Redirect logged-in non-admin users away from /login
  if (session && !session.admin && pathname === "/login") {
    url.pathname = "/course";
    return NextResponse.redirect(url);
  }

  // Allow all other requests
  return NextResponse.next();
}

// Define the paths where middleware should run
export const config = {
  matcher: ["/course/:path*", "/admin/:path*", "/login"],
};
