import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <Link className="btn btn-ghost text-xl" href="/">
        Home
      </Link>
      <Link className="btn btn-ghost text-xl" href="/users">
        Users
      </Link>
      <Link className="btn btn-ghost text-xl" href="/words">
        Words
      </Link>
      <Link className="btn btn-ghost text-xl" href="/products">
        Products
      </Link>
      <Link className="btn btn-ghost text-xl" href="/admin">
        Admin
      </Link>
    </nav>
  );
};

export default Navigation;
