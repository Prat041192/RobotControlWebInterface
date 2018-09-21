# Robot control system

A web frontend application developed in a view to control the robot remotely during autonomous driving using：

- React Js
- React-Bootstarp
- Penellum

The front end connects the Robot using a web socket and controls the Robot by publishing and subscribing to the topic.

# Installation

There is no specific installation needed. 
Just clone the repository using 
`git clone command`

Once repository is cloned, install the dependencies using the install command mentioned below.
`Do not forget to naviate to the FrontEnd folder in the cloned repository before installing the dependencies.`

```
npm install
```
Once all the dependencies are installed, the application is all set to be started.

# Run locally

Frontend can be run locally at present. To run the application run the following command.

## Frontend

run `npm start`

This will run the application in the local browser. 
There is a minor dependency of CORS, which needs to be enabled in the browser in which the application is being browsed.
When the set up is finished, the log in view will appear. 
Currently the user name and Password are hard coded as `'User'` & `'Dcaiti'` resptivetly.
After this the application is all set to communicate with the Robot.

```
