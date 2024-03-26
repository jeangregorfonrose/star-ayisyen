import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get("currentUser")?.value;

//   console.log(currentUser);

//   if (currentUser && !request.nextUrl.pathname.startsWith("/admin/dashboard")) {
//     return Response.redirect(new URL("/admin/dashboard", request.url));
//   }

//   if (!currentUser && !request.nextUrl.pathname.endsWith("/admin")) {
//     return Response.redirect(new URL("/admin", request.url));
//   }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
