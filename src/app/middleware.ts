import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Defina aqui quais rotas são protegidas
  const protectedRoutes = ['/dashboard'];

  const pathname = request.nextUrl.pathname;

  const requiresAuth = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (requiresAuth && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Aplica o middleware apenas em rotas específicas
export const config = {
  matcher: ['/dashboard/:path*'],
};
