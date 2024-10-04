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
    const itemStyle = {
        background: 'black',
        color:"white",
        fontSize:"24px"
    };
    const contentStyle = {
        background: '#E60000',
    };
    const labelStyle = {
        display: 'none',
    };
    const formatTooltip = (value, name)=> {
        const unit = name=="calories" ? "Kcal":"kg";
        return [`${value} ${unit}`];
    }
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={700}
                height={300}
                data={activity.sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap={'number'}
                barGap={'8'}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={getXAxisDays}/>
                <YAxis yAxisId="kilogram" dataKey={'kilogram'} orientation={'right'} type="number"
                       domain={['dataMin - 3', 'dataMax + 3']}/>
                <YAxis dataKey={'calories'} hide={true}/>
                <Tooltip label={false} formatter={(value, name, props) => formatTooltip(value,name)} itemStyle={itemStyle} contentStyle={contentStyle} labelStyle={labelStyle}/>
                <Legend align={'right'} verticalAlign={'top'} iconType={'circle'}/>
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