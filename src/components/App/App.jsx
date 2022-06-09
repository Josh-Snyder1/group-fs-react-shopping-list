import React from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import './App.css';


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
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
