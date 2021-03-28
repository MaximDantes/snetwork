import './App.css';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
    return (
        <div className='wrapper'>
            <HeaderContainer/>
            <Nav/>
            <main>
                <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        state={props.state.dialogs}
                        dispatch={props.dispatch} Container
                    />}
                />
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/friends' render={() => <Friends state={props.state.friends}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </main>

        </div>
    );
};

export default App;
