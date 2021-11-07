import './header.css';

import { HiOutlineLogout } from 'react-icons/hi';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeProvider';

const Header = () => {

  const { user, logout } = useContext(AuthContext);
  const { toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="user-info">
        <img src={user?.image} alt={`${user?.name} Avatar`} />
        <p>{user?.name}</p>
      </div>

      <div className="user-options">
        <button onClick={() => toggleDarkTheme()}>DarkMode</button>
        <HiOutlineLogout
          className="pointer"
          size="1.3em"
          onClick={logout}
        />
      </div>
    </div>
  );
}

export default Header;
