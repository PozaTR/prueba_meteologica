# Technical proof for Meteologica S.A

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this project about?

It is a web app made with React to show information about power and temperature.
You have two different pages: Live stream and summary by minute.

First page (live stream) where you have two sections:
- First section:  you can watch information about power and temperature in a line chart which update each five second.
- Second section: show the last information you have received.

![Live stream mobile](https://raw.github.com/PozaTR/prueba_meteologica/readme/live-stream-mobile.png?raw=true "Live stream mobile")

Second page (summary by minute) where you only have one section:
- In that section you can watch the average minute information in a bar chart.


## Project structure

The project includes a data json file, one simulated service and five component.

### Simulated service

MeteoService: you have fetchData class where you prepare information you need like power and temperature. 

### Components

- App: you have the main structure and find requestInfo function which prepare power and temperature information to use in each component. Also yo can find the state where you keep and organize the information.

- LiveInfo: it is a dummy component who represent first page of the app called live stream which is divided in two section and send different information to each childs (ChartInfo and LastInfo)
- ChartInfo: it is a class component which draw power and temperature info each five seconds in a line chart.
- LastInfo: it is a dummy component which received information by children.
- minuteInfo: it is a class component which draw average minute information in a bar chart.


## Technologies

-React
-Sass
-Html
-Git
-ES6

## How to run the project

In the project directory, you can run:

### `npm install`

To install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

