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
  const usersJson = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await usersJson.json();

  // add sort logic
  const usersSorted =
    sortBy === 'email'
      ? sort(users).asc((user) => user.email)
      : sort(users).asc((user) => user.name);

  return (
    <>
      <h1>Users</h1>
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
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
