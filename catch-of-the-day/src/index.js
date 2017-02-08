import React from 'react'; //loads everything in react library into React variable
import { render } from 'react-dom'; //We do this to render HTML if we were writing an app we would use something else, curly brackets are here to just import one method from 'react-dom'
import './css/style.css'; //This takes everything in style.css and webpack compiles it all


// import StorePicker from './components/StorePicker'; 
import App from './components/App'

render(<App/>, document.querySelector('#main'));