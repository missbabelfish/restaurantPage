import sunshine from './assets/sunshine.jpg'
import tacos from './assets/tacos.jpg'
import soup from './assets/soup.jpg'
import chilaquiles from './assets/chilaquiles.jpg'


export default function hydratePage() {
    const container = document.getElementById('content')

    const heroImg = document.createElement('img')
    heroImg.src = sunshine
    heroImg.id = 'hero-img'

    const title = document.createElement('h1')
    title.innerText = 'bajo el sol'

    const headline = document.createElement('p')
    headline.innerText = 'latin cooking for the soul'

    const gallery = document.createElement('div')
    gallery.classList.add('gallery')

    const image1 = document.createElement('img')
    image1.src = tacos
    const image2 = document.createElement('img')
    image2.src = soup
    const image3 = document.createElement('img')
    image3.src = chilaquiles

    gallery.appendChild(image1)
    gallery.appendChild(image2)
    gallery.appendChild(image3)

    const description = document.createElement('p')
    description.classList.add('description')
    description.innerText = `Bajo El Sol is a vibrant culinary gem that seamlessly blends the rich flavors of Mexican and South American cuisines. Nestled in a warm, inviting space, this innovative restaurant takes pride in its commitment to sustainability and supporting local communities. The menu at Bajo El Sol is a testament to the power of fresh, locally-sourced ingredients, carefully selected from small-scale suppliers in the region. Each dish is a masterful fusion of traditional recipes and contemporary techniques, resulting in a unique dining experience that tantalizes the taste buds while respecting the environment. From zesty ceviches bursting with the day's catch to hearty moles infused with exotic Andean spices, Bajo El Sol offers a gastronomic journey that celebrates the diverse culinary heritage of Latin America. By prioritizing sustainable practices and fostering relationships with local producers, this restaurant not only serves up delicious, conscience-friendly fare but also contributes to the growth and prosperity of the community it calls home.`;

    container.appendChild(heroImg)
    container.appendChild(title)
    container.appendChild(headline)
    container.appendChild(gallery)
    container.appendChild(description)

}