import React, { Component } from 'react';
import Dock from 'react-dock';
import {
  Glyphicon,
} from 'react-bootstrap';
import Control from './control';
import TabNav from './tabnav';
import Information from './inforView';
import * as API from '../../util/backend-cli';

class RobotView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelKey: 1,
      isVisible: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
    API.initialize(this.props.robotObj.url);
    this.showHideControlPanel = this.showHideControlPanel.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ panelKey: eventKey });
  }

  showHideControlPanel() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
             <div className="row">
                <TabNav imgurl={this.props.robotObj.url} showPanel={this.showHideControlPanel}></TabNav>
                <Dock position='right' isVisible={this.state.isVisible}>
                    {/* you can pass a function as a child here */}
                    <div className='paddspace' onClick={() => this.showHideControlPanel()}>
                    <span className='pull-left'>
                      <Glyphicon glyph="remove" />
                    </span>
                    </div>
                    <div>
                        <Information robotObj={this.props.robotObj}></Information>
                        <Control robotObj={this.props.robotObj.rosObj}></Control>
                    </div>
                  </Dock>
            </div>
    );
  }
}

export default RobotView;
