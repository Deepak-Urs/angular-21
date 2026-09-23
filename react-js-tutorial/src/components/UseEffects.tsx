import { useEffect, useState } from "react";

const UseEffects = () => {
    const [courseName, setCourseName] = useState<string>("React");
    const [courseVideos, setCourseVideos] = useState<number>(0);

    //runs every single time
    //useEffect(() => {
    //    console.log("Plain useEffect!"); 
    //})

    // runs only one time when the component loads
    useEffect(() => {
        console.log("UseEffect with empty dependency!"); 
    }, []);

    useEffect(() => {
        console.log("UseEffect with courseName dependency!"); 
    }, [courseName]);

    useEffect(() => {
        console.log("UseEffect with courseVideos dependency!"); 
    }, [courseVideos]);

    useEffect(() => {
        console.log("UseEffect with courseName+courseVideos dependency!"); 
    }, [courseName, courseVideos]);

    const changeCourseName = (courseName: string) => {
        setCourseName(courseName);
    }

    const changeCourseVideoLength = (videoLength: number) => {
        setCourseVideos(videoLength);
    }
    
    return (
        <div>
            <h5> UseEffects </h5>
            <h2>{courseName}</h2>
            <button onClick={() => changeCourseName("Angular")}> Change Course Name - Angular </button>
            <button onClick={() => changeCourseName("React")}> Change Course Name - React </button>
            <button onClick={() => changeCourseName("Vue")}> Change Course Name - Vue </button>
            <br />
            <h2>{courseVideos}</h2>
            <button onClick={() => changeCourseVideoLength(10)}> Change Course VIdeo Length - 10</button>
            <button onClick={() => changeCourseVideoLength(20)}> Change Course VIdeo Length - 20</button>
            <button onClick={() => changeCourseVideoLength(30)}> Change Course VIdeo Length - 30</button>
        </div>
    )
}

export default UseEffects;
