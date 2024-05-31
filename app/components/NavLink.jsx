import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title, handleClick }) => (
  <Link href={href} scroll={false}>
    <a onClick={(e) => handleClick(e, href)} className="text-slate-200 hover:text-white">
      {title}
    </a>
  </Link>
);

export default NavLink;
