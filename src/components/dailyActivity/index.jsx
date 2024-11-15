import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import DailyBarChart from "./barChart.jsx";
import SessionLineChart from "../session/sessionLineChart.jsx";

function DailyActivity({idUser}) {
    const [userData, setUserData] = useState({});
    const url = `${__API_URL__}/user/${idUser}/activity`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setUserData(data);
    }, [data]);
    const boolData = !isLoading && (!userData ||  Object.keys(userData).length === 0);
    const divClassName = `card dailyActivity ${boolData ? "dailyActivity--nodata" : ""} ${isLoading ? "dailyActivity--loading" : ""}`;
    return (
        <>
            <div className={divClassName}>
                <p className="dailyActivity-label">Activité quotidienne</p>
                {isLoading && <p className="loading">Chargement...</p>}

                {/* If there is no data on userSessions yet, display a waiting message. */}
                {boolData ? (
                    <p className="error">Aucune donnée disponible pour le moment.</p>
                ) : (
                    <DailyBarChart activity={userData} />
                )}
            </div>
        </>
    );
}

export default DailyActivity
