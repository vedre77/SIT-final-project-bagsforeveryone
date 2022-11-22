import { useState, useEffect } from 'react';

import {
    StyledInput,
    StyledLoginSectionContainer,
    StyledText
} from '../LoginSection.styled';
import {
    StyledLoginContainer,
    LoginImage
} from './Login.styled';

import {
    NavLink,
    useNavigate
} from 'react-router-dom';
import { LoginButton } from '../LoginSection.styled';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/auth/token/"

        const jsBody = {
            "email": email,
            "password": password,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody)
        }

        fetch(url, config)
        .then((response) => {
            if (response.status === 200) {
                const json = response.json();
                return json;
            }
            else {
                // console.log(response.json())
            }
        })
        .then(data => { setToken(data.access) });
    }
    useEffect(() => {

        if (token) {

            const jsObject = {
                bagsToken: token
            }

            localStorage.setItem("bagsAuth", JSON.stringify(jsObject));
            // console.log("the token was stored to local storage");
            navigate("/about")
        }
      }, [token]);

    return (
        <StyledLoginSectionContainer>
            <LoginImage />
            <StyledLoginContainer onSubmit={handleSubmit}>
                <StyledInput type="email" placeholder="Email" value={email} onChange={(args) => setEmail(args.target.value)}/>
                <StyledInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                <LoginButton  type='submit'>LOG IN</LoginButton>
                <StyledText>
                    Not signed up yet? <NavLink to="/register">Sign up</NavLink>
                </StyledText>
            </StyledLoginContainer>
        </StyledLoginSectionContainer>
    )
}

export default Login;