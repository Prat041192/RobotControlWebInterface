import React, { Component } from 'react';
import {
  Modal, FormGroup, FormControl, Button, Tooltip, Form, Row, Col, OverlayTrigger,
} from 'react-bootstrap';


class Connection extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: !props.hide,
      RobotName: 'First',
      IP: '192.168.43.202',
      Port: '9090',
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handlePortChange = this.handlePortChange.bind(this);
    this.handleIPChange = this.handleIPChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleConnect = this.handleConnect.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
    this.refs.RobotName = '';
    this.refs.urlpart2 = '';
    this.refs.urlpart4 = '';
  }

  handleShow() {
    this.setState({ show: true });
  }

  handlePortChange(event) {
    this.setState({ Port: event.target.value });
  }

  handleIPChange(event) {
    this.setState({ IP: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ RobotName: event.target.value });
  }

  handleConnect() {
    const tempRoboturl = this.refs.urlpart1.props.defaultValue + this.refs.urlpart2.props.value + this.refs.urlpart3.props.defaultValue + this.refs.urlpart4.props.value;
    this.props.onConnection(tempRoboturl, this.state.RobotName);
    this.handleClose();
  }

  render() {
    const tooltip = <Tooltip id="modal-tooltip">Enter Value.</Tooltip>;
    return (
        <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Connect your Robot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form>
           <OverlayTrigger placement="right" overlay={tooltip}>
           <FormGroup>
               <Row>
                 <Col sm={2}>Name</Col>
                 <Col sm={10}>
                      <FormControl
                                type="text"
                                ref="RoboName"
                                value={this.state.RobotName}
                                placeholder="Name your Robot"
                                onChange={this.handleNameChange}
                                />
                 </Col>
               </Row>
             </FormGroup>
             </OverlayTrigger>
             <OverlayTrigger placement="right" overlay={tooltip}>
             <FormGroup>
               <Row>
                 <Col sm={2}>URL</Col>
                 <Col sm={2}>
                 <FormControl
                                type="text"
                                ref="urlpart1"
                                defaultValue="ws://"
                                placeholder="ws://"
                                disabled/>
                 </Col>
                 <Col sm={3}>
                 <FormControl
                                type="text"
                                ref="urlpart2"
                                value={this.state.IP}
                                placeholder="IP Address of the server"
                                onChange={this.handleIPChange}
                                />
                 </Col>
                 <Col sm={2}>
                 <FormControl
                                type="text"
                                ref="urlpart3"
                                defaultValue=":"
                                placeholder=":"
                                disabled/>
                 </Col>
                 <Col sm={3}>
                      <FormControl
                                type="text"
                                ref="urlpart4"
                                value={this.state.Port}
                                placeholder="Port Number"
                                onChange={this.handlePortChange}
                                />
                 </Col>
               </Row>
             </FormGroup>
             </OverlayTrigger>
             <FormGroup>
               <Row>
                 <Col sm={12}>
                 <Button className="pull-right" bsStyle="primary" onClick={this.handleConnect}>
                 Connect
                 </Button>
                 </Col>
               </Row>
             </FormGroup>
           </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}

export default Connection;
