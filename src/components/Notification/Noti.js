// ToastContainer.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast }) => (
  <div className="custom-toast">
    Welcome to the site!
  </div>
);

const notifyUser = () => {
  toast(<CustomToast />, {
    position: "top-right",
    autoClose: 5000,
  });
};

const Toast = () => {
  React.useEffect(() => {
    notifyUser();
  }, []);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ background: "#007bff", color: "#fff", fontWeight: '100%', }} // Custom toast style
      bodyClassName="custom-toast-body" // Add a class to the toast body for further styling
    />
  );
};

export default Toast;
