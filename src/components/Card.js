import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="bg-white shadow rounded-lg border mt-4">
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm"~{description}</p>
        </div>
    );
};

export default Card;
