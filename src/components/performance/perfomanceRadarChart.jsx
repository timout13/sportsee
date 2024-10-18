import React, {useEffect, useState} from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function PerfomanceRadarChart({performance}) {
        const [perfs,setPerfs]= useState([]);
        useEffect(()=>{
            if (performance && performance.data && performance.data.length > 0){
                const formatPerfs = performance.data.map(item=>{
                    const label = getLabel(item.kind);
                    return {kind:label, value: item.value}
                });
                const order = ["intensité", "vitesse", "force", "endurance", "energie", "cardio"];

                formatPerfs.sort((a, b) => order.indexOf(a.kind.toLowerCase()) - order.indexOf(b.kind.toLowerCase()));

                setPerfs(formatPerfs);
            }
        },[performance])
        function getLabel(slug){
            switch (slug) {
                case "cardio":
                    return "Cardio";
                case "energy":
                    return "Energie";
                case "endurance":
                    return "Endurance";
                case "strength":
                    return "Force";
                case "speed":
                    return "Vitesse";
                case "intensity":
                    return "Intensité";
                default:
                    return "Non défini"
            }
        }
        if (!perfs || perfs.length === 0) {
            return <p>Aucune donnée de performance disponible.</p>;
        }
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart width={259} data={perfs} startAngle={90}>
                    <PolarGrid stroke="#fff" radialLines={false} />
                    <PolarAngleAxis axisLine={false} tick={{fill: 'rgba(255, 255, 255, 50%)',stroke: 'rgba(255, 255, 255, 50%)', fontSize:"12px"}}  dataKey="kind" />
                    <Radar legendType="none" dataKey="value"  fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
}
