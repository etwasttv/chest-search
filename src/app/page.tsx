import LogOutDiscordButton from '@/components/LogOutButton';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  console.log(user);

  return (
    <>
      { user
      ? <>
          {user.user_metadata.full_name}
          <LogOutDiscordButton/>
        </>
      : <>
          <Link href="/login">LOGIN PAGE</Link>
        </>
      }
    </>
  );
}
