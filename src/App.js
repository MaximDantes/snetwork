import './App.css'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router'
import Preloader from './components/common/Preloader/Preloader'
import {initializeApp} from './redux/appReducer'
import store from './redux/store'
import UsersPage from './components/Users/UsersPage'
import withSuspense from './hoc/withSuspense'

import Dialogs from './components/Dialogs/Dialogs'
import ChatPage from './components/Chat/ChatPage'

//const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))

const webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

class App extends Component {
    componentDidMount = () => {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Nav/>
                <main>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/profile/:id?'} render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={withSuspense(() =>
                            <Dialogs
                                state={this.props.state.dialogs}
                                dispatch={this.props.dispatch}
                            />
                        )}/>
                        <Route path="/users" render={() => <UsersPage/>}/>
                        <Route path="/chat" render={() => <ChatPage webSocket={webSocket}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/friends" render={() => <Friends state={this.props.state.friends}/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const MainApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <AppContainer
                        state={store.getState()}
                        dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default MainApp
