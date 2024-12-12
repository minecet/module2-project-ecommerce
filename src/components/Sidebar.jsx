import React from 'react';
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
    <aside className="linkMenu">
      <ul className='optionsMenu'>
        <li> Home </li>
        <li> About Page </li>
      </ul>     
    </aside>
    </div>
  );
};

export default Sidebar;