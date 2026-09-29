import axios from "axios";
import { useEffect, useState } from "react";

export interface VendorModel {
    vendorName: string,
    emailId: string,
    contactNo: string
}


const PostApi = () => {
    const [vendorsList, setVendorsList] = useState([]);
    const [vendorObj, setVendorObj] = useState<VendorModel>({vendorName: '', emailId: '', contactNo: ''});

    const getVendors = async () => {
        const vendors = await axios("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
        console.log('incoming vendors', vendors);
        setVendorsList(vendors.data)
    }

    useEffect(() => {
        getVendors();
    }, []);

    const updateVendorDetail = (event:any, keyType: string) => {
        setVendorObj((oldObj: VendorModel) => ({...oldObj, [keyType]: event.target.value}));
    }

    const submitFormDetails = async () => {
        console.log("incoming vendorObj", vendorObj);
        
        const result = await axios.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", vendorObj)
        
        if(result.status == 201) {
            alert("Vendor created Success");
            getVendors();
        }
        else {
            alert("API error");
        }
    }

    return (
        <>
        <strong>POST API page</strong>
        <h1>Vendor Registrartion Form</h1>

        <form className="form-inline">
            <div className="form-group">
                <label>Vendor Name:</label>
                <input type="text" className="form-control" onChange={(e) => updateVendorDetail(e, 'vendorName')} />
                <p> vendorName - {vendorObj.vendorName}</p>
            </div>

            <div className="form-group">
                <label>Vendor Email:</label>
                <input type="email" className="form-control"  onChange={(e) => updateVendorDetail(e, 'emailId')}  />
                <p> emailId - {vendorObj.emailId}</p>
            </div>

            <div className="form-group">
                <label>Vendor Contact:</label>
                <input type="text" className="form-control"  onChange={(e) => updateVendorDetail(e, 'contactNo')}  />
                <p> contactNo - {vendorObj.contactNo}</p>
            </div>

            <div className="form-group">
                <button type="submit" onClick={submitFormDetails}>Submit</button>
            </div>


        </form>

        <h1>Vendors Table</h1>
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
                            
                            vendorsList?.map((vendor: VendorModel, index: number) => {

                                return (
                                    <tr key={index}>
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
        </>
    )
}

export default PostApi;