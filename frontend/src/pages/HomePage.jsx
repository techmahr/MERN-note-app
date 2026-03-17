import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const HomePage = () => {

    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                // fetch api method 
                // const res = await fetch("http://localhost:5001/api/notes");
                // const data = await res.json();

                // here we use axios 
                const res = await axios.get("http://localhost:5001/api/notes");  // this give full axios response object 
                //console.log(res.data)
                setNotes(res.data); // this stores actual note data 
                setIsRateLimited(false); // if we are getting data, we are not rate limited 

            } catch (error) {
                console.log("Error fetching notes");
                if (error.response.status === 429) {
                    setIsRateLimited(true)
                } else {
                    toast.error("Failed to load notes")
                }
            } finally {
                setLoading(false)
            }
        };
        fetchNotes();
    }, []);

    return (
        <div className='min-h-screen'>
            <Navbar />
            {isRateLimited && <RateLimitedUI />}
        </div>

    )
}

export default HomePage