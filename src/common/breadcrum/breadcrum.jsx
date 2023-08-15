import * as React from 'react';
import { useHistory } from 'react-router-dom';
 import './style.css';

const navItems = ['Home', 'About Us', 'Why', 'Services', 'Product', 'Team', 'Contact Us'];
const isLogin = false;

function Breadcrum(props) {

  const history = useHistory();
  const redirect = (item) => {
    let path = ''
    switch(item){
      case 'Home': path = '/'; break;
      case 'About Us': path = '/aboutus'; break;
      default: path = '/'; break;
    }
    history.push({
      pathname: path,
    });
  };

  return (
      <ul className='flex breadcrumb px-10 pb-1 md:pb-4 md:px-40'>
         {props.navArr.map((item,index) => (
              <li className='text-underline' key={item} onClick={() => redirect(item)}>
                <a>{item}</a>
              </li>
            ))}
      </ul>
  );
}

export default Breadcrum;