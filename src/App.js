import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs1/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Firends from './components/Friends/Friends';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <main>
        <Route path='/profile' render={() =>
          <Profile
            state={props.state.profile}
            dispatch={props.dispatch}
          />}
        />
        <Route path='/dialogs' render={() =>
          <Dialogs
            state={props.state.dialogs}
            dispatch={props.dispatch}
          />}
        />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/friends' render={() => <Firends state={props.state.firends} />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </main>

    </div>
  );
};

export default App;
