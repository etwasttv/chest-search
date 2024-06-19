import ChestDataTable from '@/components/ChestDataTable';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  if (!user)
    redirect('/login');

  return (
    <div className='flex'>
      <ChestDataTable/>
    </div>
  );
}
