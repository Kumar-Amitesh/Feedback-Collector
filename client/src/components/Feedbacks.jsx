import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useOutletContext } from 'react-router-dom';

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const { darkMode } = useOutletContext();

    // Fetch feedbacks from the server
    const fetchFeedbacks = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_FEEDBACKS_URL);
            setFeedbacks(res.data);
        } catch (err) {
            console.error('Error fetching feedbacks:', err);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
        <div>
            <div className={`min-h-screen bg-gray-100 text-gray-900 dark:text-gray-100 transition-all duration-500 p-4 flex flex-col items-center ${darkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    {feedbacks.map((fb, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
                            className="bg-white dark:bg-gray-800 shadow-md rounded p-4"
                        >
                            <p className="font-bold">{fb.name} ({fb.email})</p>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{fb.message}</p>
                            <p className="text-xs text-gray-400 mt-2">Submitted: {new Date(fb.createdAt).toLocaleString()}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
