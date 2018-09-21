import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import ImageView from './imageview';
import DecisionView from './decisionmap';

class TabbedNav extends Component {
  constructor(props) {
    super(props);
    this.state = { panelKey: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ panelKey: eventKey });
  }

  hidePanelinParent() {
    this.props.showPanel();
  }

  render() {
    // debugger; //eslint-disable-line
    let view;
    if (this.state.panelKey === '1') {
      view = <ImageView key="1" url={this.props.imgurl}></ImageView>;
    } else if (this.state.panelKey === '2') {
      view = <DecisionView address={this.props.imgurl} ></DecisionView>;
    }
    return (
        <div>
            <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                <NavItem eventKey="1" title="Position">
                  Last Position
                </NavItem>
                <NavItem eventKey="2" title="Map">
                  Path Map
                </NavItem>
          </Nav>
          <div onClick={() => this.hidePanelinParent()}>
            <span ><Glyphicon glyph="align-justify" /></span>
          </div>
          {view}
      </div>
    );
  }
}

export default TabbedNav;
