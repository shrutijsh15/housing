import React, { Component } from 'react';
import _ from 'lodash';
import { PROPERTY_PLACEHOLDER, IMG_CDN_PREFIX } from '../constants';
import { Button } from 'react-md';

class PropertyCard extends Component {  
  sanitizeValue(value){
      return _.capitalize(value.replace("_"," "))
  }

  render() {
    let {property} = this.props;
    let imgURL;
   
    if(_.isEmpty(property.photos)){
        imgURL = PROPERTY_PLACEHOLDER;
    } else{
        let imgObj = _.find(property.photos, {displayPic: true});
        imgURL = `${IMG_CDN_PREFIX}${property.id}/${imgObj.imagesMap.medium}`;
    }

    return (
      <div className="card">
        <div style={{"height": "170px"}}>
            <img src={imgURL || PROPERTY_PLACEHOLDER} className="propertyImg" alt="Property"/>
        </div>
        <div className="card-content text-center">
            <div>{property.title}</div>
        </div>
        <div className="summary" style={{"margin": "10px 0", "padding": "0 5px"}}>
            <div className="item">
                <i class="material-icons">hotel</i>
                <br/>
                {_.capitalize(property.furnishing.replace("_"," "))}
            </div>
            <div className="item border-lr">
                <i class="material-icons">business</i>
                <br/>
                {property.propertySize} sqft
            </div>
            <div className="item">
              <i className="material-icons">local_parking</i>
              <br/>
              {property.parkingDesc}
            </div>
        </div>
        <div class="rent-container">
            <div className="border-right">
                <span>Rent</span>
                <br/>
                <span style={{"font-size": "15px"}}>&#8377;{property.rent}</span> / month
            </div>
            <div>
                <span>Deposit</span>
                <br/>
                <span>&#8377;{property.deposit}</span>
            </div>
        </div>
        <div className="card-footer">
            <Button className="btn-contact">Contact owner</Button>
        </div>
      </div>
    );
}
}

export default PropertyCard;
