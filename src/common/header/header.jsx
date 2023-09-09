import * as React from 'react';
import NavBarDesktop from 'src/components/NavBarDesktop';
import './style.css';

function Header() {

  return (
        <header class="md:headerShadow fixed top-0 z-30 w-full">
          {<NavBarDesktop></NavBarDesktop>}
        </header>
  );
}

export default Header;