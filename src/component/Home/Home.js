import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Count from '../Count/Count';
import Items from '../Items/Items';
import System from '../System/System';


const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <System></System>
            <div className="m-5">
                <div className="row w-100 p-5 text-center">
                    {
                        items.map(item => <Items
                            key={item._id}
                            item={item}
                        >
                        </Items>)
                    }
                </div>
            </div>
            <Count></Count>
        </div>
    );
};

export default Home;