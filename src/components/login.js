import React, { Component } from 'react';
import {
  Image, Form, FormGroup, ControlLabel, FormControl, FormControlFeedback, Button, HelpBlock, Col, Row,
} from 'react-bootstrap';

const avatar = require('../assets/image/Avatar.webp');
// import avatar from '../assets/image/Avatar.webp';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      UserId: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleUser(e) {
    this.setState({ UserName: e.target.value });
  }

  handlePass(e) {
    this.setState({ Password: e.target.value });
  }

  handleClick(e) {
    if (this.state.UserName === 'User' && this.state.Password === 'Dcaiti') {
      this.setState({ UserId: 1 });
      localStorage.setItem('user', 1);
    }
    this.props.onChange(1);
  }

  render() {
    return (
        <div className="LoginForm container-fluid">
            <div className="formBox">
            <Image scr={avatar} className="user"></Image>
                <Form className="container-fluid">
                    <FormGroup
                    controlId="formUser">
                    <Row>
                        <Col componentClass={ControlLabel} sm={12}>UserName</Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl
                                type="text"
                                value={this.state.UserName}
                                placeholder="Enter Username"
                                onChange={(e) => { this.handleUser(e); }}/>
                        </Col>
                    </Row>
                    </FormGroup>
                <FormGroup
                controlId="formPass" >
                <Row>
                    <Col componentClass={ControlLabel} sm={12}>Password</Col>
                </Row>
                <Row>
                    <Col>
                    <FormControl
                        type="text"
                        value={this.state.Password}
                        placeholder="Enter password"
                        onChange={(e) => { this.handlePass(e); }}/>
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup
                controlId="formLogIn" >
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <Button bsStyle="success"
                    onClick={this.handleClick.bind(this)}>Log In</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
      </div>
    );
  }
}

export default Login;
