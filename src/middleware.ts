import { NextResponse, type NextRequest } from "next/server"

/**
 * Pages are case-sensitive but people type /AEO. next.config redirects match
 * case-insensitively (so /AEO → /aeo would loop), hence an exact check here.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname !== "/aeo" && pathname.toLowerCase() === "/aeo") {
    const url = request.nextUrl.clone()
    url.pathname = "/aeo"
    return NextResponse.redirect(url, 308)
  }
}

export const config = {
  matcher: ["/((?!_next|images|fonts|api).*)"],
}
