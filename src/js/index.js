//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

class TrafficLight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			red: false,
			yellow: true,
			green: false
		};
	}

	render() {
		let lightRed = "";
		let lightYellow = "";
		let lightGreen = "";
		if (this.state.red === true) {
			lightRed = "light";
		}
		if (this.state.yellow === true) {
			lightYellow = "light";
		}
		if (this.state.green === true) {
			lightGreen = "light";
		}

		return (
			<div className="bigContainer">
				<div
					className={`red ${lightRed}`}
					onClick={() =>
						this.setState({
							red: true,
							yellow: false,
							green: false
						})
					}>
					Red
				</div>
				<div
					className={`yellow ${lightYellow}`}
					onClick={() =>
						this.setState({
							red: false,
							yellow: true,
							green: false
						})
					}>
					Yellow
				</div>
				<div
					className={`green ${lightGreen}`}
					onClick={() =>
						this.setState({
							red: false,
							yellow: false,
							green: true
						})
					}>
					Green
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
