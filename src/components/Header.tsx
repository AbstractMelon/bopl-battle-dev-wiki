import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Bopl Developer Wiki!</h1>
        <nav className="page-header-navbar">
          <ul>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/pages">
                <p>All pages</p>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <p>Report Bug</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>Edit</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
