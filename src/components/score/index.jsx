import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import ScoreChart from "./scoreChart.jsx";

function Score({idUser}) {
    const [score, setScore] = useState({});
    const url = `${__API_URL__}/user/${idUser}/`;
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
