import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import PerformanceRadarChart from "./perfomanceRadarChart.jsx";

function Performance({idUser}) {
    const [performance, setPerformance] = useState({});
    const url = `${__API_URL__}/user/${idUser}/performance`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setPerformance(data);
    }, [data]);
    const boolData = !isLoading && (!performance || !performance.data || performance.data.length === 0);
    const divClassName = `card card--small performance ${boolData ? "performance--nodata":""} ${isLoading ? "performance--loading":""}`;
    return (
        <>
            <div className={divClassName}>
                {isLoading && <p className="loading">Chargement...</p>}

                {/* If there is no data on performance yet, display a waiting message. */}
                {boolData ? (
                    <p className="error">Aucune performance disponible pour le moment.</p>
                ) : (
                    <PerformanceRadarChart performance={performance} />
                )}
            </div>
        </>
    );
}

export default Performance
