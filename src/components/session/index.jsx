import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import SessionLineChart from "./sessionLineChart.jsx";

function Session() {
    const [userSessions, setUserSessions] = useState({});
    const url = `${__API_URL__}/user/12/average-sessions`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setUserSessions(data);
    }, [data]);
    return (
        <>
            <div className="card session">
                <p className="session-label">Durée moyenne des sessions</p>
                <SessionLineChart userSessions={userSessions} />
            </div>
        </>
    );
}

export default Session
