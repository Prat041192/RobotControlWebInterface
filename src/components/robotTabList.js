import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import RobotView from './RobotViews/robotView';

class RobotTabList extends Component {
  constructor(props) {
    // debugger //eslint-disable-line
    super(props);
    this.state = {
      panelKey: 1,
      activeKey: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ panelKey: eventKey });
  }

  componentDidMount() {
    this.setState({
      panelKey: 1,
      activeKey: this.props.RobotIDList[0].id,
    });
  }

  render() {
    debugger //eslint-disable-line
    return (
      <Tabs id="uncontrolled-tab-example">
          { this.props.RobotIDList.map(robot => (
              <Tab eventKey={robot.id} title={robot.name}>
                  <RobotView id={robot.id} robotObj={robot} ></RobotView>
              </Tab>
          ))}
      </Tabs>
    );
  }
}

export default RobotTabList;
