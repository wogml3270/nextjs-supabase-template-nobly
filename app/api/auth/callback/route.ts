import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // 로그인 성공 시 /admin url로 이동
  return NextResponse.redirect(`${origin}/admin`);
}
