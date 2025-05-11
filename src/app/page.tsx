'use client';

import { useRouter } from 'next/navigation';
import WelcomeScreen from '@/components/WelcomeScreen';

export default function HomePage() {
  const router = useRouter();

  return <WelcomeScreen onEnter={() => router.push('/login')} />;
}
