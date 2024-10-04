import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import DailyBarChart from "./barChart.jsx";

function DailyActivity() {
    const [userData, setUserData] = useState({});
    const url = `${__API_URL__}/user/12/activity`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setUserData(data);
    }, [data]);
        console.log(userData)
    return (
        <>
            <div className="dailyActivity">
                <p className="dailyActivity-label">Activité quotidienne</p>
                <DailyBarChart activity={userData} />
            </div>
        </>
    );
}

export default DailyActivity
