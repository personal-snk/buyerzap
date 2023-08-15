import React from 'react';
import './style.scss';
import logo from 'src/assets/buyer_icon.svg';
import MicrosoftBadge from 'src/assets/home/microsoft_badge.svg'
import twitter from 'src/assets/footer/twitter.svg'
import fb from 'src/assets/footer/fb.svg'
import linkedin from 'src/assets/footer/linkedin.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Footer = () => {

  const history = useHistory();
  const redirect = (path) => {
    // switch(item){
    //   case 'Home': path = '/'; break;
    //   case 'About Us': path = '/aboutus'; break;
    //   default: path = '/'; break;
    // }
    history.push({
      pathname: path,
    });
  };

  return (
    <div className="footer p-8 lg:px-32 lg:py-8">
      <div className='flex footer_top_section'>
        <div className='flex-col sm:flex-[1_1_30%]'>
            <img src={logo} alt='logo' className='w-28 md:w-28'/>
            <div className='font-light py-6 text-left'>Powered by Buyer experience & Gen AI technology</div>
            <img src={MicrosoftBadge} className='w-52 pb-8' />
        </div>
        <div className='flex items-start text-left flex-col flex-[1_1_10%]'>
            <ul>
              <li className='py-1 font-thin tracking-wide font-[15px]' onClick={() => redirect('/')}>Home</li>
              <li className='py-1 font-thin tracking-wide font-[15px]' onClick={() => redirect('/aboutus')}>About Buyerzap</li>
              <li className='py-1 font-thin tracking-wide font-[15px]'>Products</li>
              <li className='py-1 font-thin tracking-wide font-[15px]'>Services</li>
            </ul>
            <div className='contact_section py-4'>
              <div className='phone font-normal'>+91 1234567890</div>
              <div className='email font-normal'>info@buyerzap.com</div>
              <ul className='flex py-4 social'>
                <li className='mr-2'><img src={fb}/></li>
                <li className='mx-2'><img src={twitter}/></li>
                <li className='ml-2'><img src={linkedin}/></li>
              </ul>
            </div>
        </div>
        {/* <div className=''>
            <img src={logo} alt='logo' className='w-28 md:w-48'/>
            <div>Powered by Buyer experience & Gen AI technology</div>
        </div> */}
      </div>
      <div className='flex items-left footer_bottom_section'>
        <div className='copy_right mr-5'>© 2023 Buyerzap</div>
        <div className='legal_info mx-5 '> Legal Information</div>
        <div className='cookie_policy ml-5'>Cookie policy</div>  
      </div>
    </div>
  );
}

export default Footer;
