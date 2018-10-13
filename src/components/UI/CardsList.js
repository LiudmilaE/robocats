import React from 'react';
import Card from './Card';
import './CardsList.css';

export const CardsList = ({ data }) => (
    <main className="CardsList-container">
        {
            data.map((el, i) => (
                <Card
                    key = { el.id || i }
                    title = { el.username }
                    name = {el.name}
                />
                )
            )
        }
    </main>
)