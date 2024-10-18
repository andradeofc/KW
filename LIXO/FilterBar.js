import React from 'react';

const FilterBar = ({ setDays, setFilter }) => {
    return (
        <div className="flex justify-center mb-4">
            <label className="mr-2">Dias:</label>
            <select
                onChange={(e) => setDays(Number(e.target.value))}
                className="border p-2 mr-4"
            >
                <option value={7}>Últimos 7 dias</option>
                <option value={15}>Últimos 15 dias</option>
                <option value={30}>Últimos 30 dias</option>
            </select>

            <label className="mr-2">Filtrar por:</label>
            <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
                <option value="clicks">Número de Cliques</option>
                <option value="conversions">Número de Conversões</option>
            </select>
        </div>
    );
};

export default FilterBar;
