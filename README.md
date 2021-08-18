# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy `firebase deploy`
Run `npm run build` before deploy <br/>
Deploys to https://mytest-beb7e.web.app/
# my-react-calculator description
Calculator app built with React and no other packages installed. I built with react create app and used functional component across whole code. <br/>
I used additional css and didn't try to install any external packages for better performance and avoiding unnecessary memory use.
<b>+,-,/,*</b> calculation is working
## What is the main approach to save input values and final result
There are two values that are managed by state. They are <b>currentvalue</b> and <b>inputvalue</b>.
<b>currentvalue</b> is value that indicates the value that will be sit before operator that will come following. 
<b>inputvalue</b> is value that indicates value after operator.
Calculations are performed when ever operator is clicked and I used these two values of state for certain operation. After one calculation I saved result to <b>currentvalue</b>. 
So to conclud my approach is calculation is processed when operator is clicked not when "=" operator is clicked and result is being saved to state continuously. that can be said that first result is going to be input of next operation.
## What did I approach goal of theming
As long as I decided to not using any dynamic css such as scss, I predefined two classes for parent div of calculator and managed these as stateful values.
I used variable in css to approach thing to apply dynamic colors over correct base color.
## What I did take importance in this test task
I like to divide app into smaller parts and components for best practices. Therefore I have made over 3,4 child components for complete calculator app.
- I took importance in building clean and readable code. 
- No existence of warnings and ambigious errors.
- Invent only needed component, avoid garbage code.
## Measure performance of this app
I didn't try any useCallback or useMemo for this test because this can be decribed as simple without complexity, which I don't require any optimization.
## What did I make to build screen responsive calculator app
I don't have to implement any media query or inline styles of devices for this simple calculator. I set constant value for width of calculator
## What could I add more to make successful calculator if I have more time
- I could build with Typescript with proper datetypes for values and functions.
- I could add testing for every component I used.
- I could focus more on implementing correct theming on this project including fontfamily and fontsize 
