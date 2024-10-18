/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useState } from "react";
const Apitest=() => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState(true);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://endpoints.omniatech.io/v1/eth/mainnet/publicrpc')
                if(!response.ok){
                    throw new Error('Response was not OK'); 
                }
                const result = await response.json();
                setData(result);
            }
            catch(error){
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();

    },[]);
    if(loading){
        return(<div>Loading.....</div>)
    }
    if(error){
        return(<div>Error:{error}</div>)
    }
    return(
        <div>
            <h1>Public RPC Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display data in a readable format */}
        </div>
    )

}

export default Apitest