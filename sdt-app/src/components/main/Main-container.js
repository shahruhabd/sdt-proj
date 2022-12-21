import SectionDiscr from '../../containers/sections/section-discr'
import SectionReport from "../../containers/sections/section-report";
import SectionMeetups from '../../containers/sections/section-meetups';
import Initatives from '../initatives/Initatives';


function MainContainer() {
    return(
        <div className="layout main-container">
            <SectionDiscr></SectionDiscr>
            <Initatives></Initatives>
            <SectionReport></SectionReport>
            <SectionMeetups></SectionMeetups>
        </div>
    )
}

export default MainContainer