import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
    return(
        <ListGroup>
            {/* <Link className="list-group-item list-group-item-action" to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" to="/add-course">
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses">
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" to="#">
                About
            </Link>
            <Link className="list-group-item list-group-item-action" to="/course">
                Contact Us
            </Link> */}
            <ListGroupItem tag="a" href="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>
                Add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>
                View Courses
            </ListGroupItem>
        </ListGroup>
    );
};

export default Menus;