import logo from "../../assets/img/logo.svg";
import {useLocation} from "react-router-dom";

function Header() {
   const path = useLocation().pathname;
    return (
        <>
            <header className="header section_py">
                <img className="header_logo" src={logo} />
                <ul className="header_linkswp">
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link ${path === '/' && 'header_linkswp_item_link_active'}`} href="/">Accueil</a></li>
                    <li className="header_linkswp_item"><a className={`header_linkswp_item_link ${path === '/a-propos' && 'header_linkswp_item_link_active'}`}  href="/a-propos">À propos</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header
