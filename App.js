import React from 'react';
import ReactDOM from 'react-dom';

//const head = React.createElement("h1", { id: "heading" }, "Hello World from react!");

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Hello H1"), React.createElement("h2", {}, "Hello H2")]
//     )
// )

// JSX --> via BABEL -> React.createElement --> React Element Obj --> HTML Element render

const JSXparent = (
    <div className='parent'>
        <div className='child'>
            <h1 className='h1'>Hello JSX H1</h1>
            <h2>Hello JSX H2</h2>
        </div>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXparent);