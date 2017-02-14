import React from 'react';

const Header = (props) => { //could also be writen as function Header () {}
	return (
		<header className="top">
			<h1>
			Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3> { /* This is a prop that is made available to the component */ }
		</header>
	)
}


export default Header;