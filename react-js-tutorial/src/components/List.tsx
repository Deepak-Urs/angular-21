import { useNavigate } from "react-router";
import MyList from "../reusableComponents/MyList";
import MyAlerts from "../reusableComponents/MyAlerts";
import { useState } from "react";
import MyListGroup from "../reusableComponents/MyListGroup";

const List = () => {
    const cityList = ['P','M','Y','N','My']
    const navigate = useNavigate();
    const [toggleAlert, setToggleAlert] = useState<boolean>(false);

    const studentList: Istudent[] = [
        {name: "AA", city: "Mys", state: "KA"},
        {name: "BB", city: "Cha", state: "KA"},
        {name: "CC", city: "Ben", state: "KA"},
        {name: "DD", city: "Man", state: "KA"}
    ];

    const navigateToDataBinding = () => {
        navigate('/data-event-binding')
    }

    const navigateToPrevPage = () => {
        navigate(-1);
    }

    const changeToggleAlert = () => {
        setToggleAlert(!toggleAlert);
    }

    const getSelectedItem = (itemName: string) => {
        alert(itemName);
    }
 
    return (<>
        <h2> Lists </h2>
        <div className="col">
            <MyListGroup arry={cityList} onSelectItem={getSelectedItem}/>
        </div>
        <div className="col-3">
            <button onClick={changeToggleAlert}>Toggle Alert</button>
            {toggleAlert === true && <MyAlerts alertType="success"/>}
        </div>
        <div className="col-3">
            <p>*--Props List--*</p>
            <MyList listItem={cityList}/>
        </div>
        <div className="row">
            <div className="col-3">
                <button onClick={navigateToDataBinding}>Navigate to Data Binding</button>
            </div>
            <br/>
            <div className="col-3">
                <button onClick={navigateToPrevPage}>Navigate to Previous Page</button>
            </div>
            
            <br/>
            <div className="col-3">
                <button onClick={() => navigate('/user/1')}>Navigate to User-1 Page</button>
            </div>
            <div className="col-3">
                <button onClick={() => navigate('/user/2')}>Navigate to User-2 Page</button>
            </div>
            <div className="col-2">
                <ol>
                    {
                        cityList.map((city: string) => {
                            return <li key={city}>{city}</li>
                        })
                    }
                </ol>
            </div>

            <div className="col-2">
                <ol>
                    {
                        cityList.map((cityName: string) => (<button key={cityName} className="btn btn-success">{cityName}</button>))
                    }
                </ol>
            </div>
            <br/>


            <div className="col-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>

                        {studentList.map((student: Istudent) => {
                            return (
                                <tr key={student.name}>
                                    <td>{student.name}</td>
                                    <td>{student.city}</td>
                                    <td>{student.state}</td>
                                </tr>
                            )
                        } )}
                    </tbody>


                </table>
            </div>
        </div>
    </>)
}

export default List;

interface Istudent {
    name: string;
    city: string;
    state: string;
}