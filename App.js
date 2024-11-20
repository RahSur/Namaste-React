import React from 'react';
import ReactDOM from 'react-dom';

//const head = React.createElement("h1", { id: "heading" }, "Hello World from react!");

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Hello H1"), React.createElement("h2", {}, "Hello H2")]
//     )
// )

// JSX --> via BABEL -> React.createElement --> React Element Obj --> HTML Element render

//React Element
const JSXparent = (
    <div className='parent'>
        <div className='child'>
            <h1 className='h1'>Hello JSX H1</h1>
            <h2>Hello JSX H2</h2>
        </div>
    </div>
);

//React Component

const Title = () => (<h1> Namaste React ❤️</h1>);

const name = "Rahul";

//Component Composition       
const ParentComp = () => (
    <div className='parent'>
        <Title />
        <Title></Title>
        {Title()}
        <div className='child'>
            <h1 className='h1'>Hello {name} from Functional Comp</h1>
            <h2>Hello JSX H2 from Functional Comp</h2>
        </div>
    </div>
);

//Header sample
const Header = () => (
    <div className="header">
        <div className='logo'><img src="https://banner2.cleanpng.com/20180608/ayw/aa8ijiz6m.webp" width="32" height="32" /></div>
        <div className='search'></div>
        <div className='user'><img src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" width="32" height="32" /></div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(JSXparent);
root.render(<ParentComp />);  