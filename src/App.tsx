import { Component } from 'react';
import './App.css';

import { all } from './api/users'
import User from './entities/User';
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';

type AppState = {
  users: Array<User>;
  keyword: string;
}

class App extends Component {
  state: AppState = {
    users: [],
    keyword: ''
  };

  async componentDidMount () {
    this.setState({ users: await all() });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ keyword: event.target.value });
  }
  
  render (): JSX.Element {
    const { users, keyword } = this.state;

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox hint={"Search monsters..."} handleChange={this.handleChange} />
        <CardList monsters={User.filter(keyword, users)} />
      </div>
    );
  }
}

export default App;
