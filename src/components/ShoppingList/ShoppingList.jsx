function ShoppingList({shoppingList}) {
 console.log(ShoppingList);
    return (
        <>
        <h2>Shopping List</h2>
        <table>
            <thead>
                <tr>
                    <th>Items</th>
                </tr>
            </thead>
            <tbody>
                {shoppingList.map((shoppingList)=>
                <tr key={shoppingList.id}>
                    <td>{shoppingList.name}</td>

                </tr>
            )}
            </tbody>
        </table>
        </>
    )
}               

export default ShoppingList;