import React, { Component } from 'react';
import {
  Button, Alert,
} from 'react-bootstrap';


export default class AlertDismissable extends React.Component {
  constructor(props) {
    super(props);
    // debugger // eslint-disable-line
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.props.handleClose();
  }

  render() {
    // debugger // eslint-disable-line
    if (this.props.show) {
      return (
          <Alert className={this.props.class} bsStyle="danger" onDismiss={this.handleDismiss}>
            <h4>Oh snap! You got an error!</h4>
            <p>
              {this.props.error}
            </p>
          </Alert>
      );
    }

    return (<div/>);
  }
}

// render(<AlertDismissable />);
