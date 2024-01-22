import React from 'react';

interface Props {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-100 p-10">Admin Aside</aside>
      <div className="p-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
