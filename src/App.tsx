import { Component } from 'react';
import './App.css';

import { all } from './api/users'
import User from './entities/User';
import CardList from './components/card-list/CardList';

type AppState = {
  users: Array<User>
}

class App extends Component {
  state: AppState = {
    users: []
  };

  async componentDidMount () {
    this.setState({ users: await all() });
  }
  
  render (): JSX.Element {
    return (
      <div className="App">
        <CardList monsters={this.state.users} />
      </div>
    );
  }
}

export default App;
