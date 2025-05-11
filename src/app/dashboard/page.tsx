import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Dashboard from '@/components/Dashboard';

export const runtime = 'nodejs';

export default async function DashboardPage() {
  const cookieStore = await cookies() as any;
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  try {
    const res = await fetch('http://localhost:3333/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      redirect('/login');
    }

    await res.json();

    return <Dashboard />;
  } catch {
    redirect('/login');
  }
}
