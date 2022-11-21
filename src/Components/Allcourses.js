import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

      // function to call server:
      const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // suucess
                toast.success("courses has been loaded",{
                    position: "bottom-center"
                });
                setCourses(response.data);
            },
            (error)=>{
                // error
                console.log(error);
                toast.error("something went wrong",{
                    position: "bottom-center"
                });
            }
        )
      };


      useEffect(()=>{
        document.title="All Courses";
        getAllCoursesFromServer();
      },[]);

    const [courses,setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c)=>c.id != id));
    }

    return(
       <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows:</p>

        {  courses.length>0 ? courses.map((item)=>
                <Course key={item.id} course={item} update={updateCourses}/>
            ) :"No courses available"
        }
       </div>
    );

}

export default Allcourses;