import React, { Component } from "react";
import SelectMultiple from "../Filter/SelectMultiple";
import InputGeneral from "../Tontos/InputGeneral";
import DatePickerGeneral from "../Tontos/DatePickerGeneral";
import TextPickerGeneral from "../Tontos/TextPickerGeneral";
import PricePicker from "../Tontos/PricePicker";
import LanguagePicker from "../Tontos/LanguagePicker";

export default class Filter extends Component {

    constructor (props) {
        super(props);
        this.state = {
            startDay: props.startDay,
            endDay: props.endDay,
        }
        console.log(props)
    }
 
    

    render() {
/*
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
        ); */
        return(
            <>
           {/*      <InputGeneral 
                    placeholder="Este es...." 
                    iconName="calendar" 
                    iconPosition="left" 
                    focus= {false}
                    size={this.props.size}
                    type="date"
                 /> */}
                 <br/>
                 <DatePickerGeneral 
                 {...this.props.startDay}
                 />
                 <DatePickerGeneral 
                 {...this.props.endDay}
                 />
                <TextPickerGeneral defaultValue="Destino"/>
                <PricePicker />
                <LanguagePicker />

            </>
        );
    }
}

