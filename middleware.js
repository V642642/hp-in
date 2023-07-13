import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo.country;
  console.log(req.geo)
  if (country === "CA") {
    return NextResponse.redirect("https://in.hiringplug.com");
  } else if (country === "IN") {
    return NextResponse.redirect("https://ca.hiringplug.com");
  } else {
    return;
  }
}
