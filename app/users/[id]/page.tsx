import React from 'react';

interface Props {
  params: {
    id: number;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserDetails = async ({ params: { id } }: Props) => {
  const userJson = await fetch(`http://localhost:3000/api/users/${id}`);
  const user: User = await userJson.json();

  return (
    <>
      <h1>UserDetails</h1>
      <p>
        <strong>Id: </strong>
        {user.id}
      </p>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Username: </strong>
        {user.username}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <strong>Company: </strong>
        {user.company.name}
      </p>
    </>
  );
};

export default UserDetails;
