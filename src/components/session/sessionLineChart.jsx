import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from 'recharts';

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
    function getSession(sessions){
        const days = getXAxisDays();
        return sessions.map((session,index) => {
           return {day: days[index + 1],value: session.sessionLength}
        })
    }
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='session-tooltip'>
                    <p className='session-tooltip-value'>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ points }) => {
        return <Rectangle fill='#000000' opacity={0.2} x={points[0].x} width={1000} height={300} />;
    };
        return (
            <ResponsiveContainer width="115%" height="100%" >
                <LineChart
                    data={sessions}
                    margin={{
                        top: 20,
                        right: 5,
                        left: 5,
                        bottom: 15,
                    }}
                >
                    <defs>
                        <linearGradient id='sessionLine' x1='0%' y1='0' x2='100%' y2='0'>
                            <stop offset='0%' stopColor='rgba(255, 255, 255, 0.3)'/>
                            <stop offset='20%' stopColor='rgba(255, 255, 255, 0.4)'/>
                            <stop offset='40%' stopColor='rgba(255, 255, 255, 0.5)'/>
                            <stop offset='60%' stopColor='rgba(255, 255, 255, 0.6)'/>
                            <stop offset='100%' stopColor='rgba(255, 255, 255, 1)'/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{
                        fill: 'rgba(255, 255, 255, 50%)',
                        stroke: 'rgba(255, 255, 255, 50%)',
                        strokeWidth: 1
                    }}/>
                    <YAxis hide={true}/>
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />}/>
                    <Line type="monotone" dot={false} dataKey="value" stroke='url(#sessionLine)'
                          strokeWidth={2}
                          activeDot={activeDotStyle}/>
                </LineChart>
            </ResponsiveContainer>
        );
}
