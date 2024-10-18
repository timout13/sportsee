import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function SessionLineChart({userSessions}) {
    const [sessions, setSessions] = useState([]);
    const activeDotStyle = { stroke: 'rgba(255, 255, 255, 0.1983)', fill:'white', strokeWidth: 5, r: 4 };
    useEffect(() => {
        if(userSessions && userSessions.sessions){
            const sessionsLength = getSession(userSessions.sessions);
            sessionsLength.unshift({ day: "", value: sessionsLength[0].value });
            sessionsLength.push({ day: "", value: sessionsLength[sessionsLength.length - 1].value });
            setSessions(sessionsLength);
        }
    }, [userSessions]);
    function getXAxisDays() {
        return ["","L", "M", "M", "J", "V", "S", "D",""];
    }
            console.log(sessions)
    function getSession(sessions){
        const days = getXAxisDays();
        return sessions.map((session,index) => {
           return {day: days[index + 1],value: session.sessionLength}
        })
    }
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={sessions}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fill: 'rgba(255, 255, 255, 50%)',stroke: 'rgba(255, 255, 255, 50%)', strokeWidth: 1}} />
                    <YAxis  hide={true}/>
                    <Tooltip />
                    <Line type="monotone" dot={false} dataKey="value" stroke="white" strokeWidth={2} activeDot={activeDotStyle} />
                </LineChart>
            </ResponsiveContainer>
        );
}
