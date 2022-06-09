import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import './App.css';

//use '/items' for all endpoints
function App() {
    let [shoppingList, setShoppingList] = useState('');
    let [newItemName, setNewItemName] = useState('');
    // let [newItemQty, setNewItemQty] = useState('');
    // let [newItemUnit, setNewItemUnit] = useState('');
    // let [newItemIsPurchased, setNewItemIsPurchased] = useState('false');

    useEffect(() => {
        getNewItem()
    }, []);

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
            {shoppingList.length > 0 &&
            <ShoppingList
                shoppingList={shoppingList}
            />}

        </div>
    );
}

export default App;
