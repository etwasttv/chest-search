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

  return <button className='btn btn-primary w-fit' onClick={() => signIn()}>Discord でログイン</button>
}
