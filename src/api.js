/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

const Apitest = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://catfact.ninja/facts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch(error) {
                console.error("Fetch error:", error);
                setError('Failed to fetch data. Please try again later.');
                        
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Consider using a spinner or loader component
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Public API Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display data in a readable format */}
        </div>
    );
}

export default Apitest;
