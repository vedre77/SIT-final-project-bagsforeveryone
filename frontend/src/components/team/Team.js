import {
    StyledTeamContainer
} from './Team.styled'

const Team = () => {

    return (
        <StyledTeamContainer>
            {/* Team Lesvos */}
            <div className='team'>
                <div>
                    <h2>
                        Team Lesvos
                    </h2>
                    <p>
                        On Lesvos, the team organize the tailoring workshop in their headquarters in Mytilene,
                        called “OpenSpace”, they create the design for the bags,
                        introduce residents of the camp, and locals on the island, to the project,
                        and develop the sewing and tailoring classes. There are also two tailors
                        who teach the sewing classes, and who lead the production of our beautiful bags.
                    </p>
                </div>
                <div className='images'>
                    <div>
                        <img src="/assets/images/Rectangle2.png" />
                        <label>Name of photo</label>
                    </div>
                    <div>
                        <img src="/assets/images/Rectangle3.png" />
                        <label>Name of photo</label>
                    </div>
                    <div>
                        <img src="/assets/images/Rectangle4.png" />
                        <label>Name of photo</label>
                    </div>
                </div>
            </div>
            {/* Swiss Team*/}
            <div className='swiss'>
                <div>
                    <img src="/assets/images/swissteam1.png" />
                </div>
                <div>
                    <h2>
                        Swiss Team
                    </h2>
                    <p>
                        Every project that is supported and implemented by
                        #EducationEveryone aims to provide refugees and displaced
                        people with an access to education; the bagforeveryone project is no exception.
                        The Swiss team is in charge of the sales, the communication,
                        and the fundraising of the bags. Markus (on the left) is responsible for the
                        IT and finances of the project, and both Diana (in the middle) and Olivia
                        ( on the right) are responsible for the fundraising and the communication of
                        bagforeveryone. Stefan, missing on the picture, helps with all the strategic topics.
                    </p>
                </div>

            </div>
            {/* Tailors */}
            <div className='tailors'>
                <div>
                    <h2>
                        Tailors
                    </h2>
                    <p>

                        Tila and Marzia are our two wonderful tailors who give the BagforEveryone sewing classes at OpenSpace, the community centre of our partner Starfish Foundation.
                        Tila (left) has been working with us now since spring 2021. She is very passionate about tailoring and brings a wealth of experience, having been sewing for over fifteen years.
                        Marzia (right) only joined our team at the end of October 2021 and also brings a wealth of knowledge and experience to the project. She is from Afghanistan and has been in Greece for three years. She has twenty years of tailoring experience, both in her home country and during her time in Iran, and can now continue her passion here in Greece


                    </p>
                </div>
                <div>
                    <img src="/assets/images/tailors1.png" />
                </div>
            </div>
        </StyledTeamContainer>
    )
}

export default Team;