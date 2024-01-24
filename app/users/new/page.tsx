'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const New = () => {
  const router = useRouter();
  return (
    <>
      <h1>Create a user</h1>
      <form action="newUser.tsx" method="POST">
        <fieldset>
          <div>
            <label>
              Email:
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label>
              Username:
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label>
              Company:
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </fieldset>
      </form>
      <button className="btn btn-primary" onClick={() => router.push('/users')}>
        Create User
      </button>
    </>
  );
};

export default New;
