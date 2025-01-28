import './styles.css';
import homePage from './home.js'
import menuPage from './menu.js'
import aboutPage from './about.js'

const homeTab = document.getElementById('home')
const menuTab = document.getElementById('menu')
const aboutTab = document.getElementById('about')

homeTab.addEventListener('click', homePage)
menuTab.addEventListener('click', menuPage)
aboutTab.addEventListener('click', aboutPage)

homePage()