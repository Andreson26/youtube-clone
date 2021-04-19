import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
  const [inputSeach, setInputSeach] = useState('');
  return (
    <div className="header">
        <div className="header-left">
            <MenuIcon />
            <img
                className="header-logo"
                src="http://www.sketchappsources.com/resources/source-image/youtube-logo.png"
                alt=""
            />
        </div>
        <div className="header-input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header-inputButton" />
        </div>   
        <div classname="header-icons"> 
            <VideoCallSharpIcon className="header-icon" />
            <AppsIcon className="header-icon" />
            <NotificationsIcon className="header-icon" />
            <AccountCircleIcon
                alt="Andreson ceide"
                src=""
            />
          </div>
      
    </div>
  )
}

export default Header
