import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import OneBeer from './pages/OneBeer';
import RandomBeer from './pages/RandomBeer';
import Header from './Header';
import { Button } from 'reactstrap'

function App(props) {
  let shouldDisplayHeader = props.location.pathname !== "/"
  return (
    <div className="App">
      {shouldDisplayHeader && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" exact component={AllBeers} />
        <Route path="/beers/:id" exact component={OneBeer} />
        <Route path="/random-beer" exact component={RandomBeer} />
        <Route path="/new-beer" exact component={NewBeer} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
      <div className="text-center my-4">
        <Button color="primary" outline onClick={()=> props.history.goBack()}>Go Back</Button>{" "}
        <Button color="primary" outline onClick={()=> props.history.push("/")}>Push to Home Page</Button>
      </div>
    </div>
  );
}

export default withRouter(App);

// Because we typed :

// import { withRouter } from 'react-router'
// ...
// export default withRouter(App);

// The App component has 3 props: history, location, match
