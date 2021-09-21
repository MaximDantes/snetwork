import './App.css'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router'
import Preloader from './components/common/Preloader/Preloader'
import {initializeApp} from './store/appReducer'
import store from './store/store'
import UsersPage from './components/Users/UsersPage'
import withSuspense from './hoc/withSuspense'
import Dialogs from './components/Dialogs/Dialogs'
import ChatPage from './components/Chat/ChatPage'
import Header from './components/Header/Header'

//const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))

class App extends Component {
    componentDidMount = () => {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'wrapper'}>
                <Header/>
                <Nav/>
                <main>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/profile/:id?'} render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersPage/>}/>
                        <Route path="/chat" render={() => <ChatPage/>}/>
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
