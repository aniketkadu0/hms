import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/homepage.css";

import Footer from "./Components/User/Footer";
import SignUpPage from "./Components/User/SignUpPage";
import AboutUs from "./Components/User/AboutUs";
import ImageGallery from "./Components/User/ImageGalley";
import ContactUs from "./Components/User/ContactUs";
import ForgotPassword from "./Components/User/ForgotPassword";
import ChangePassword from "./Components/User/ChangePassword";
import Signin from "./Components/User/Signin";
import SharedHomeLayout from "./Components/User/SharedHomeLayout";
import Home from "./Components/User/Home";

import AdminLogin from "./Components/Admin/AdminLogin";
import UpdateRoomQtyPrices from "./Components/Admin/UpdateRoomQtyPrices";
import StudentData from "./Components/Admin/StudentData";
import Complaints from "./Components/Admin/Complaints";
import AdminDashBoard from "./Components/Admin/AdminDashBoard";
import SharedAdminLayout from "./Components/Admin/SharedAdminLayout";
import HostelData from "./Components/Admin/HostelData";
import Notices from "./Components/Admin/Notices";
import AddNotice from "./Components/Admin/AddNotice";
import Notauthorised from "./Components/Notauthorised";

import SharedStudentLayout from "./Components/Student/SharedStudentLayout";
import StudentDashboard from "./Components/Student/StudentDashboard";
import AddPersonalDetails from "./Components/Student/AddPersonalDetails";
import CheckRoomAvailability from "./Components/Student/CheckRoomAvailability";
import PaymentDetails from "./Components/Student/PaymentDetails";
import AddConcern from "./Components/Student/AddConcern";
import Notice from "./Components/Student/Notice";
import Concerns from "./Components/Student/Concerns";
import PaymentGateway from "./Components/Student/PaymentGateway";
import PaymentSuccess from "./Components/Student/PaymentSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedHomeLayout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="gallery" element={<ImageGallery />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>

          <Route path="admin" element={<AdminLogin />} />

          <Route path="admindashboard" element={<SharedAdminLayout />}>
            <Route index element={<AdminDashBoard />} />
            <Route path="hosteldata" element={<HostelData />} />
            <Route
              path="updateroomqtyprices"
              element={<UpdateRoomQtyPrices />}
            />
            <Route path="studentdata" element={<StudentData />} />
            <Route path="complaints" element={<Complaints />} />
            <Route path="notices" element={<Notices />} />
            <Route path="addnotice" element={<AddNotice />} />
          </Route>

          <Route path="studentdashboard" element={<SharedStudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="addpersonaldetails" element={<AddPersonalDetails />} />
            <Route path="checkroom" element={<CheckRoomAvailability />} />
            <Route path="paymentdetails" element={<PaymentDetails />} />
            <Route path="addconcern" element={<AddConcern />} />
            <Route path="notice" element={<Notice />} />
            <Route path="concerns" element={<Concerns />} />
          </Route>
          
          <Route path="paymentgateway" element={<PaymentGateway />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/notauthorised" element={<Notauthorised />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
