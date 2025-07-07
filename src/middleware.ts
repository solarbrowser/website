import { NextRequest, NextResponse } from 'next/server';

// Redirect any language-prefixed legal URLs to English version
const legalPaths = ['/privacy-policy', '/terms-of-use'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Match /xx/privacy-policy or /xx/terms-of-use
  const match = pathname.match(/^\/(\w{2})(?:-[A-Z]{2})?(\/privacy-policy|\/terms-of-use)$/);
  if (match) {
    // Redirect to English version (no prefix)
    return NextResponse.redirect(new URL(match[2], request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/([a-z]{2}|[a-z]{2}-[A-Z]{2})/privacy-policy', '/([a-z]{2}|[a-z]{2}-[A-Z]{2})/terms-of-use'],
};
