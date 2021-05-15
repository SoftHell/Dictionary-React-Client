import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './containers/Page404';
import PageForm from './containers/PageForm';
import { AppContextProvider, initialAppState } from './context/AppContext';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeIndex from './containers/home/HomeIndex';
import Login from './containers/identity/Login';
import Register from './containers/identity/Register';
import WordCreate from './containers/words/WordCreate';
import WordEdit from './containers/words/WordEdit';
import WordDelete from './containers/words/WordDelete';
import WordDetails from './containers/words/WordDetails';
import WordIndex from './containers/words/WordIndex';

function App() {
    const setAuthInfo = (jwt: string | null, firstName: string, lastName: string): void => {
        setAppState({...appState, jwt, firstName, lastName});
    }

    const [appState, setAppState] = useState({...initialAppState, setAuthInfo });

    return (
        <>
            <AppContextProvider value={appState} >
                <Header />
                <div className="container">
                    <main role="main" className="pb-3">
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route path="/identity/login" component={Login} />
                        <Route path="/identity/register" component={Register} />
                        <Route path="/form" component={PageForm} />
                        <Route path="/word/create" component={WordCreate} />
                        <Route path="/word/edit/:id" component={WordEdit} />
                        <Route path="/word/delete/:id" component={WordDelete} />
                        <Route path="/word/:id" component={WordDetails} />
                        <Route path="/word" component={WordIndex} />
                        <Route component={Page404} />
                    </Switch>
                    </main>
                </div>
                <Footer />
            </AppContextProvider>
        </>
    );
}

export default App;
