import '../../styles/containers/section-discr.css'
import network from '../../img/icons/network-icon.svg'
import experience from '../../img/icons/experience.svg'
import development from '../../img/icons/development.svg'


function SectionDiscr() {
    return(
        <div className='section-discr'>
            <div className="layout section-discr__header">
                <h1 className="h1 section-discr__label">SDT Innovation club</h1>
                <p className="sublabel typography-root section-discr__underlabel">
                    Expand your horizons, gain knowledge, and create future with us.
                </p>
            </div>
            <h2 className="h2 typography-root section_discr__sublabel" id='tWeDo'>Things we do</h2>
            <div className="section-discr__container">
                <div className="section-discr__container__card">
                    <img src={network} alt="networking-icon" style={{height: '40px'}}/>
                    <h6 className="h6 typography-root section-discr__container__card_label">Networking</h6>
                    <p className="sublabel typography-root section-discr__container__card_label">
                        Unite young, creative,innovative like-minded people.
                    </p>
                </div>
                <div className="section-discr__container__card">
                    <img src={experience} alt="experience-icon" style={{height: '40px'}}/>
                    <h6 className="h6 typography-root section-discr__container__card_label">Experience Exchange</h6>
                    <p className="sublabel typography-root section-discr__container__card_label">
                        Exchange of experience and impressions with pros and beginners. getting new skills,
                        new look at the world trough the experience of other people.
                    </p>
                </div>
                <div className="section-discr__container__card">
                    <img src={development} alt="development-icon" style={{height: '40px'}}/>
                    <h6 className="h6 typography-root section-discr__container__card_label">Development</h6>
                    <p className="sublabel typography-root section-discr__container__card_label">
                        Provide the knowledge and skills for the development of startup,
                        multiply the number of young generation in startup and entrepreneurs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionDiscr
