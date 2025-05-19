import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function CrudApp() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);

    const API_URL = mysql.railway.internal;

    const fetchItems = async () => {
        const res = await axios.get(API_URL);
        setItems(res.data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await axios.put(`${API_URL}/${editId}`, { name });
        } else {
            await axios.post(API_URL, { id: uuidv4(), name });
        }
        setName('');
        setEditId(null);
        fetchItems();
    };

    const handleEdit = (item) => {
        setName(item.name);
        setEditId(item.id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchItems();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>CRUD con React + Node + MySQL</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">{editId ? 'Actualizar' : 'Agregar'}</button>
            </form>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}{' '}
                        <button onClick={() => handleEdit(item)}>Editar</button>{' '}
                        <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudApp;
