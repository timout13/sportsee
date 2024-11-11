import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import SessionLineChart from "./sessionLineChart.jsx";
import PerformanceRadarChart from "../performance/perfomanceRadarChart.jsx";

function Session({idUser}) {
    const [userSessions, setUserSessions] = useState({});
    const url = `${__API_URL__}/user/${idUser}/average-sessions`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setUserSessions(data);
    }, [data]);
        const boolData = !isLoading && (!userSessions ||  Object.keys(userSessions).length === 0);
        const divClassName = `card card--small session ${boolData ? "session--nodata":""} ${isLoading ? "session--loading":""}`;
    return (
        <>
            <div className={divClassName}>
                <p className="session-label">Durée moyenne des sessions</p>
                {isLoading && <p className="loading">Chargement...</p>}

                {/* If there is no data on userSessions yet, display a waiting message. */}
                {boolData ? (
                    <p className="error">Aucune donnée disponible pour le moment.</p>
                ) : (
                    <SessionLineChart userSessions={userSessions} />
                )}
            </div>
        </>
    );
}

export default Session
