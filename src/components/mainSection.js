import React, { Component } from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';

class MainSection extends Component {
  constructor(props){   
    super(props);
    this.state = {
        properties: [],
        dataLoaded: false
    };
  }

  componentDidMount(){
    axios.get("https://demo8808386.mockable.io/fetchProperties")
    .then(res=>{
        if(res.data){
            this.setState({properties: res.data.data, error: false});
        } 
    })
    .catch(err=>{

    });
  }

  renderProperties = () => {
      let properties = this.state.properties;
      return(
         properties.map((property,index) => {
            return <PropertyCard key={property.id} property={property}/>
         })
      )
  }

  render() {
      console.log("update----",this.state)
    return (
      <div className="container">
        <div className="display-flex widget">
            <div style={{"width": "30%"}}>FILTERS</div>
            <div className="flex-1">SORTING</div>
        </div>
        <div className="display-flex border-grey">
            <div className="section sectionL">
               section left
            </div>
            <div className="section sectionR">
               { this.renderProperties() }
            </div>
        </div>        
      </div>
    );
  }
}

export default MainSection;
