import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/bootstrap/bootstrap.scss';
import './css/main.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileMenu: false
		}

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({mobileMenu: !this.state.mobileMenu});
	}

	render() {
		if (!this.state.mobileMenu) {
			return (
				<Router>
					<Nav toggle={this.toggleMenu}/>
					<Switch>
						<Route path="/test">
							<h1>test</h1>
						</Route>
						<Route path="/">
							<div className="hero"></div>
						</Route>
					</Switch>
					<Footer />
				</Router>
			)
		} else {
			return (
				<div className="mobile-menu py-3">
					<div className="container">
						<div className="row">
							<div className="d-flex justify-content-between align-items-center">
								<h1 className="m-0">SEB</h1>
								<svg className="close" onClick={this.toggleMenu} viewBox="0 0 100 100" width="25" height="25">
									<g transform="matrix(0.976026,-0.976026,1.09909,1.09909,-20.5994,86.0127)">
										<rect x="18.392" y="10.909" width="72.448" height="9.65" rx="6"></rect>
									</g>
									<g transform="matrix(-0.976026,-0.976026,1.09909,-1.09909,86.0127,120.599)">
										<rect x="18.392" y="10.909" width="72.448" height="9.65" rx="6"></rect>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default App;
