import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import ScoreChart from "./scoreChart.jsx";

function Score() {
    const [score, setScore] = useState({});
    const url = `${__API_URL__}/user/12/`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setScore(data.todayScore);
    }, [data]);
    return (
        <>
            <div className="card card--small score">
                <ScoreChart score={score} />
            </div>
        </>
    );
}

export default Score
