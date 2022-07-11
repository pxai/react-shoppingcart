
import { Fragment, useContext } from 'react';
import { Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/app.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { setCurrentUser, color } = useContext(UserContext);
    return (
      <Fragment>
        <div className="navigation">
            <Link to='/' className='logo-container'>
                <CrwLogo />
            </Link>
            <div className ='nav-links-container'>
                <Link to='shop' className='nav-link' >Shop</Link>
            </div>
            <div className ='nav-links-container'>
                <Link to='sign-in' className='nav-link' >SignIn</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;