import React, { Component } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import * as API from '../../util/backend-cli';


class DecisionMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maptileURL: '',
      mapFulleURL: '',
      hover: 'false',
    };
    this.mouseLeaveEvent = this.mouseLeaveEvent.bind(this);
    this.mouseEnterEvent = this.mouseEnterEvent.bind(this);
  }

  mouseEnterEvent() {
    this.setState({ hover: 'true' });
  }

  mouseLeaveEvent() {
    this.setState({ hover: 'false' });
  }

  getURL(offwhat) {
    let URL;
    if (offwhat === 'tile') {
      URL = API.getMapImageTile(this.props.address);
    } else if (offwhat === 'full') {
      URL = API.getMapImageFull(this.props.address);
    }
    return URL;
  }

  render() {
    let imageToShow;
    if (!this.state.hover) {
      const URL = this.getURL('full');
      imageToShow = <Row><Col xs={6} md={4}><Image src={URL} height='50%' width='50%' alt="Path Map"></Image></Col></Row>;
    } else {
      const URL = this.getURL('full');
      imageToShow = <Image src={URL} height='100px' width='100px' alt="Path Map"></Image>;
    }
    return (
        <div className="DecisionMap" >
        <div onMouseEnter={this.mouseEnterEvent} onMouseLeave={this.mouseLeaveEvent} className='paddspace'>
          {imageToShow}
        </div>
        </div>
    );
  }
}

export default DecisionMap;
