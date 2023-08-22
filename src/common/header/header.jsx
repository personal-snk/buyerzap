import * as React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from 'src/components/NavBar';
import './style.css';

const navItems = ['Home', 'About Us', 'Why', 'Services', 'Product', 'Team', 'Contact Us'];
const isLogin = false;

function Header() {

  const history = useHistory();
  const redirect = (item) => {
    let path = ''
    switch(item){
      case 'About Us': path = '/about'; break;
      case 'Why': path = '/why'; break;
      case 'HowWeWork': path = '/services'; break;
      case 'Team': path = '/team'; break;
      default: path = '/'; break;
    }
    history.push({
      pathname: path,
    });
  };

  return (
        <header class="fixed top-0 z-30 w-full bg-white px-4 py-4">
          <div class="flex items-center justify-end mx-auto">
            <NavBar></NavBar>
          </div>
        </header>
  );
}

export default Header;