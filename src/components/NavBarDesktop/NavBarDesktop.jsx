import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

import './style.scss'

function NavBarDesktop() {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
 

  return (
    <nav className="bg-white">
      <div className="container px-4 mx-auto md:flex md:items-center">

        <div className="flex justify-between items-center">
          {/* <a href="#" className="font-bold text-xl text-indigo-600">FWR</a> */}
          <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          <a href="/" className="p-2 lg:px-4 md:mx-2 hover:bg-gray-200 rounded ">Home</a>
          <a href="/aboutus" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
          <a href="/b2b" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">For Business</a>
          <a href="/contactus" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact Us</a>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">    
        <div className="relative ml-3">
          <div>
            <button onClick={toggleDropdown} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          {isDropdownOpen && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="javascript:void(0)" onClick={() => logoutWithRedirect()} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>}
        </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBarDesktop;
