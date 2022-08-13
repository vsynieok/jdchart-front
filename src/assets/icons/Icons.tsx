import {ReactComponent as HomeSvg} from "./Home.svg";
import {ReactComponent as AboutSvg} from "./About.svg";
import {ReactComponent as ChartsSvg} from "./Charts.svg";
import IconProperties from "./IconProperties";

const Home = (properties: IconProperties) => {
    return (
        <HomeSvg className={properties.className}/>
    )
}

const About = (properties: IconProperties) => {
    return (
        <AboutSvg className={properties.className}/>
    )
}

const Charts = (properties: IconProperties) => {
    return (
        <ChartsSvg className={properties.className}/>
    )
}


export default {
    Home,
    About,
    Charts
}