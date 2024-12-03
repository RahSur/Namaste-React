import React from 'react';

class Author extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            place: "Ambattur"
        }
    }
    render() {
        const { name, city } = this.props;
        const { count, place } = this.state;
        return (
            <div>
                <h2>{name}</h2>
                <p>{city}, Tamil Nadu, India.</p>
                <p>{count} <span>{place}</span></p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        place: this.state.place = "Anna Nagar"

                    })
                }}>Inc</button>
            </div>
        )
    }
}

export default Author;