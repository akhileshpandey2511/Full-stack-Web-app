import React, { useEffect } from "react";
import Apitest from './api';
import { useState } from "react";

const Cards = () => {
    const [data, SetData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.publicapis.org/entries');

                if(!response.ok){
                    throw new Error('Network response Not ok');
                }
            }
            catch(error){
                setError('Failed to fetch data. Please try again later.');
            }
        };
    }, []);     

    return (
        <Apitest/>
    )
}

export default Cards; 