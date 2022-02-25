import './navbar.css';
import image from '../../images/avatar.png';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          <span className='logo'>admin-view</span>
        </div>
        <div className='navbar-right'>
          <div className='icon-container'>
            <NotificationsNone />
            <span className='icon-badge'>2</span>
          </div>
          <div className='icon-container'>
            <Language />
            <span className='icon-badge'>2</span>
          </div>
          <div className='icon-container'>
            <Settings />
          </div>
          <div className='icon-container'>
            <img src={image} alt='avatar' className='navbar-avatar' />
          </div>
        </div>
      </div>
    </div>
  );
}
