import React, { useState, useEffect } from "react";

const PersonaForm = ({ onSave, editData }) => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    useEffect(() => {
        if (editData) {
            setNombre(editData.nombre);
            setEdad(editData.edad);
        }
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !edad) return;
        onSave({ nombre, edad, id: editData?.id });
        setNombre("");
        setEdad("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <button type="submit">{editData ? "Actualizar" : "Agregar"}</button>
        </form>
    );
};

export default PersonaForm;
