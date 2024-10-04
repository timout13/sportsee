import caloriesImg from "../../assets/img/tracker-icon-calories.svg";
import glucidImg from "../../assets/img/tracker-icon-glucid.svg";
import lipidImg from "../../assets/img/tracker-icon-lipid.svg";
import proteinImg from "../../assets/img/tracker-icon-protein.svg";
import {useEffect, useState} from "react";
function KeyContent({data}) {
    const [key, value] = data;
    const [tracker, setTracker] = useState(
        { "label":"label",
        "value": `${value} `,
        "img":'/'}
    );
    useEffect(()=>{
        switch (key) {
            case "calorieCount":
                setTracker({"label":"Calories",
                "value": `${value}Kcal`,
                "img":caloriesImg})
                break;
            case "proteinCount":
                setTracker({"label":"Proteines",
                    "value": `${value}g`,
                    "img":proteinImg})
                break;
            case "carbohydrateCount":
                setTracker({"label":"Glucides",
                    "value": `${value}g`,
                    "img":glucidImg})
                break;
            case "lipidCount":
                setTracker({"label":"Lipides",
                    "value": `${value}g`,
                    "img":lipidImg})
                break;
    }
    console.log(data);
    },[data])
    return (
        <>
            <div className="card card--p-number keyNumbers-key">
                <img src={tracker.img}/>
                <div className="keyNumbers-key-txt">
                    <p className="keyNumbers-key-txt-value">{tracker && tracker.value}</p>
                    <p className="keyNumbers-key-txt-label">{tracker && tracker.label}</p>
                </div>
            </div>
        </>
    );
}

export default KeyContent
