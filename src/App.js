import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignIn from './components/Auth/SignIn/SignIn';
import Users from "./components/Users/Users";
import User from "./components/Users/User/User";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
