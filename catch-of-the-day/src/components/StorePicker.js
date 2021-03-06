import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		console.log("You've changed the URL")
		//first grab text from box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		//second we're going to transition from / to /store/:storeID
		this.context.router.transitionTo(`/store/${storeId}`)

	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}> { /*Need to bing goToStore to StorePicker like this so you can use the this. method, or use a constructor, or use and arrow function {(e) => this.goToStore(e)} */ }
				{ /* This is how you write a comment on React */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;