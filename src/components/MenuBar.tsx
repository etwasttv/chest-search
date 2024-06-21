import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function MenuBar() {

  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  return (
    <div className='bg-base-300 w-full'>
      <nav className='flex items-baseline gap-6 h-full p-2'>
        <Link href='/'><h1 className='text-2xl'>Etwas Server Assistant</h1></Link>

        <ul className='flex gap-2'>
          {/* <li>Chest Search</li> */}
        </ul>

        <Link href='/chest'>倉庫</Link>

      </nav>
    </div>
  );
}
