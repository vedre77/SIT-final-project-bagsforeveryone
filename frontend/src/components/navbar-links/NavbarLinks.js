import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, Logo, GroupLeft, GroupRight } from './NavbarLinks.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SewingMachine, Book, Bag, Donate, Login } from './NavbarLinks.styles';

const NavbarLinks = () => {
 
    const localToken = localStorage.getItem("bagsAuth");

    let activeStyle = {
        borderBottom: "3px solid #DABC39",
        paddingBottom: ".5rem",
    };

    let activeClassName = "underline";

    const navigate = useNavigate();
    const authSlice = useSelector((state) => state.auth)

    return (
        <NavbarWrapper>
            <GroupLeft>
                <Logo onClick={() => navigate('/about')} src='../../assets/images/logo/logo.png'></Logo>
                <ul>
                    <li>
                        <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            <SewingMachine className="header-icons"  onClick={() => navigate('/about')}/>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story" className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            <Book className="header-icons" onClick={() => navigate('/story')}/>
                            STORY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            <Bag className="header-icons" onClick={() => navigate('/shop')}/>
                            BUY
                        </NavLink>
                    </li>
                </ul>
            </GroupLeft>
            <GroupRight>
                <ul>
                    <li>
                        <NavLink to="/donate" className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            <Donate className="header-icons" onClick={() => navigate('/donate')}/>
                            DONATE
                        </NavLink>
                    </li>
                    {(!authSlice.accessToken || authSlice.accessToken.length < 1) &&
                        <li>
                            <NavLink onClick={() => localStorage.removeItem('bagsAuth')} to="/login" className={({ isActive }) => isActive ? activeClassName : undefined}
                            >
                                <Login className="header-icons" />
                                {localToken ? 'LOGOUT' : 'LOGIN'}
                            </NavLink>
                        </li>
                    }
                </ul>
            </GroupRight>
        </NavbarWrapper>
    )
}

export default NavbarLinks