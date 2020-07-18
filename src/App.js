import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Home from './components/Home/Home'
import Error from './Pages/Error'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      startDay: new Date().toLocaleDateString(),
      endDay: new Date().toLocaleDateString(),
      country: '',
      price:'',
      order:'',
      phraseDateSelected:'',
      phraseCountrySelected:'',
      dateSelected: false,
      countrySelected: false,
      personalConfiguration:{
        size:"huge",
        inverted:"true",
        color:"Teal",
      }
    };
  }
 

  componentDidMount() {
    let phraseDateSelected = this.state.dateSelected ? "Disfruta entre el {startDay} y el {endDay} de tus vacaciones en" : "Encuentra el destino de tus proximas vacaciones" ;
    let phraseCountrySelected = this.state.countrySelected ? {country} : "hay millones de sitios por descubrir";
  }

  componentDidUpdate() {
    let phraseDateSelected = this.state.dateSelected ? "Disfruta entre el {startDay} y el {endDay} de tus vacaciones en" : "Encuentra el destino de tus proximas vacaciones" ;
    let phraseCountrySelected = this.state.countrySelected ? {country} : "hay millones de sitios por descubrir";

  }
  
    render(){
    return(
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/error" component={Error} />
              <Redirect from="*" to="/error"/>
            </Switch>
          </BrowserRouter>
    );
  }
}

export default hot(module)(App);