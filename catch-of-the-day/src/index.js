import React from 'react'; //loads everything in react library into React variable
import { render } from 'react-dom'; //We do this to render HTML if we were writing an app we would use something else, curly brackets are here to just import one method from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'; //This takes everything in style.css and webpack compiles it all


import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />			
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));

//routing
