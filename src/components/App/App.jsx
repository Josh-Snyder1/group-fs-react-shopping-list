import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import './App.css';
import Header from '../Header/Header.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm'

//use '/items' for all endpoints

function App() {

    let [newItemName, setNewItemName] = useState('');
    let [newItemQty, setNewItemQty] = useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
    let [newItemIsPurchased, setNewItemIsPurchased] = useState('false');

    useEffect(() => {
        getNewItem()
    }, [])

    //TODO GET request

    const addNewItem = (newItem) => {
        axios.post('/items', newItem)
            .then(response => {
                setNewItemName('');
                setNewItemQty('');
                setNewItemUnit('');
                setNewItemIsPurchased('false');

                getNewItem();
            })
            .catch(err => {
                console.log('Error at POST app side', err);
            })
    };

    console.log('New Item added:', newItemName);
    
    return (
        <div className="App">
            <Header />
            <ShoppingForm 
                addShoppingList={addNewItem}
            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
