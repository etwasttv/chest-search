'use client';

import { createClient } from '@/utils/supabase/client';

export default function LogInDiscord() {

  const supabase = createClient()

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'http://localhost:3000/api/auth/callback',
      }
    });
  }

  return <button onClick={() => signIn()}>LogIn</button>
}
