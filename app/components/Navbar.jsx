import React from 'react';

const MenuOverlay = ({ links, handleClick }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href={link.path} onClick={(e) => handleClick(e, link.path)} className="text-white text-2xl">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuOverlay;
