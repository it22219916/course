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

  const lang = pathname.split("/")[1];

  // Condition 1: Redirect users not logged in trying to access /course or /admin
  if (
    !session &&
    (pathname.startsWith(`/${lang}/course`) ||
      pathname.startsWith(`/${lang}/admin`))
  ) {
    url.pathname = `/${lang}/login`;
    return NextResponse.redirect(url);
  }

  // Condition 2: Redirect logged-in admins away from non-admin routes
  if (!session?.admin && pathname.startsWith(`/${lang}/admin`)) {
    url.pathname = `/${lang}`;
    return NextResponse.redirect(url);
  }

  // Condition 3: Redirect logged-in non-admin users away from /login
  if (session && pathname === `/${lang}/login`) {
    url.pathname = `/${lang}`;
    return NextResponse.redirect(url);
  }

  // Allow all other requests
  return NextResponse.next();
}

// Define the paths where middleware should run
export const config = {
  matcher: ["/:lang/course/:path*", "/:lang/admin/:path*", "/:lang/login"],
};
