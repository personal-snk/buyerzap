import * as React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
        <header class="top-0 z-30 w-full px-2 py-4 sm:px-4 bg-white">
          <div class="flex items-center justify-end mx-auto max-w-7xl">
            <div class="flex items-center space-x-1">
              <ul class="hidden text-white space-x-2 md:inline-flex">
                <li onClick={() => redirect('/')}><a className="cursor-pointer px-4 py-2 font-400 rounded">Home</a></li>
                <li onClick={() => redirect('About Us')}><a className="cursor-pointer px-4 py-2 font-400 rounded">About Us</a></li>
                <li onClick={() => redirect('Why')}><a className="cursor-pointer px-4 py-2 font-400 rounded">Why</a></li>
                <li onClick={() => redirect('HowWeWork')}><a className="cursor-pointer px-4 py-2 font-400 rounded">Services</a></li>
                <li onClick={() => redirect('Team')}><a className="cursor-pointer px-4 py-2 font-400 rounded">Team</a></li>
                <li onClick={() => redirect('/')}><a className="cursor-pointer px-4 py-2 font-400 rounded">Contact Us</a></li>
                
              </ul>
              <div class="inline-flex md:hidden">
                <button class="flex-none px-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>
                  <span class="sr-only">Open Menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>
    // <Box sx={{ display: 'flex' }}>
    //   <CssBaseline />
    //   <AppBar component="nav" className='headerContainer'>
    //     <Toolbar>
    //       <img src={logo} alt='' />
    //       <Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{ paddingLeft: '420px'}}>
    //         {navItems.map((item) => (
    //           <Button key={item} sx={{ color: '#fff' }} style={{ marginLeft: '5px'}} onClick={() => redirect(item)}>
    //             {item}
    //           </Button>
    //         ))}
    //         {
    //           !isLogin && (
    //             <Button key='login' sx={{ color: '#fff' }}>
    //               Login
    //             </Button>
    //           )
    //         }
    //         {
    //           !isLogin && (
    //             <Button key='login' sx={{ color: '#000080', backgroundColor: '#30D5C8', borderRadius: '20px', padding: '0 15px' , marginLeft: '10px'}}>
    //               Sign Up
    //             </Button>
    //           )
    //         } 
    //         <img alt='globe' src={globe} className='globeImg' style={{ width: '25px', verticalAlign: 'middle', marginLeft: '20px'}}/>           
    //       </Box>
    //     </Toolbar>
        
    //   </AppBar>
    // </Box>
  );
}

export default Header;