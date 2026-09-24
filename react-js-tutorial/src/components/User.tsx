import { useParams } from "react-router";
import MyList from "../reusableComponents/MyList";

function User() {
    const {userId} = useParams<{userId:string}>();
    const cityList = ['P','M','Y','N','My']
    
    return (<>
        <h2 className="primary">Hi, User ID = {userId}</h2>
        <MyList listItem={cityList}/>
    </>)
    
}

export default User;