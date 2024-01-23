'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const New = () => {
  const router = useRouter();
  return (
    <>
      <h1>Create a user</h1>
      <button className="btn btn-primary" onClick={() => router.push('/users')}>
        Create User
      </button>
    </>
  );
};

export default New;
