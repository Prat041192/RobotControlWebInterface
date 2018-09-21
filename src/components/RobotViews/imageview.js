import React, { Component } from 'react';
import { Pannellum } from '360-react-pannellum';
import * as API from '../../util/backend-cli';

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      imgFound: false,
      time: Date.now(),
    };
    this.closeAction = this.closeAction.bind(this);
  }

  closeAction() {
    const URL = API.getImage(this.props.url);
    this.setState({ img: URL, imgFound: true });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 20000);
  }

  render() {
    let view;
    let URL = null;
    URL = API.getImage(this.props.url);
    if (URL != null) {
      view = <Pannellum
      width='100%'
      height='700px'
      imagePath= {URL}
      isDisplayCloseButton={true}
      closeHandler={this.closeAction}
      closeButtonTitle='Manual Refresh'
      showZoomCtrl={false}
      showFullscreenCtrl={false}
      autoLoad />;
    }

    return (
        <div className='imgClass'>
          {this.state.time}
          {view}
        </div>
    );
  }
}

export default ImageView;
