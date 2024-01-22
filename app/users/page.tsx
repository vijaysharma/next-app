import React from 'react';
import UsersTable from './UsersTable';
import Words from './Words';

interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <UsersTable sortBy={sortOrder} />
      <br />
      <hr />
      <br />
      <Words />
    </>
  );
};

export default UserPage;
