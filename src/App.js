import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Hotels from './components/Hotels/Hotels'



class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      startDay: new Date().toLocaleDateString(),
      endDay: new Date().toLocaleDateString(),
      country: '',
      price:'',
      order:'',
      dateSelected: false,
      countrySelected: false,
      personalConfiguration:{
        size:"huge",
        inverted:"true"
      }
    };
  }
 

  componentDidMount() {
    let phraseDateSelected = this.state.dateSelected ? "Disfruta entre el {startDay} y el {endDay} de tus vacaciones en" : "Encuentra el destino de tus proximas vacaciones" ;
    let phraseCountrySelected = this.state.countrySelected ? {country} : "hay millones de sitios por descubrir";
    
  }


    render(){
    return(
      <div className="App">
      
       <Filters {...this.state} />
       <Hotels />
{/*         
        <Header startDay={this.state.startDay.toISOString} endDay={this.state.endDay.toISOString}  /> */}
        {/* <Filter {...this.state} /> */}
        {/* <Card title="nuevo titulo" description="descripcion" link="www.link.com"/> */}
        
        {/* <SelectMultiple {...this.props.price} /> */}
        {/* <DatePicker /> */}

        
      </div>
    );
  }
}

export default hot(module)(App);