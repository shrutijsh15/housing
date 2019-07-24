import React, { Component } from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';
import _ from 'lodash';

class MainSection extends Component {
  constructor(props){   
    super(props);
    this.state = {
        properties: [],
        dataLoaded: false,
        filteredProperties: [],
        filter: {image: false, rent: null, deposit: null}
    };
  }

  filterApplied = () => {
    let obj = this.state.filter;
    for(let key in obj){
      if(obj[key]){
        return true;
      }
    }
  }

  resetFilters = () => {
    this.setState({
      filter: {image: false, rent: null, deposit: null},
      filteredProperties: []
    })
  }

  componentWillReceiveProps(nextProps){
     let filter = nextProps.filter;
     let filteredList = [];
     let {type,value} = filter;

     if(!_.isEmpty(filter)){
        let properties = _.isEmpty(this.state.filteredProperties) 
                          ? [...this.state.properties] 
                          : [...this.state.filteredProperties];

        if(type == "image"){
          filteredList = properties.filter((item) => {
            return value ? item.photos.length > 0 : item
          });
        }

        this.setState({
          filteredProperties: filteredList,
          filter: {...this.state.filter, type:value}
        });
     } else{
        this.resetFilters();
     }
  }

  componentDidMount(){
    axios.get("https://demo8808386.mockable.io/fetchProperties")
    .then(res=>{
        if(res.data){
            this.setState({
              properties: res.data.data
            });
        } 
    })
    .catch(err=>{

    });
  }

  renderProperties = () => {
      let { properties, filteredProperties } = this.state;
      let filterApplied = this.filterApplied();
      let propertList = filterApplied && !_.isEmpty(filteredProperties) ? filteredProperties : properties;
      return(
        propertList.map((property,index) => {
            return <PropertyCard key={property.id} property={property}/>
         })
      )
  }

  render() {
    return (
      <div className="container">
        <div className="property-list">{ this.renderProperties() }</div>
      </div>
    );
  }
}

export default MainSection;
