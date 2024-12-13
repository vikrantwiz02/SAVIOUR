"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform any necessary logout logic here
    // For example, clear user session or tokens

    // Redirect to the login page
    router.push('/login');
  }, [router]);

  return <p>Logging out...</p>; // Optional: provide some feedback to the user
};

export default LogoutPage;