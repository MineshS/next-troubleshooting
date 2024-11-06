import { NextRequest, NextResponse } from "next/server"
const setLocale = (request: NextRequest, response:NextResponse) => {
  response.headers.set('current-locale', 'en');  
  return response;
}

export async function middleware(request: NextRequest)
{
    return setLocale(request, NextResponse.next());
}