import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
// import LoginComponent from './Components/LoginComponent';
// import RegisterComponent from './Components/RegisterComponent';
// import ContactComponent from './Components/ContactComponent';
// import DashComponent from './Components/DashComponent';
// import OrderComponent from './Components/OrderComponent';
// import AdminOrderComponent from './Components/AdminOrderComponent';
import PrivateRoute from "./routes/PrivateRoute";
import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import ContactScreen from "./screens/ContactScreen";
import UserHomeScreen from "./screens/UserHomeScreen";
import AdminHomeScreen from "./screens/AdminHomeScreen";
import ComplaintScreen from "./screens/ComplaintScreen";
import UserContactScreen from "./screens/UserContactScreen";
import UserDashBoardScreen from "./screens/UserDashBoardScreen";
import UserPendingScreen from "./screens/UserPendingScreen";
import UserCompletedScreen from "./screens/UserCompletedScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<RegisterScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/userhome" element={<UserHomeScreen />} />
          <Route path="/complaint" element={<ComplaintScreen />} />
          <Route path="/usercontact" element={<UserContactScreen />} />
          <Route path="/dashboard" element={<UserDashBoardScreen />} />
          <Route path="/pending" element={<UserPendingScreen />} />
          <Route path="/completed" element={<UserCompletedScreen />} />
          <Route element={<AdminPrivateRoute />}>
            <Route path="/adminhome" element={<AdminHomeScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
