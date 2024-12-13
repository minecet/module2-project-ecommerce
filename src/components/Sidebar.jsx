import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
    <aside className="linkMenu">
      <ul className='optionsMenu'>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/about'>About Page</NavLink> </li>
        <li> <NavLink to='/list'>List Page</NavLink> </li>
      </ul>     
    </aside>
    </div>
  );
};

export default Sidebar;