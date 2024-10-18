import React from 'react';

const Card = ({ creative }) => {
    return (
        <div className="bg-white p-4 rounded shadow-lg">
            <img src={creative.coverUrl} alt={creative.name} className="mb-4 rounded" />
            <h2 className="text-xl font-bold">{creative.name}</h2>
            <p><strong>Rank:</strong> {creative.rank}</p>
            <p><strong>Cliques:</strong> {creative.clickCntAll}</p>
            <p><strong>Conversões:</strong> {creative.Conversões}</p>
            <p><strong>CTR:</strong> {creative.ctr}</p>
            <p><strong>CVR:</strong> {creative.cvr}</p>
            <a href={creative.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">Ver Vídeo</a>
        </div>
    );
};

export default Card;
