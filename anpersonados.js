// src/components/PersonaForm.js
import React, { useState } from 'react';

const PersonaForm = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, edad });
        setNombre('');
        setEdad('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
            />
            <button type="submit">Agregar</button>
        </form>

    );
};

export default PersonaForm;
