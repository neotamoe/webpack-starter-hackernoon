import { Header } from './app/header'
import { Footer } from './app/footer'
import '../src/style.css'
import '../src/styles/scss/main.scss'

let header = new Header()

let firstHeading = header.getFirstHeading()

console.log("hello webpack world!")

console.log(`firstHeading from header.js is: ${firstHeading}`)

let footer = new Footer()

let footertext = footer.getFooterText()

console.log(`this is footertext from header.js: ${footertext}`)