import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function ScoreChart({score}) {
    const percentage = !isNaN(parseFloat(score)) ? parseFloat(score) * 100 : 0;
    const data = [
        {
            name: 'percentage',
            value: percentage,
            fill: '#FF0000',
        }
    ];
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
                        tick={false}
                    />
                    <RadialBar
                        minAngle={15} // Pour que la barre soit visible même avec des petites valeurs
                        dataKey="value" //! ERREUR SUR LA DATA
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