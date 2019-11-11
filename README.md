# Technical proof for Meteologica S.A

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this project about?

It is a web app made with React to show information about power and temperature.
You have two different pages: Live stream and summary by minute.

### First page: Live stream
- First section:  you can watch information about power and temperature in a line chart which update each five second. There only can be shown last twelve values received to improve user experience but that value can be handle in future development.
- Second section: show the last information you have received.

![Live stream mobile](https://raw.github.com/PozaTR/prueba_meteologica/readme/assets/live-stream-mobile.png?raw=true "Live stream mobile")

![Live stream desktop](https://raw.github.com/PozaTR/prueba_meteologica/readme/assets/live-stream-desktop.png?raw=true "Live stream desktop")

### Second page: summary by minute
- In that section you can see the average information by minute in a bar chart. In this case the limit is set to eigth values to improve ux.

![summary by minute-mobile](https://raw.github.com/PozaTR/prueba_meteologica/readme/assets/summary-by-minute-mobile.png?raw=true "summary by minute mobile")

![summary by minute-desktop](https://raw.github.com/PozaTR/prueba_meteologica/readme/assets/summary-by-minute-desktop.png?raw=true "summary by minute desktop")



## Project structure

The project includes a data json file, one mock service and five components.

### Simulated service

MeteoService: it is a class where you prepare information you need like power and temperature. There is a method with a promise which resolves a single data line from data.json example file.
That is made like that because if in the future you will fetch to real service everything will work seamlessly.
Temperature values have been changed from data.json because initially they were in dK units and, for ux reasons, converted to C.

### Components

- App: you have the main structure and where the info is fetched. Power and temperature information is prepared to use in each component. Also yo can find the state where you keep and organize the information.

- LiveInfo: it is a dummy component which represents first page of the app called live stream, divided in two section and send different information to each childs (ChartInfo and LastInfo).
- ChartInfo: it is a class component which draw power and temperature info each five seconds in a line chart.
- LastInfo: it is a dummy component which received information by props and icon by children.
- MinuteInfo: it is a class component which draw average information by minute in a bar chart.


## Technologies

-React
-Sass
-Html
-Git
-ES6

## How to run the project

In the project directory, you need run:

### `npm install`

To install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

