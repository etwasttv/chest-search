import LogInDiscordButton from '@/components/LogInDiscordButton';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function LogInPage() {

  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  console.log(user);

  if (user) {
    redirect('/');
  }

  return (
    <div className='h-full flex justify-center items-center w-full'>
      <div className='flex flex-col items-center justify-center rounded bg-base-300 w-72 h-48 p-4'>
        <h1 className='text-center text-2xl mb-6'>ログイン</h1>
        <LogInDiscordButton/>
      </div>
    </div>
  )
}
