import {
    StyledLoginSectionContainer,
    StyledText, StyledTextV,

} from '../LoginSection.styled';

import {
    StyledVerifiedContainer
} from './Verified.styled';

const Verified = () => {

    return (
        <StyledLoginSectionContainer>
            <StyledVerifiedContainer >
                <div className='images'>
                    <img src="/assets/images/Rectangle14.png" />
                </div>
                <StyledTextV >
                   <strong> Your email address has been successfully verified!</strong>
                </StyledTextV>
                <br/>
                <StyledText>
                Head back to the log-in page in order to access full potential of our page.
                </StyledText>

            </StyledVerifiedContainer>
        </StyledLoginSectionContainer>
    )
}

export default Verified;