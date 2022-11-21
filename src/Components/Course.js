import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,CardBody,
    CardSubtitle,CardText,
    Button,
    Container
} from 'reactstrap';
import base_url from "../api/bootapi";

const Course = ({course, update}) => {
    
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted successfullyu");
                update(id);
            },
            (error)=>{
               toast.error("something went wrong while deleting course");
            }
        )
    };
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title} </CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning" className="ms-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;
