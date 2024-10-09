import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Vitesse',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

export default function PerfomanceRadarChart({performance}) {

        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data}>
                    <PolarGrid stroke="#fff" radialLines={false} />
                    <PolarAngleAxis axisLine={false} tick={{fill: 'rgba(255, 255, 255, 50%)',stroke: 'rgba(255, 255, 255, 50%)', fontSize:"12px"}}  dataKey="subject" />
                    <Radar legendType="none" name="Mike" dataKey="A"  fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
}
