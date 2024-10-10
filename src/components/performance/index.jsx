import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import PerformanceRadarChart from "./perfomanceRadarChart.jsx";

function Performance() {
    const [performance, setPerformance] = useState({});
    const url = `${__API_URL__}/user/12/performance`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setPerformance(data);
    }, [data]);
    return (
        <>
            <div className="card card--small performance">
                <PerformanceRadarChart performance={performance} />
            </div>
        </>
    );
}

export default Performance
