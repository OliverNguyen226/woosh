import { createSignal } from "solid-js";
import Nav from "../components/Nav";
import "../instructions.css";


function Quiz() {
return (
<nav>
<div class="header">
        <img  class="logo" src="SmallLogo.png" alt=""  />
      <h1>Quiz - Hand Hygiene </h1>
      </div>
    <iframe width="350" height="188" src="https://www.youtube.com/embed/62D_qlms-mI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Learn how to wash your <br></br>hands properly</h3>
    <hr />
    <iframe width="350" height="188" src="https://www.youtube.com/embed/iqEWFmLuLTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Learn how to wash your <br></br>hair properly</h3>
    <hr />
    <iframe width="350" height="188" src="https://www.youtube.com/embed/rh80Lff9P4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Learn how to wash your <br></br>feet properly</h3>
    <hr />
    <iframe width="350" height="188" src="https://www.youtube.com/embed/l6XGE-Xuq3M&t=529s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Learn proper oral Hygiene</h3>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Nav></Nav>
    </nav>
);
}

export default Quiz;
