import HomeHeader from "./homeHeader.jsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DailyActivity from "../../components/dailyActivity/index.jsx";
import KeyNumbers from "../../components/keyNumbers/index.jsx";
import Session from "../../components/session/index.jsx";
import Performance from "../../components/performance/index.jsx";
import Score from "../../components/score/index.jsx";
function Home() {
    return (
        <section className="homepage section_py">
            <HomeHeader/>
            {/*
            Bar chart
            Line chart
                sur 9jours et overflow pour faire dépasser le charts
            Radar chart
            Radial chart ?
            */}
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
