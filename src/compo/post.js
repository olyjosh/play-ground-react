import React, {Component} from 'react'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

    }

    componentWillMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                this.setState({posts: data})
            })
    }

    render() {

        const postItems = this.state.posts.map(myVar =>(
            <div key="{myVar.id}">
                <h3>{myVar.title}</h3>
                <p>{myVar.body}</p>
            </div>
        ))

        return (
            <div>{postItems}</div>
        );

    }
}

export default Posts