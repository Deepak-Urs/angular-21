import { useState } from "react";

function UseStates() {
    let courseName = "React";
    const [courseVideos, setCourseVideos] = useState(0);
    const [productPrice, setProductPrice] = useState<number>(1200);
    const [isActive, setIsActive] = useState<boolean>(false);

    const changeCourseName = () => {
        courseName = "Angular";
    }

    const changeCourseVideos = () => {
        setCourseVideos(5);
    }

    const changeCoursePrice = (event: any) => {
        setProductPrice(event.target.value);
    }

    const onActiveChange = (event: any) => {
        setIsActive(event.target.checked);
    }

    return <>
        <h1>Course Name: {courseName}</h1>
        <br></br>
        <h2>CourseVideo length: {courseVideos}</h2>
        <button onClick={changeCourseName}> Change Course Name</button>
        <button onClick={changeCourseVideos}> Change Course Video</button>
        <br></br>
        <input type="number" onChange={(event) => changeCoursePrice(event)} />
        <p>Selected Price: {productPrice}</p>
        
        isActive - {isActive ? 'checked' : 'unchecked'}
        <br></br> 
        <input type="checkbox" onChange={(event) => onActiveChange(event)} />
    </>
}

export default UseStates;