import { Header } from './app/header'
import { Footer } from './app/footer'
import '../src/style.css'
import '../src/styles/scss/main.scss'
import webpackgif from './assets/images/webpack.gif'

let header = new Header()

let firstHeading = header.getFirstHeading()

console.log("hello webpack world!")

console.log(`firstHeading from header.js is: ${firstHeading}`)

let footer = new Footer()

let footertext = footer.getFooterText()

console.log(`this is footertext from header.js: ${footertext}`)

// set source of imgs
// set here as file-loader only loads assets referenced in modules (js or ts)
document.getElementById('webpack-gif').setAttribute('src', webpackgif)
