import React, { Component } from 'react';
import { Button,DialogContainer,Slider } from 'react-md';

const initialState = {
    sliderType: "",
    rentFilter: 0,
    imageFilter: false,
    depositFilter: 0
}

class Widget extends Component {
  constructor(props){
    super(props);
    this.state = {...initialState};
  }

  showSlider(type){
    this.setState({sliderType: type})
  }

  updateFilter = (type, value) => {
    this.props.filterProperties(type,value);
    type == "image" && this.setState({
        imageFilter: !this.state.imageFilter
    });
  }

  resetFilters = () => {
      this.setState({
        ...initialState
      });
      this.props.resetFilters()
  }

  renderSlider = (type) => {
    return(
        <DialogContainer
                id="curvedModal"
                aria-label="modal"
                focusOnMount={false}
                visible={true}
                onHide={() => {
                    this.setState({ sliderType: "" });
                }}
            ></DialogContainer>
    )
  }

  render() {
    let {sliderType} = this.state;
    return (
        <div className="display-flex widget flex-center">
            {/* <div className="action">
                <Button 
                    className="btn-filter"
                    onClick={()=>{this.showSlider('rent')}}
                    type = "button"
                > Rent </Button>
                {sliderType == "rent" && this.renderSlider(sliderType)}
            </div>
            <div className="action">
                <Button 
                    className="btn-filter" 
                    onClick={()=>{this.showSlider('deposit')}}
                    type = "button"
                > Deposit </Button>
            </div> */}
            <div className="action">
                <Button 
                    className={`btn-filter ${this.state.imageFilter ? 'active' : ''}`}
                    onClick={()=> this.updateFilter("image",!this.state.imageFilter)} 
                    type = "button"
                >  Images available
                </Button>
            </div>
            <div className="action cursor-p">
                <i className="material-icons"
                  style={{"position": "relative", "top": "7px"}}
                  onClick={this.resetFilters}
                > refresh </i>
            </div>
        </div>
    );
  }
}

export default Widget;
