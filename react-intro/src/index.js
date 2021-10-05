import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./style.css"


function sum(a, b) {
    alert(a + b)
}

function App() {
    return (
        <div className="App">
            Hello World
            <Button onClick={() => sum(10, 20)} name="Cleberson" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => sum(10, 10)} name="Cleberson" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)