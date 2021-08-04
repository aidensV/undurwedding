import * as React from "react"
import topImage from "../images/first.jpeg"
// styles
import "../styles/main.scss"
import "../styles/test.css"

// markup
const IndexPage = () => {
  return (
    <main>
        <p>Tap to open</p>
      <div class="book">
        <div class="back"></div>
        <div class="page6"></div>
        <div class="page5"></div>
        <div class="page4"></div>
        <div class="page3"></div>
        <div class="page2"></div>
        <div class="page1"></div>
        <div class="front"></div>
    </div>
    </main>
  )
}

export default IndexPage
