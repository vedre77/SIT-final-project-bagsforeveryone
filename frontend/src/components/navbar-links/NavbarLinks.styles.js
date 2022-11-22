import styled from "styled-components";
import {GiSewingMachine, GiBlackBook} from 'react-icons/gi';
import { SlHandbag, SlLogin } from 'react-icons/sl';
import { BiDonateHeart } from 'react-icons/bi'; 

export const NavbarWrapper = styled.nav`
    border: 1px solid #DDD8C4;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255);
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 4em;
    left: 1em;
    padding: .5em;
    gap: 1em;

    ul {
        /* border: 1px solid red; */
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        gap: 1em;
    }
    
    .underline {
        border-bottom: 3px solid #DABC39;
        padding-bottom: .5rem;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .header-icons {
        display: none;

        @media (min-width: 840px) {
            display: inline-block;
	    }
	    
    }

    // whole navbar:
    @media (min-width: 600px) {
        top: 0;
        left: 0;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
	}

    @media (min-width: 780px) {
        font-size: 1em;
	}
`
// Navbar React icons:
export const SewingMachine = styled(GiSewingMachine)`
    font-size: 1.5em;
    position: relative;
    top: .1em;
    right: .5em;
`

export const Book = styled(GiBlackBook)`
    font-size: 1.5em;
    position: relative;
    top: .1em;
    right: .5em;
`

export const Bag = styled(SlHandbag)`
    font-size: 1.5em;
    position: relative;
    top: .1em;
    right: .5em;
`

export const Donate = styled(BiDonateHeart)`
    font-size: 1.5em;
    position: relative;
    top: .1em;
    right: .5em;
`

export const Login = styled(SlLogin)`
    font-size: 1.5em;
    position: relative;
    top: .1em;
    right: .5em;
`

export const GroupLeft = styled.div`
    /* border: 1px solid red; */

    @media (min-width: 600px) {
        width: 70%;
        display: flex;
	}

    ul {
        @media (min-width: 600px) {
            /* border: 1px solid green; */
            display: flex;
            width: 100%;
            justify-content: space-around;
            flex-direction: row;
	    }

        @media (min-width: 800px) {
            justify-content: flex-start;
            gap: 3em;
            margin-left: 2em;
	    }

        @media (min-width: 1000px) {
            justify-content: flex-start;
            gap: 5em;
            margin-left: 3em;
	    }
    }
`

export const GroupRight = styled.div`
    /* border: 1px solid red; */

    @media (min-width: 600px) {
        width: 30%;
        display: flex;
    }

ul {
    @media (min-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2em;
        padding-right: 1em;
    }
    @media (min-width: 1000px) {
        gap: 5em;
        padding-right: 2em; 
    }
}
`

export const Logo = styled.img`
    width: 80px;
    padding: .5em;
`

