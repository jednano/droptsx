import { createBEMBlock } from '@jedmao/react-bem';
import * as React from 'react';
import './app.css';

const logo = require('./logo.svg');

class App extends React.Component {
	static defaultProps = {
		bemBlock: 'app',
	};
	render() {
		return (
			<div>
				<header bemElement="header">
					<img src={logo} bemElement="logo" alt="logo" />
					<h1 bemElement="title">Welcome to React</h1>
				</header>
				<p bemElement="intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default createBEMBlock(App);
