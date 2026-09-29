//CRUD APIs
// 1. Get -> to get the list of items
// 2. Post -> to create a new record item
// 3. Put -> to update an exisiting item
// 4. Delete -> to remove an existing item

import { useEffect, useState } from "react";

interface UserModel {
    title: string,
    body: string
}

const CrudApis = () => {
    const [userList, setUsersList] = useState<UserModel[]>([]);
    const [userData, setUserData] = useState<UserModel>({title: '', body:''});

    const getPostsList = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("result", data);

        setUsersList(data);
    }

    useEffect(() => {
        getPostsList();
    }, [])

    const updateUserDetail = (event: React.ChangeEvent<HTMLInputElement>, keyType: keyof UserModel) => {
        setUserData((oldObj: UserModel) => ({ ...oldObj, [keyType]: event.target.value }));
    }

    const submitFormData = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            console.log("incoming response", response);

            if (response.status === 200 || response.status === 201) {
                alert("Data record created success!");
                getPostsList();
            }
        }
        catch(error) {
            console.log("error seen", error)
        }
    }



    return (<>
        <h1>CRUD page</h1>

        <h2>User Form</h2>
        <form className="form" onSubmit={submitFormData}>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={userData.title}
                    onChange={(e) => updateUserDetail(e, 'title')}
                />
            </div>

            <div className="form-group">
                <label>Body</label>
                <input
                    type="text"
                    className="form-control"
                    value={userData.body}
                    onChange={(e) => updateUserDetail(e, 'body')}
                />
            </div>

            <div className="form-group">
                <input type="submit" className="form-control btn btn-default" value="Submit" />
            </div>
        </form>

        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {userList?.map((user: UserModel) =>  
                    <tr>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>)
}

export default CrudApis;