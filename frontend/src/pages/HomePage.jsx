import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from "../components/NoteCard";
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

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className='text-AlignCenter text-primary py-10'>Loading notes...</div>}

                {notes.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {notes.map((note) => (
                            <NoteCard key={note._id} note={note} />
                        )
                        )}
                    </div>
                )}
            </div>

        </div>

    )
}

export default HomePage