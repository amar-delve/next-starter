import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import jwtDecode from 'jwt-decode';

const RegisterPage = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/api/user/register', values, {
                    withCredentials: true,
                });
                if (response.data.code === 201) {
                    toast.success(response.data.message);
                    router.push({
                        pathname: '/login',
                        query: { data: "Account Created Successfully" },
                    })
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('API Error:', error.response.data);
                toast.error(error.response.data.error);
            }
        },

    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <ToastContainer />
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Confirm your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-2">
                    Have already registered ?{' '}
                    <Link href="/login">
                        <span className="text-blue-500">Login here</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
