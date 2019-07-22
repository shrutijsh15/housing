import React, { Component } from 'react';
import _ from 'lodash';
import { PROPERTY_PLACEHOLDER, IMG_CDN_PREFIX } from '../constants';

class PropertyCard extends Component {
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
        <div className="display-flex">  
            <div style={{"height": "170px", "width": "30%"}}>
                <img src={imgURL || PROPERTY_PLACEHOLDER} className="propertyImg" alt="Property"/>
            </div>
            <div style={{"padding": "15px","flex": 3}}>
                <div className="summary">
                    <div className="item">
                        <div className="fw-600">{property.propertySize}  sqft</div>
                        <div>Builtup</div>
                    </div>
                    <div className="item border-lr">
                        <div className="fw-600">&#8377; {property.deposit}</div>
                        <div>Deposit</div>
                    </div>
                    <div className="item">
                        <div className="fw-600">&#8377; {property.deposit}</div>
                        <div>Rent</div>
                    </div>
                </div>
                <div className="summary">
                    <div className="item">
                        <i class="material-icons">tv</i>
                        <span className="icon-txt">{property.furnishingDesc} furnished</span>
                    </div>
                    <div className="item">
                        <i class="material-icons">people</i>
                        <span className="icon-txt">{_.capitalize(_.toLower(property.leaseType))}</span>
                    </div>
                    <div className="item">
                        <i class="material-icons">timer</i>
                        <span className="icon-txt">{new Date(property.availableFrom).getTime()}</span>
                    </div>
                </div>
                {/* <div className="display-flex">
                    <div>
                        <i class="material-icons">home</i>
                        <span className="icon-txt">{property.typeDesc}</span>
                    </div>
                    <div>
                        <i class="material-icons">home</i>
                        <span className="icon-txt">{property.typeDesc}</span>
                    </div>
                </div> */}
            </div>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
