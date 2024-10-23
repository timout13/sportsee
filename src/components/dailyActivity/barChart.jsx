import React from 'react';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
    ResponsiveContainer
} from 'recharts';

export default function DailyBarChart({activity}) {
    function getXAxisDays() {
        return [1, 2, 3, 4, 5, 6, 7];
    }
    const wrapperStyle = {
        background: '#E60000',
        width:"39px",
        height:"63px",
        padding:"4px",
        display: "grid",
        justifyContent:"space-between",
        alignContent: "stretch",

    };
    const itemStyle = {
        color:"white",
        fontSize:"7px",
        padding: "0px",
        border:0,
        background: "transparent"
    };
    const contentStyle = {
        padding: "0px",
        border:0,
        background: "transparent",
        height: "100%"
    };
    const labelStyle = {
        display: 'none',
    };

    const legendWrapperStyle ={
        fontSize: "14px",
        right: "24px",
        top: "30px"
    }

    const formatLegend = (value, entry, index) => {
         const legend = value == "calories" ? "Calories brûlées (kCal)" : "Poids (kg)";
        return legend;
    }
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='barChart-tooltip-wrapper'>
                    <p className='barChart-tooltip-wrapper-label'>{`${payload[0].value} kg`}</p>
                    <p className='barChart-tooltip-wrapper-label'>{`${payload[1].value} Kcal`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <ResponsiveContainer width="100%" height={206}>
            <BarChart
                width="100%"
                height={100}
                data={activity.sessions}
                barCategoryGap={'number'}
                barGap={'8'}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis tickMargin={16} tick={{fontSize:"14px", fontWeight:"600", color:"#9B9EAC"}} tickLine={false} dataKey={getXAxisDays}/>
                <YAxis yAxisId="kilogram" dataKey={'kilogram'} orientation={'right'} type="number"
                       domain={['dataMin - 3', 'dataMax + 3']}/>
                <YAxis dataKey={'calories'} hide={true}/>
                <Tooltip content={CustomTooltip} />
                <Legend className={"tst"} wrapperStyle={legendWrapperStyle} formatter={formatLegend} align={'right'} verticalAlign={'top'} iconType={'circle'}/>
                <Bar dataKey="kilogram" radius={[3, 3, 0, 0]} barSize={7} fill="#282D30"
                     activeBar={<Rectangle/>} yAxisId="kilogram"/>
                <LabelList dataKey="kilogram" position="top"/>
                <Bar dataKey="calories" radius={[3, 3, 0, 0]} barSize={7} fill="#E60000"
                     activeBar={<Rectangle/>}/>

            </BarChart>
        </ResponsiveContainer>
    );
}
// Légende trop petite par rapport aux calories ==> Regarder param scale
// Forme des bars