import React, { useState } from 'react';
import NavbarLinks from '../navbar-links/NavbarLinks';
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <>
    {showNavbar && <NavbarLinks />}
      <Media queries={{ small: { minWidth: 600 } }}>
          {matches =>
            matches.small ? (
              <NavbarLinks />
              ) : (
                <GiHamburgerMenu className='hamburger' onClick={handleHamburgerClick} />
              )
          }
      </Media>
    </>
  )
}   

  export default Navbar