import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Form = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { darkMode } = useOutletContext();

    // handleChange function to update form state
    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    // validate function to check for errors in the form
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
        if (!form.message.trim()) newErrors.message = 'Feedback message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handleSubmit function to handle form submission
    // It sends a POST request to the server with the form data
    const handleSubmit = async e => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            await axios.post(import.meta.env.VITE_SUBMIT_FEEDBACK_URL, form);
            setForm({ name: '', email: '', message: '' });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            alert('Submission failed: ' + error.message);
        }
        setTimeout(() => {
            setLoading(false);
        }, 200);
    };

    return (
        <div className={`bg-gray-100 text-gray-900 dark:text-gray-100 transition-all duration-500 p-3 flex flex-col items-center ${darkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
            <div className="w-full flex justify-center max-w-[85rem] px-4 py-1 sm:px-6 lg:px-8 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-md rounded p-3 transition-all duration-300 flex flex-col items-center"
                >
                    <h4 className="text-3xl font-bold mb-4 text-center">We’d Love to Hear From You</h4>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-all duration-300"
                    >
                        <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className={`mb-1 w-full px-3 py-2 border rounded transition-all duration-300 ${
                                success ? 'border-green-500' : 'border-gray-300'
                            } dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

                        <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className={`mb-1 w-full px-3 py-2 border rounded transition-all duration-300 ${
                                success ? 'border-green-500' : 'border-gray-300'
                            } dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

                        <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">Feedback</label>
                        <textarea
                            name="message"
                            placeholder="Your feedback"
                            value={form.message}
                            onChange={handleChange}
                            className={`mb-1 w-full px-3 py-2 border rounded transition-all duration-300 ${
                                success ? 'border-green-500' : 'border-gray-300'
                            } dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center"
                        >
                            {loading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                'Submit'
                            )}
                        </button>

                        <div className="h-6 mt-3 flex items-center justify-center">
                            <AnimatePresence>
                                {success && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-green-500 font-medium text-center text-sm"
                                >
                                    Thank you for your feedback!
                                </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </form>

                    <Link to="/feedback" className="mb-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        View Submitted Feedback
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Form;
