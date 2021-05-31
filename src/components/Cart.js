import '../styles/Cart.css'

export let cart = 'panier';
export let flowers = [
    {
        name: 'monstera',
        price: 8,
        isOnSale: true
    },
    {
        name: 'lierre',
        price: 10,
        isOnSale: true
    },
    {
        name: 'bouquet',
        price: 15,
        isOnSale: false
    }
]

export function Cart () {
    return (
        <h2>{cart.toUpperCase()}</h2>
    )
}

export function Flowers () {
    return (
        <div>
        <ul>
            {flowers.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant.name} : {plant.price.toFixed(2).replace(".", ",")} €{plant.isOnSale && <span> EN PROMO</span>}</li>
            ))}
        </ul>
            {<p>Total : {(flowers[0].price + flowers[1].price + flowers[2].price).toFixed(2).replace(".", ",")} €</p>}
        </div>
    )
}
