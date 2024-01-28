import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/admin/Header';
import Sidebar from '../../../components/admin/Sidebar';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the user object from localStorage
        const data = localStorage.getItem('user');
        const user = JSON.parse(data);

        // Check if the token is present in the user object
        if (!user || !user.token) {
          // Redirect to the login page if the token is not available
          window.location.replace('/login');
          return;
        }

        // Fetch user data using the token
        const response = await axios.get('/api/user/verifyuser', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Header userData={userData} />
    <Sidebar />
    </>
  );
}
