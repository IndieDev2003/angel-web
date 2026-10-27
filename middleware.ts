import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/dashboard", "/tests", "/pricing"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (!isProtected) {
    return NextResponse.next();
  }

  const hasSupabaseSession = request.cookies.get("sb-access-token") || request.cookies.get("supabase-auth-token");

  if (process.env.NEXT_PUBLIC_SUPABASE_URL && !hasSupabaseSession) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/tests/:path*", "/pricing/:path*"],
};
