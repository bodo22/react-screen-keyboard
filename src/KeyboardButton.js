import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class KeyboardButton extends PureComponent {

	state = {
		isPressed: false,
	}

	static propTypes = {
		value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
		classes: PropTypes.string,
		autofocus: PropTypes.bool,
		isDisabled: PropTypes.bool,
	};

	static defaultProps = {
		classes: '',
		autofocus: false,
		isDisabled: false,
	};

	handleClick = e => {
		e.preventDefault();
		this.setState({ isPressed: true });
		this.props.onClick(this.props.value);
	}

	handleRelease = () => {
		if (this.state.isPressed === true) {
			this.setState({ isPressed: false });
		}
	}

	render() {

		const pressedCls = this.state.isPressed === true ? 'keyboard-button-pressed' : '';

		return (
			<button
				type="button"
				className={`keyboard-button ${this.props.classes} ${pressedCls}`}
				onPointerDown={this.props.isDisabled ? null : this.handleClick}
				onPointerUp={this.handleRelease}
				onPointerOut={this.handleRelease}
				onPointerLeave={this.handleRelease}
				autoFocus={this.props.autofocus}
				disabled={this.props.isDisabled}
			>
				{this.props.value}
			</button>
		);
	}
}
