import { useParams } from "react-router";

function User() {
    const {userId} = useParams<{userId:string}>();
    return <h2 className="primary">Hi, User ID = {userId}</h2>
}

export default User;