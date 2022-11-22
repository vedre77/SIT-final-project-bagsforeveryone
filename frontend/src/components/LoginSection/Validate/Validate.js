import { useState } from 'react';

import {
    StyledInput,
    StyledLoginSectionContainer,
    StyledText,
    StyledTitle,
    ErrorContainer,
    LoginButton
} from '../LoginSection.styled';

import {
    Link
} from 'react-router-dom';

import {
    ValidateContainer,
    StyledValidateContainer
} from './Validate.styled'


const Validate = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();

        if (firstName.length < 1) {
            setError('Please enter your name.');
            return;
        }
        if (lastName.length < 1) {
            setError('Please enter your last name.');
            return;
        }
        if (username.length < 1) {
            setError('Please enter your username.');
            return;
        }
        if (verificationCode.length < 1) {
            setError('Please enter your validation code.');
            return;
        }
        if (password.length < 1) {
            setError('Please enter your password.');
            return;
        }
        if (repeatPassword.length < 1) {
            setError('Please repeat your password.');
            return;
        }
        setError('');
        //fetch
        fetch('https://bag-for-everyone.propulsion-learn.ch/backend/api/auth/registration/validation/', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              //email: emailAddress,
                email: username,
                username: username,
                code: verificationCode,
                password: password,
                password_repeat: repeatPassword,
                first_name: firstName,
                last_name: lastName
            })
        })
            .then((response) => {
                if (!response.ok) {

                }
                return response.json();
            })
            .then((json) => {
                if (json.code) {
                    setError(json.code);
                    return;
                }
                if (json.email) {
                    setError(json.email);
                    return;
                }
            });
    }


    return (
        <StyledLoginSectionContainer>
            <ValidateContainer >
                <StyledValidateContainer onSubmit={onSubmit}>
                    <StyledTitle className='validate-title'>
                        <strong>
                            Step 2:&nbsp;
                        </strong>
                        Validate your email
                    </StyledTitle>
                    <StyledText>
                        An email with your validation code was sent to your email address if it was valid. <br />
                        Use it along the other information below to validate  your email address.
                    </StyledText>
                    <div className="rows">
                        <div className="cols">
                            <StyledInput type="text" placeholder="First name" value={firstName} onChange={(args) => setFirstName(args.target.value)} />
                            <StyledInput type="email" placeholder="Email" value={username} onChange={(args) => setUsername(args.target.value)} />
                            <StyledInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                        </div>
                        <div className="cols">
                            <StyledInput type="text" placeholder="Last name" value={lastName} onChange={(args) => setLastName(args.target.value)} />
                            <StyledInput type="text" placeholder="Verification code" value={verificationCode} onChange={(args) => setVerificationCode(args.target.value)} />
                            <StyledInput type="password" placeholder="Repeat password" value={repeatPassword} onChange={(args) => setRepeatPassword(args.target.value)} />
                        </div>
                    </div>
                    <LoginButton type='submit'>VALIDATE</LoginButton>

                    {
                        error.length > 0 &&
                        <ErrorContainer>
                            {error}
                        </ErrorContainer>
                    }

                </StyledValidateContainer>
            </ValidateContainer>
        </StyledLoginSectionContainer>
    )
}


export default Validate;