import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  const usersJson = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await usersJson.json();

  // add sort logic
  const usersSorted =
    sortOrder === 'email'
      ? sort(users).asc((user) => user.email)
      : sort(users).asc((user) => user.name);

  const wordsJson = await fetch(
    'https://random-word-api.vercel.app/api?words=10'
  );
  const words: [] = await wordsJson.json();

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
      <hr />
      <h2>10 Words</h2>
      <ul>
        {words.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
