'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { me } from '@/services/authService';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        await me();
        setAuthorized(true);
      } catch {
        localStorage.removeItem('token');
        router.push('/');
      }
    }

    checkAuth();
  }, [router]);

  if (!authorized) return null;

  return <>{children}</>;
}
