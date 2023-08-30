import { useState } from 'react';

import './style.scss'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar-container">
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <div className="navbar-toggle--icon">
          {isOpen ? <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white relative z-30"
                viewBox="0 0 20 20"
                fill="#000"
            >
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
          </svg>:
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
              strokeWidth={2}
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
              />
          </svg>}
        </div>
      </button>
      <nav className={`navbar ${isOpen ? 'opened' : 'closed'}`}>
        <ul className=''>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Buyerzap</a></li>
          <li><a href="/b2b">For Business</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className='bg-[#EBEBEB]'>
          <ul>
            {/* <li></li> */}
            <li><a href="/account">Account settings</a></li>
            <li><a href="/profile">My Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
