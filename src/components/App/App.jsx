import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import axios from 'axios';

import './App.css';
import Header from '../Header/Header.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm'

//use '/items' for all endpoints

function App() {
    let [shoppingListItem, setShoppingList] = useState('');
    const getNewItem = () => {

        axios({
            method: 'GET',
            url: '/items'
        }).then((res)=>{
            console.log('res.data', res.data);
            setShoppingList(res.data)
        })
        .catch((error)=> {
            console.log('GET items failed', error);
        });
    };

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
