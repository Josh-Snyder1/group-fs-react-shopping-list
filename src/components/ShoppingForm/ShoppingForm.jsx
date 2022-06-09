import React from 'react';
import {useState} from 'react';

function ShoppingForm({addShoppingList}){
    let [newItemName, setNewItemName] = useState('');
    let [newItemQty, setNewItemQty] = useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
    let [newItemIsPurchased, setNewItemIsPurchased] = useState('false');
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        addShoppingList({
            name: newItemName,
            qty: newItemQty,
            unit: newItemUnit,
            isPurchased: newItemIsPurchased
        });
    }   

    return (
        <>
            <h2>Add an Item</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Name
                </label>
                <div>
                    <input className="inputs"
                        type="text"
                        placeholder="Name"
                        value={newItemName}
                        onChange={(evt) => setNewItemName(evt.target.value)}
                    />
                    <input className="inputs"
                        type="text"
                        placeholder="Qty"
                        value={newItemQty}
                        onChange={(evt) => setNewItemQty(Number(evt.target.value))}
                    />
                    <input className="inputs"
                        type="text"
                        placeholder="Unit"
                        value={newItemUnit}
                        onChange={(evt) => setNewItemUnit(evt.target.value)}
                    />
                    <button className="inputs" type="submit">Save</button>
                </div>
            </form>
        </>
    );
}

export default ShoppingForm;