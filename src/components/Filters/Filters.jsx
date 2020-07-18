import React, { Component } from "react";
import DatePickerGeneral from "../Tontos/DatePickerGeneral";
import TextPickerGeneral from "../Tontos/TextPickerGeneral";
import PricePicker from "../Tontos/PricePicker";
import LanguagePicker from "../Tontos/LanguagePicker";
import OrderPicker from '../Tontos/OrderPicker'

export default class Filter extends Component {

    // constructor (props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
 
    // handleChange = (e) => {
    //     console.log(e)
    // }

    // handleChange (e) {
    //     console.log(e);
    //     console.log({
    //         name: e.target.name,
    //         value: e.target.value,
    //     })
    //     console.log(this.state);
    //     this.setState({
            
    //     })
    // }

    handleSubmit (e) {
        e.preventDefault(); 
        console.log('Form was summitted');
        console.log(this.state);
    }

    filter() {
        let filter = this.startDay.hotels.filter(

            (hotel) => {
                let startDayAfterToday= true;
                let startDayWeend = true;
                let endDayAfterToday= true;
                let nameHotelMatch = true;
                let priceMatch = true;
        
                if( startDay !== "") {
                    
                }
        
                if( endDayAfterToday !== "" ) {
        
                }
        
                if( nameHotelMatch !== "") {
        
                }
                return  startDayAfterToday && 
                        startDayWeend &&
                        endDayAfterToday && 
                        nameHotelMatch && 
                        priceMatch;
            }       
        );
    }
         

    render() {

        return(
            <>
            <br/>
               <form  onSubmit={this.handleSubmit}  className="container__flex filter">
                   <div className="container__flex">
                        <div className="item-filter">
                            <DatePickerGeneral 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.startDay}
                            />
                        </div>
                        <div className="item-filter">
                            <DatePickerGeneral 
                            onChange={this.props.onChange}
                            value={this.props.formValues.startDay}
                            />
                        </div>
                        <div className="item-filter">
                            <TextPickerGeneral 
                            onChange={this.props.onChange} 
                            color='red'
                            
                            position='right' 
                            value="ES - Espanol
                            "/>
                        </div>
                        <div className="item-filter">
                            <PricePicker 
                            onChange={this.props.onChange} />
                        </div>
                        <div className="item-filter">
                            <LanguagePicker  />
                        </div>
                        <div className="item-filter">
                            <OrderPicker/>
                        </div>
                   </div>
               </form>
               <br/>
            </>
        );
    }
}

