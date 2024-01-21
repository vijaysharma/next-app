import React, { cache } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const usersJson = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await usersJson.json();

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
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
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
