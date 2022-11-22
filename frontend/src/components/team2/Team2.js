import {
    StyledTeamContainer,
    StyledTeam,
    StyledTailorsSwiss
} from './Team2.styled'

const Team2 = () => {

    return (
        <StyledTeamContainer>
            <StyledTeam>
                <h2>
                    Team Lesvos
                </h2>
                <p>
                    On Lesvos, the team organize the tailoring workshop in their headquarters in Mytilene,
                    called “OpenSpace”, they create the design for the bags,
                    introduce residents of the camp, and locals on the island, to the project,
                    and develop the sewing and tailoring classes.
                </p>
                <br/>
                <div className='images'>
                    <div className='image'>
                        <img src="/assets/images/Rectangle7.png" />
                        <label>
                            <strong>Christina</strong> <br />
                            Project Manager
                        </label>
                    </div>
                    <div className='image'>
                        <img src="/assets/images/Rectangle4.png" width={200} height={219} />
                        <label>
                            <strong>Melinda</strong> <br />
                            Founder Starfish Foundation
                        </label>
                    </div>
                    <div className='image'>
                        <img src="/assets/images/Rectangle6.png" />
                        <label>
                            <strong>Anne</strong> <br />
                            Finances
                        </label>
                    </div>
                </div>
            </StyledTeam>
            <StyledTailorsSwiss>
                <div className='column'>
                    <h2>
                        The Tailors
                    </h2>
                    <p>

                        Tila (left) and Marzia (right) are our two wonderful tailors
                        who give the BagforEveryone sewing classes at OpenSpace, the community centre of our partner Starfish Foundation.
                    </p>
                </div>
                <div className='column'>
                    <img src="/assets/images/Rectangle11.png" />
                </div>
                <div className='column'>
                    <img src="/assets/images/Rectangle13.png" />
                </div>
                <div className='column'>
                    <h2>
                        Swiss Team
                    </h2>
                    <p>
                        The Swiss team is in charge of the sales, the communication, and the fundraising of the bags.
                        Markus (on the left) is responsible for the IT and finances of the project, and both Diana (in the middle)
                        and Olivia ( on the right) are responsible for the fundraising and the communication of bagforeveryone. Stefan,
                        missing on the picture, helps with all the strategic topics.
                    </p>
                </div>
            </StyledTailorsSwiss>
        </StyledTeamContainer>
    )
}

export default Team2;