import {useEffect, useState} from 'react';
import {useFetch} from "../../utils/hooks/index.jsx";

function HomeHeader({idUser}) {
    const [userData, setUserData] = useState({});
    const url = `${__API_URL__}/user/${idUser}`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        data && setUserData(data);
    }, [data]);
    return (
        <>
            <h1 className="homepage-title">Bonjour <span className="homepage-title--highlight">{userData?.firstName}</span></h1>
            <p className="homepage-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>

    )
}

export default HomeHeader
