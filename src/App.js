import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom'
import Buildings from './components/Buildings';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import withSplashScreen from './components/withSplashScreen';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
          <Route path="/buildings" exact component={Buildings} />
        </div>
      </Fragment>
    );
  }
}

export default withSplashScreen(App);
