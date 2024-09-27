import logo from "../../assets/img/logo.svg";
import {useLocation} from "react-router-dom";

function Header() {
   const path = useLocation().pathname;
    return (
        <>
            <header className="header">
                <img className="header_logo" src={logo} />
                <ul className="header_linkswp">
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link`} href="/">Accueil</a></li>
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link`}  href="/">Profil</a></li>
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link`}  href="/">Réglages</a></li>
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link`}  href="/">Communauté</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header
