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

    const deleteItem = (deleteItemId => {
        axios.delete('/items', deleteItemId)
            .then(response => {
                console.log('in app deleteItem axios.delete')
            })
            .catch(err => {
                console.log('error deleting item', err)
            });
    });

    const updateItem = (updateItemId => {
        axios({
            method: 'PUT',
            url: '/students',
            data: updatedItemInfo
        })
        .then(response => {
            console.log('in app updateItem axios.then')
        })
        .catch(err => {
            alert('error updating students')
        });
    });

    console.log('New Item added:', newItemName);
    
    return (
        <div className="App">
            <Header />
            <ShoppingForm 
                addShoppingList={addNewItem}
            />
            <main>
                <p>Shopping List</p>
            </main>
        </div>
    );
}

export default App;
