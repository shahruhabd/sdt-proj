import SectionDiscr from '../../containers/sections/section-discr'
import SectionReport from "../../containers/sections/section-report";


function MainContainer() {
    return(
        <div className="layout main-container">
            <SectionDiscr></SectionDiscr>
            <SectionReport></SectionReport>
        </div>
    )
}

export default MainContainer