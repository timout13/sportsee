import {useEffect, useState} from "react";
import {useFetch} from "../../utils/hooks/index.jsx";
import KeyContent from "./keyContent.jsx";
function KeyNumbers() {
    const [keyNumbers, setKeyNumbers] = useState([]);
    const url = `${__API_URL__}/user/12/`;
    const {data, isLoading, error} = useFetch(url);

    useEffect(() => {
        if(data){
            const entries = Object.entries(data.keyData);
            setKeyNumbers(entries)
        }
    }, [data]);
    return (
        <div className="keyNumbers">
                {keyNumbers && keyNumbers.map((keyNumber,i)=> <KeyContent data={keyNumber} key={i} /> )}
        </div>
    );
}

export default KeyNumbers
