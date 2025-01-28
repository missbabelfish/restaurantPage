const menu = [
    {
        item: 'Guacamole',
        description: 'Made fresh tableside with farm fresh avocados, red onion, lemon, serrano, and some special secret ingredients',
        price: '7.99'
    },
    {
        item: 'Pozole',
        description: 'Grandma\'s recipe. Pork shoulder stewed for 12 hours in an incredibly fragrant broth seasoned with garlic and dried chilis. Served with all the accoutrements',
        price: '15.99'
    },
    {
        item: 'Taco platter',
        description: '3 corn tortilla tacos with your choice of meat, cilantro y cebolla, and choice of salsa. Choose black or pinto beans, and arroz blanco or sucio.',
        price: '13.99'
    },
    {
        item: 'Lomo Saltado',
        description: 'Succulent braised beef, simmered for 12 hours in our house special jugo de amor, served with smashed purple potatoes and our take on cole slaw',
        price: '19.99'
    },
    {
        item: 'Molcajete de Camaron',
        description: 'Gigantic tiger shrimp poached in aji amarillo serrano broth, accompanied by stewed aji peppers, onions, and mushrooms. Served with beans, rice, and love. And tortillas.',
        price: '22.99'
    },
]

function createMenuCard(item) {
    const newCard = document.createElement('div')
    newCard.classList.add('menu-card')
    const title = document.createElement('h2')
    title.innerText = item.item
    const description = document.createElement('p')
    description.classList.add('paragraph')
    description.innerText = item.description
    const price = document.createElement('h5')
    price.innerText = item.price
    newCard.appendChild(title)
    newCard.appendChild(description)
    newCard.appendChild(price)
    return newCard
}

export default function menuPage() {
    const container = document.getElementById('content');
    container.innerHTML = ''

    menu.forEach(item => {
        const newMenuCard = createMenuCard(item)
        container.appendChild(newMenuCard)
    })

}