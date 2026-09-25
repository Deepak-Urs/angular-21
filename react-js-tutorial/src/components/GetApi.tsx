import { useState, useEffect } from "react";

const GetApi = () => {
    const [userList, setUserList] = useState([]);
    const [vendorsList, setVendorsList] = useState([]);

    const getAllUsers = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userList = await response.json();
        console.log('incoming userList', userList);
        
        setUserList(userList);
    }

    const getVendors = async () => {
        const response = await fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
        const vendors = await response.json();
        setVendorsList(vendors)
    }

    useEffect(() => {
        getAllUsers();
        //getVendors();
    }, []);

    useEffect(() => {
        getVendors();
    }, []);

   
    return (<>
        Get API Integration

        <div className="row">
            <div className="col-3">
                <ul>
                    {
                        userList.map((user: UserModel) => {
                            return <li>{user.name}</li>
                        })
                    }
                </ul>
            </div>

            <div className="col-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Vendor Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                
                                vendorsList.map((vendor: VendorModel) => {

                                    return (
                                        <tr>
                                            <td>{vendor.vendorName}</td>
                                            <td>{vendor.emailId }</td>
                                            <td>{vendor.contactNo}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                    
                </table>
            </div>
        </div>
    </>)
}

export default GetApi;

export interface UserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address: unknown,
  phone: string,
  website: string,
  company: unknown
}

export interface VendorModel {
    vendorName: string,
    emailId: string,
    contactNo: string
}