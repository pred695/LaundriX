import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PreLoader from './Animation/PreLoader';
import CheckoutPage from './pages/CheckoutPage';
import DumyPayment from './pages/DumyPayment';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import OrderList from './pages/OrderList';
import Signup from './pages/Signup';
import StudentDashBoard from './pages/DashBoard/Student';
import useAuthStore from './components/Store/AuthStore';
import LaundererDashboard from './pages/DashBoard/Launderer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { userRole } = useAuthStore((state) => ({
    userRole: state.userRole,
  }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoading ? <PreLoader /> : <LandingPage />} />
      <Route
        path="/OrderList"
        element={<OrderList />}
        // element={isLoading ? <PreLoader /> : <OrderList />}
      />
      <Route
        path="/CheckoutPage"
        element={<CheckoutPage />}
        // element={isLoading ? <PreLoader /> : <CheckoutPage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<DumyPayment />} />
      <Route
        path="/dashboard"
        element={
          userRole === 'student' ? <StudentDashBoard /> : <LaundererDashboard />
        }
      />
    </Routes>
  );
}

export default App;
