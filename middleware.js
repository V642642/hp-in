import { NextResponse } from "next/server";

export async function middleware(req) {
  
  if (req.ip.geoip.country === "CA") {
    return NextResponse.redirect(process.env.NEXT_PUBLIC_CA_URL);
  } else if (req.ip.geoip.country === "IN") {
    return NextResponse.redirect(process.env.NEXT_PUBLIC_IN_URL);
  } else {
    return NextResponse.next();
  }
}
