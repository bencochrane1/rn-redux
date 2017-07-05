import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		console.log('these are the new props', this.props)
		return (
			<div></div>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);