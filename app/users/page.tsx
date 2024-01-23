import React, { Suspense } from 'react';
import UsersTable from './UsersTable';

interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <UsersTable sortBy={sortOrder} />
    </Suspense>
  );
};

export default UserPage;
