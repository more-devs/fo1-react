import React from "react";

const PersonaList = ({ personas, onEdit, onDelete }) => {
    return (
        <ul>
            {personas.map((p) => (
                <li key={p.id}>
                    {p.nombre} - {p.edad} años
                    <button onClick={() => onEdit(p)}>Editar</button>
                    <button onClick={() => onDelete(p.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default PersonaList;
