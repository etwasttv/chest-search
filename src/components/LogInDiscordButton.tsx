'use client';

import { createClient } from '@/utils/supabase/client';

export default function LogInDiscord({ host }: { host: string }) {

  const supabase = createClient();

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${host}/api/auth/callback`,
      }
    });
  }

  return <button className='btn btn-primary w-fit' onClick={() => signIn()}>Discord でログイン</button>
}
