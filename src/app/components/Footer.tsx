import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer = ({lang}: {lang: string}) => {
    return <div>
        <FooterTop lang={lang}/>
        <FooterMiddle />
        <FooterBottom />
    </div>;
}

export default Footer;