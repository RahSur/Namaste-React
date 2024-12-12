import React from 'react';
import UserContext from '../utils/UserContext';

class Author extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Default",
                location: "Default",
                bio: "default"
            }
        }

        console.log('Constructor called');
    }

    async componentDidMount() {
        console.log("Componenet Did Mount called");
        const data = await fetch(" https://api.github.com/users/rahsur");
        const json = await data.json();
        this.setState({ userInfo: json });

    }

    componentDidUpdate() {
        console.log("Compoenent  Did Update called");
    }

    componentWillUnmount() {
        console.log("Component un mounted");
    }


    render() {
        //const { name, city } = this.props;
        const { name, location, bio } = this.state.userInfo;

        console.log("Render called");
        return (
            <div>
                <h2>{name}</h2>
                {/* <p>{city}, Tamil Nadu, India.</p> */}
                <p>{location}</p>
                <p>{bio}</p>
                <div>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <p className='font-bold m-3'>{loggedInUser}</p>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default Author;