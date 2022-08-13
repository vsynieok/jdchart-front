import { ReactComponent as AboutSvg } from "./About.svg";
import { ReactComponent as ChartsSvg } from "./Charts.svg";
import { ReactComponent as HomeSvg } from "./Home.svg";
import IconProperties from "./IconProperties";
import "./IconStyles.css";
import { ReactComponent as LoadingSvg } from "./Loading.svg";

const Home: React.FC<IconProperties> = (properties: IconProperties) => {
  return <HomeSvg className={properties.className} />;
};

const About: React.FC<IconProperties> = (properties: IconProperties) => {
  return <AboutSvg className={properties.className} />;
};

const Charts: React.FC<IconProperties> = (properties: IconProperties) => {
  return <ChartsSvg className={properties.className} />;
};

const Loading: React.FC<IconProperties> = (properties: IconProperties) => {
  return <LoadingSvg className={"loading " + properties.className} />;
};

const icons = {
  Home,
  About,
  Charts,
  Loading,
};

export default icons;
