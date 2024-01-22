import React from 'react';
import UsersTable from './UsersTable';

interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <UsersTable sortBy={sortOrder} />
    </>
  );
};

export default UserPage;
