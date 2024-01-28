import React, { useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginPage = () => {
    const router = useRouter();
    const { data } = router.query;

    useEffect(() => {
        if (data) {
            toast.success(data);
        }

        const token = localStorage.getItem('token');

        if (token != null) {
            router.push('/admin/dashboard');
        }
    }, [data, toast, router]);

    const initialValues = {
        email: '',
        password: '',
    };

    const loginSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/api/user/login', values);

                if (response.status === 200) {
                    toast.success(response.data.message);

                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', JSON.stringify(response.data.user.token));

                    router.push('/admin/dashboard');
                } else {
                    toast.error('Invalid email or password');
                }
            } catch (error) {
                console.error('API Error:', error.response.data);
                toast.error('An error occurred during login');
            }
        },
    });

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md border bg-white p-8">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                    }`}
                                placeholder="Enter your email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                    }`}
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center mt-5">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <span className="mx-4 text-gray-600 text-sm font-semibold">Or continue with</span>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>

                <div className='flex justify-center gap-4 my-5'>
                    <button type="button" class="text-gray-800 border bg-white hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                        </svg>
                        Google
                    </button>
                    <button type="button" class="text-gray-800 border bg-white hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        Github
                    </button>

                </div>
                <p className="mt-5 text-center text-sm text-gray-500">
                    Haven't a acoount?{' '}
                    <Link href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
