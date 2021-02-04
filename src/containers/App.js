import React from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../ErrorBoundry';


class App extends React.Component {
    constructor() {
        super()
        this.state={
        robots: [],
        searchfield: '',
    }
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}))
}
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    return(
        <div className='tc'>
        <h1 className='tc f2'>Robofriends</h1>
        <Searchbox SearchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
        <Cardlist robots = {filterRobots} />
            </ErrorBoundry>
        </Scroll>
        </div>
    );
}
}


export default App;