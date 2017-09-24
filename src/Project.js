import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

class Project extends React.Component {

	render() {
		return (
			<div>
				<Row>
			        <Col md={8}>
			          <a href="#">
			            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""/>
			          </a>
			        </Col>
			        <Col md={4}>
			          <h3>{this.props.title}</h3>
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
			          <a className="btn btn-primary" href="#">View Project</a>
			        </Col>
				</Row>
				<hr/>
			</div>

		);
	}
}

export default Project