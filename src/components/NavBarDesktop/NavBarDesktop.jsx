import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import "./style.scss";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";
import { getImagePath } from "src/utils";

function NavBarDesktop() {
  const { user, logout } = useAuth0();

  const history = useHistory();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const isResponsive = useMediaQuery(992);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const redirect = (path) => {
    history.push({
      pathname: path,
    });
    toggleNavbar();
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return isResponsive ? (
    <div
      class={`flex items-center justify-end mx-auto ${
        colorChange ? "colorChange" : ""
      }`}
    >
      <div className={`navbar-container`}>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <div className="navbar-toggle--icon">
            {isOpen ? (
              <img
                src={getImagePath("home/cross.svg")}
                className="w-8 relative z-10"
              />
            ) : (
              <img src={getImagePath("home/hamburger.svg")} className="w-8" />
            )}
          </div>
        </button>
        <nav className={`navbar ${isOpen ? "opened" : "closed"}`}>
          <ul className="px-8 py-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About Buyerzap</NavLink>
            </li>
            <li>
              <NavLink to="for_business">For Business</NavLink>
            </li>
          </ul>
          <div className="bg-[#EBEBEB]">
            <ul className="px-8 py-4">
              <li className="pb-2 grid grid-cols-4 gap-2">
                <img src={user.picture} className="userPic w-16 rounded-full" />
                <div className="">
                  <div className="text-md">Welcome</div>
                  <div className="text-3xl">{user.nickname}</div>
                </div>
              </li>
              <li className="pb-2">
                <NavLink to="account">Account settings</NavLink>
              </li>
              <li className="pb-2">
                <NavLink to="profile">My Profile</NavLink>
              </li>
              <li className="pb-2" onClick={() => logoutWithRedirect()}>
                <a href="javascript:void(0)">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  ) : (
    <nav className={colorChange ? "colorChange" : ""}>
      <div className="py-4 md:px-10 md:flex md:items-center">
        <div className="flex justify-between items-center">
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 md:text-lg"
          id="navbar-collapse"
        >
          <NavLink to="/" className="p-2 md:mx-4 " exact>
            Home
          </NavLink>
          <NavLink
            to="aboutus"
            className="p-2 md:mx-4 hover:text-gray-700 transition-colors duration-300"
          >
            About Buyerzap
          </NavLink>
          <NavLink
            to="for_business"
            className="p-2 md:mx-4 hover:text-gray-700 transition-colors duration-300"
          >
            For Business
          </NavLink>
        </div>
        <div className=" inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="relative ">
            <div>
              <button
                onClick={toggleDropdown}
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.picture}
                  alt=""
                />
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <NavLink
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </NavLink>
                <NavLink
                  href="javascript:void(0)"
                  onClick={() => logoutWithRedirect()}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarDesktop;
