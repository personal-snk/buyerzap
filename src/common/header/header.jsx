import * as React from 'react';
import { useHistory } from 'react-router-dom';
import NavBarDesktop from 'src/components/NavBarDesktop';
import './style.css';

const navItems = ['Home', 'About Us', 'Why', 'Services', 'Product', 'Team', 'Contact Us'];
const isLogin = false;

function Header() {

  return (
        <header class="md:headerShadow fixed top-0 z-30 w-full">
          {<NavBarDesktop></NavBarDesktop>}
        </header>
  );
}

export default Header;