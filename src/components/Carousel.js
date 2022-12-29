import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  prevImage = () => {
    if(this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      })
    }
    else{
      this.setState({
        count: 2
      })
    }
  }
  nextImage = () => {
    if(this.state.count < 2){
      this.setState({
        count: this.state.count + 1
      })
    }
    else{
      this.setState({
        count: 0
      })
    }
  }
  render(){
    return(
      <div className="holder">
        <div className="arrow-buttons" onClick={this.prevImage}><ArrowBackIosIcon/></div>
        <div><img src={images[this.state.count].img} alt="img"/></div>
        <div className="arrow-buttons" onClick={this.nextImage}><ArrowForwardIosIcon/></div>
        <div className="text-holder">
          <div>
            <h1>{images[this.state.count].title}</h1>
          </div>
          <div>
            <h2>{images[this.state.count].subtitle}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;
