import React from 'react';
import '../css/bootstrap/bootstrap.scss';
import '../css/main.scss';

class Nav extends React.Component {
	render() {
		return (
			<nav className="nav-transparent py-3">
				<div className="container d-md-none">
					<div className="row align-items-center">
						<div className="col-6 text-start">
							<h1 className="nav-item white-text m-0" onClick={() => window.location.replace("/")}>SEB</h1>
						</div>
						<div className="col-6 text-end">
							<svg className="hamburger" onClick={this.props.toggle} viewBox="0 0 100 75" width="25" height="25">
								<rect width="100" height="15" rx="6"></rect>
								<rect y="30" width="100" height="15" rx="6"></rect>
								<rect y="60" width="100" height="15" rx="6"></rect>
							</svg>
						</div>
					</div>
				</div>

				<div className="container d-none d-md-block">
					<div className="row align-items-center">
						<div className="col-3 text-start">
							<h1 className="nav-item m-0" onClick={() => window.location.replace("/")}>SEB</h1>
						</div>
						<div className="col-9 text-end">
							<ul className="list-inline mb-0">
								<li className="list-inline-item ms-4">
									<h4 className="nav-item m-0" onClick={() => window.location.replace("/about")}>ABOUT US</h4>
								</li>
								<li className="list-inline-item ms-4">
									<h4 className="nav-item m-0" onClick={() => window.location.replace("/events")}>EVENTS</h4>
								</li>
								<li className="list-inline-item ms-4">
									<h4 className="nav-item m-0" onClick={() => window.location.replace("/team")}>OUR TEAM</h4>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav;
