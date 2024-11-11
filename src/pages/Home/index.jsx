import HomeHeader from "./homeHeader.jsx";
import DailyActivity from "../../components/dailyActivity/index.jsx";
import KeyNumbers from "../../components/keyNumbers/index.jsx";
import Session from "../../components/session/index.jsx";
import Performance from "../../components/performance/index.jsx";
import Score from "../../components/score/index.jsx";
import {Navigate, useParams} from "react-router-dom";
function Home() {
    const { idUser } = useParams();
    if (!idUser && !idUser) {
        return <Navigate to="/erreur" replace={true}/>;
    }
    return (
        <section className="homepage section_py">
            <HomeHeader idUser={idUser} />
            <div className="homepage-content">
                <DailyActivity idUser={idUser} />
                <Session idUser={idUser} />
                <Performance idUser={idUser} />
                <Score idUser={idUser} />
                <KeyNumbers idUser={idUser} />
            </div>
        </section>
    );
}

export default Home
