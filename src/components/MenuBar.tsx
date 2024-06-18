import LogOutDiscordButton from '@/components/LogOutButton';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function MenuBar() {

  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  return (
    <div className='bg-base-300 w-full'>
      <nav className='flex items-baseline gap-6 h-full p-2'>
        <Link href='/'><h1 className='text-2xl'>Etwas </h1></Link>

        <ul className='flex grow gap-2'>
          {/* <li>Chest Search</li> */}
        </ul>

        { user
        ? <div className='dropdown dropdown-bottom dropdown-end'>
            <div tabIndex={0} className='flex items-center bg-base-300 hover:cursor-pointer'>
              <span className='me-2'>{user.user_metadata.full_name}</span>
              <Image className='rounded-full hover:cursor-pointer' src={user.user_metadata.avatar_url} width={32} height={32} alt=''/>
            </div>
            <ul tabIndex={0} className='dropdown-content border border-base-content z-[1] mt-1 menu bg-base-100 px-4 py-2 rounded shadow'>
              <LogOutDiscordButton/>
            </ul>
          </div>
        : <Link className='text-primary font-bold' href='/login'>Log in</Link>}
      </nav>
    </div>
  );
}
