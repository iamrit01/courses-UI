import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";

const AddCourse = () => {
    useEffect(()=>{
        document.title='Add Course';
    });

    const [course,setCourse] = useState({});

    // form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    // creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong while adding course");
            }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId"> Course Id</Label>
                    <Input type="text" placeholder="Enter id here"
                     name="userId" id="userId"
                     onChange={(e)=>{
                        setCourse({...course,id:e.target.value });
                     }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title"> Course title</Label>
                    <Input type="text" placeholder="Enter title here"
                     id="title"
                     onChange={(e)=>{
                        setCourse({...course,title:e.target.value });
                     }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description"> Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here"
                      id="description" style={{height:150}}
                      onChange={(e)=>{
                        setCourse({...course,description:e.target.value });
                      }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ms-2">Clear All</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;