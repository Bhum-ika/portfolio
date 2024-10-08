import React from 'react'
import NavLink from './NavLink'
const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col items-center bg-[#ebd0ef] border-2 rounded-lg border-none '>
      {links.map((link,index)=>(
        <li key={index}>
        <NavLink href={link.path} title={link.title}/>
        </li>))}
    </ul>
  )
}

export default MenuOverlay