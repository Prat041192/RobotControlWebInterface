import React, { Component } from 'react';
import {
  FormControl, Button, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import * as API from '../../util/backend-cli';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angleRot: 0,
      LinerRot: 0,
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleTurnAoundClick = this.handleTurnAoundClick.bind(this);
    this.handleStraightClick = this.handleStraightClick.bind(this);
  }

  handleStraightClick() {
    API.goStraight(this.props.robotObj);
  }

  handleTurnAoundClick() {
    API.turnLeft(this.props.robotObj);
  }

  handleLeftClick() {
    API.turnLeft(this.props.robotObj);
  }

  handleRightClick() {
    API.turnRight(this.props.robotObj);
  }

  handleStopClick() {
    API.stop(this.props.robotObj);
  }

  HandleEnter() {
    API.stop(this.props.robotObj);
  }

  render() {
    const tooltip = (
        <Tooltip id="tooltip">
          Press <strong>Enter</strong> to rotate.
        </Tooltip>
    );
    return (
        <div className='paddspace'>
            <div className="row margin">
                <h3>Controls</h3>
            </div>
            <hr/>
            <div className="row margin">
                <div className="col-md-4">
                <OverlayTrigger placement="left" overlay={tooltip}>
                    <FormControl
                        type="text"
                        ref="angleToLeft"
                        placeholder="Enter angle value towards left"
                        value={this.state.LinerRot}
                        onKeyDown={this.HandleEnter}/>
                </OverlayTrigger>
                </div>
                <div className="col-md-4">
                    <Button ref='left' bsStyle="info" onClick={this.handleStraightClick}>
                        <Glyphicon glyph="arrow-up" />
                    </Button>
                </div>
                <div className="col-md-4 margin">
                <OverlayTrigger placement="left" overlay={tooltip}>
                <FormControl
                    type="text"
                    ref="angleToRight"
                    placeholder="Enter angle value towards right"
                    value={this.state.angleRot}
                    onKeyDown={this.HandleEnter}/>
                </OverlayTrigger>

                </div>
            </div>

            <div className="row margin">
                <div className="col-md-4">
                    <Button ref='left' bsStyle="info" onClick={this.handleLeftClick}>
                        <Glyphicon glyph="arrow-left" />
                    </Button>
                </div>
                <div className="col-md-4">
                    <Button ref='stop' bsStyle="info" onClick={this.handleStopClick}>
                        <Glyphicon glyph="pause" />
                    </Button>
                </div>
                <div className="col-md-4">
                    <Button ref='right' bsStyle="info" onClick={this.handleRightClick}>
                        <Glyphicon glyph="arrow-right" />
                    </Button>
                </div>
            </div>

            <div className="row margin">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 margin">
                    <Button ref='return' bsStyle="info" onClick={this.handleTurnAoundClick}>
                        <Glyphicon glyph="arrow-down" />
                    </Button>
                </div>
                <div className="col-md-4">
                </div>
        </div>
    </div>
    );
  }
}

export default Controls;
