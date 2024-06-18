'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function LogOutDiscordButton() {

  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();

    router.refresh();
  }

  return <button className='text-error font-bold text-nowrap' onClick={signOut}>Log out</button>
}
