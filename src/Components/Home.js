import React, { useEffect } from "react";
import {Container,Button} from 'reactstrap'; 
import {toast} from 'react-toastify';
function Home(){
    useEffect(()=>{
        document.title="Home || Learning";
    },[]);
    const notify = () => {
        toast.success("btn clicked successfullly" )
    };
    return (
        <div className="p-2 text-center bg-light  rounded">
                <h1 className="display-3">Courses Application</h1>
                <p>this application adds update delete courses using rest api's in spring boot</p>
                <Container>
                <Button color="warning" onClick={notify} outline>Start Using</Button>
                </Container>
        </div>
    );
}

export default Home;