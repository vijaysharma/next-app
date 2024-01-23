import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}
interface SortBy {
  sortBy: string;
}

const UsersTable = async ({ sortBy }: SortBy) => {
  const usersJson = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  });

  const users: User[] = await usersJson.json();

  // add sort logic
  const usersSorted =
    sortBy === 'email'
      ? sort(users).asc((user) => user.email)
      : sort(users).asc((user) => user.name);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <table className="table table-fixed table-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersSorted.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
