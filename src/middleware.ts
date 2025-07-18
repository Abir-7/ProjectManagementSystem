import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTokenFromCookie } from "./serverAction/auth.server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getTokenFromCookie();

  const publicPaths = ["/login", "/signup", "/verify"];

  if (!publicPaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //need to redirect role based dashboard page
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
