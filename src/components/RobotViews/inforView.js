import React, { Component } from 'react';
import {
  Row, Col, Tooltip, ControlLabel,
} from 'react-bootstrap';

class InfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angleRot: 0,
      LinerRot: 0,
    };
  }


  render() {
    const tooltip = (
        <Tooltip id="tooltip">
          Press <strong>Enter</strong> to rotate.
        </Tooltip>
    );
    return (
        <div className='paddspace'>
            <h3>Information</h3>
            <h4>About currently conneted Robot</h4>
            <Row>
                <Col componentClass={ControlLabel} sm={5}>Name</Col>
                <Col sm={7}>{this.props.robotObj.name}</Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} sm={5}>Battery</Col>
                <Col sm={7}>50%</Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} sm={5}>Time of Connection</Col>
                <Col sm={7}></Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} sm={5}>Owner</Col>
                <Col sm={7}>Fraunhofer Fokus</Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} sm={5}>Time to Stop</Col>
                <Col sm={7}></Col>
            </Row>
            <hr/>
        </div>
    );
  }
}

export default InfoView;
