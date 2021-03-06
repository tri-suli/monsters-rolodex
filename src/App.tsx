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
        <CardList>
          {this.state.users.map((user: User, key: number) => (
            <h2 key={key}>{user.name}</h2>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
