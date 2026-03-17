import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [isRateLimited, setIsRateLimited] = useState(true);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                // fetch api method 
                // const res = await fetch("http://localhost:5001/api/notes");
                // const data = await res.json();

                // here we use axios 
                const res = await axios.get("http://localhost:5001/api/notes")
                console.log(res.data)

            } catch (error) {
                console.log("Error fetching notes", error)
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