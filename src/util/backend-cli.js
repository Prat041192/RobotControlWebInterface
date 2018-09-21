import ROSLIB from 'roslib';

function getSession() {
  return JSON.parse(window.sessionStorage.getItem('session'));
}

// ============== helper methods

function convertToRad(Deg) {
  return Deg * 0.01745;
}

export function initialize(baseUrl) {
  // creating a ROS object here could be an idea
  this.ros = new ROSLIB.Ros(baseUrl);
  this.ros.on('connection', () => {
    console.log('Connected to websocket server on CLI.');
  });
  this.ros.on('error', (error) => {
    console.log(`Error occurred ${error} on cli`);
  });
  this.ros.on('close', () => {
    console.log('Connection closed on cli');
  });
}
function getTopic(rosObj) {
  // getting the topics here
  const Topic = new ROSLIB.Topic({
    ros: rosObj,
    name: '/supervisorCtrlAct',
    messageType: 'geometry_msgs/Pose2D',
  });
  return Topic;
}

function getMessage(radVal) {
  // getting the message here
  const msg = new ROSLIB.Message({
    x: 0, // @Prateek: Linear that the user specified via a control.
    y: 0,
    theta: radVal,
  });
  return msg;
}

export function turnLeft(rosObj) {
  // trying to tuzrn left
  try {
    // const radVal = convertToRad(90);
    const msg = getMessage(1.57);
    const Topic = getTopic(rosObj);
    Topic.publish(msg);
  } catch (e) {
    console.log(e);
  }
}

export function turnRight(rosObj) {
  // trying to trun right
  try {
    // const radVal = convertToRad(90);
    const msg = getMessage(-1.57);
    const Topic = getTopic(rosObj);
    Topic.publish(msg);
  } catch (e) {
    console.log(e);
  }
}

export function goStraight(rosObj) {
  // will go straight
  try {
    // const radVal = convertToRad(0);
    const msg = getMessage(0);
    const Topic = getTopic(rosObj);
    Topic.publish(msg);
  } catch (e) {
    console.log(e);
  }
}

export function stop() {
  // will make the robot stop
  // not implemented yet
  try {
    const radVal = convertToRad(0);
    const msg = getMessage(radVal);
    const Topic = getTopic();
    Topic.publish(msg);
  } catch (e) {
    console.log(e);
  }
}

export function turnLeftatAngle(val) {
  const radVal = convertToRad(val);
  const msg = getMessage(radVal);
  const Topic = getTopic();
  Topic.publish(msg);
}

export function turnRightatAngle(val) {
  const radVal = convertToRad(val);
  const msg = getMessage(radVal);
  const Topic = getTopic();
  Topic.publish(msg);
}

export function getImage(API) {
  // gets the Image of 360 camera
  const ipPart = API.split(':')[1];
  const APIURL = `http:${ipPart}:8080/snapshot?topic=/image_raw`;
  return APIURL;
}

export function getMapImageTile(Address) {
  // gets the map tile fo robot
  const ipPart = Address.split(':')[1];
  const APIURL = `http:${ipPart}:8080/snapshot?topic=/map_image/tile`;
  return APIURL;
}
export function getMapImageFull(Address) {
  // getting the full map from the robot
  const ipPart = Address.split(':')[1];
  const APIURL = `http:${ipPart}:8080/snapshot?topic=/map_image/full`;
  return APIURL;
}

export function getListener(rosObj) {
  // creating a listener
  const listener = new ROSLIB.Topic({
    ros: rosObj,
    name: '/supervisorCtrlReq',
    messageType: 'std_msgs/UInt8',
  });

  return listener;
}
