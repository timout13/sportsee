import HomeHeader from "./homeHeader.jsx";
import DailyActivity from "../../components/dailyActivity/index.jsx";
import KeyNumbers from "../../components/keyNumbers/index.jsx";
import Session from "../../components/session/index.jsx";
import Performance from "../../components/performance/index.jsx";
import Score from "../../components/score/index.jsx";
function Home() {
    return (
        <section className="homepage section_py">
            <HomeHeader/>
            <div className="homepage-content">
                <DailyActivity/>
                <Session/>
                <Performance/>
                <Score/>
                <KeyNumbers/>
            </div>
        </section>
    );
}

export default Home
