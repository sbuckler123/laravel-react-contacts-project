import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../history";
import ContactList from "./contacts/ContactList";
import ContactCreate from "./contacts/ContactCreate";
import ContactEdit from "./contacts/ContactEdit";


const App = () => {
    return (
        <div className="contact-container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ContactList} />
                    <Route path="/contacts" exact component={ContactList} />
                    <Route
                        path="/contacts/new/"
                        exact
                        component={ContactCreate}
                    />
                    <Route path="/contacts/:id" exact component={ContactEdit} />
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
