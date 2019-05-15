import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./home";
import Detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <div className="App">
              <h1>Jacker news</h1>
            </div>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:articleId"} component={Detail} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
