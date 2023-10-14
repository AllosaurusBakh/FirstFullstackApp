import React, { useState } from 'react';
import axios from "axios";
import './style.scss';

import InputArea from '../../components/inputArea/InputArea';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import Post from '../../components/post/Post';

const StartPage = (): JSX.Element => {

    type Card = {
        id_provider?: string,
        name_provider?: string,
        specialization_provider?: string,
        rating_provider?: number,
    };

    const [specialization, setSpecialization] = useState('');
    const [cards, setCards] = useState([]);

    async function fetchData(state: string) {
        try {
            const res = await axios.get(`http://localhost:7017/providers/${state}`);
            setCards(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (specialization) {
            console.log('Запрос');
            fetchData(specialization);
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSpecialization(e.target.value);
    };

    return (
        <div className="startPage">
            <Navbar />
            <form name="form" className="form" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
                <InputArea
                    value={specialization}
                    onChange={handleChange}
                    className='title'
                    placeholder='Поиск'
                    style={{ margin: '10px', width: '1000px' }}
                >
                    Поиск
                </InputArea>
                <Button style={{ display: 'block', margin: '10px', marginLeft: '30px' }}>Найти</Button>
            </form>
            <div className="all-posts">
                {cards.map((card: Card, index) => {
                    if (specialization.toLowerCase() === card.specialization_provider?.toLowerCase()) {
                        return <Post key={index} _id={card.id_provider} >
                            <h2 className="name">{card.name_provider}</h2>
                            <h3 className="specialization">{card.specialization_provider}</h3>
                            <p className="rating">Рейтинг: {card.rating_provider}</p>
                        </Post>
                    }
                })}
            </div>
        </div>
    );
}

export default StartPage;