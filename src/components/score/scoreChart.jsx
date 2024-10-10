import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Objectif',
        uv: 45, // Pourcentage dynamique
        fill: '#FF0000', // Couleur rouge pour la barre
    },
];

export default function ScoreChart() {
    const percentage = data[0].uv; // Récupère le pourcentage dynamique

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%" cy="50%"
                    innerRadius="80%" // Ajuste la taille du cercle interne
                    outerRadius="100%" // Ajuste la taille de la barre
                    startAngle={90} // Démarrage à 12h
                    endAngle={450} // Rotation dans le sens des aiguilles d'une montre
                    barSize={10}
                    data={data}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]} // Domain sur 100% pour bien indiquer l'objectif
                        angleAxisId={0}
                        tick={false} // Pas de graduation
                    />
                    <RadialBar
                        minAngle={15} // Pour que la barre soit visible même avec des petites valeurs
                        clockWise
                        dataKey="uv"
                        cornerRadius={10} // Bord arrondi
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="score-circle">
                <p className="score-circle-text"><span className="score-circle-text-percentage">{percentage}%</span><br/>de votre objectif</p>
            </div>
        </>
    );
}