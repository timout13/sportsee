import yogaImg from "../../assets/img/yoga-icon.svg";
import dumbellImg from "../../assets/img/dumbell-icon.svg";
import cycleImg from "../../assets/img/cycle-icon.svg";
import swimImg from "../../assets/img/swim-icon.svg";
function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <ul className={'sidebar-menu'}>
                    <li><a className={'sidebar-menu-link'}><img src={yogaImg} className={'sidebar-menu-link-img'}/></a></li>
                    <li><a className={'sidebar-menu-link'}><img src={swimImg} className={'sidebar-menu-link-img'}/></a></li>
                    <li><a className={'sidebar-menu-link'}><img src={cycleImg} className={'sidebar-menu-link-img'}/></a></li>
                    <li><a className={'sidebar-menu-link'}><img src={dumbellImg} className={'sidebar-menu-link-img'}/></a></li>
                </ul>
                <p className={'sidebar-copyright'}>Copyright, SportSee 2024</p>
            </aside>
        </>
    );
}

export default Sidebar
