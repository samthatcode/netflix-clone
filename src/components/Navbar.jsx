import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute  ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer hover:shadow-lg">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 hover:shadow-lg">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white font-medium hover:shadow-lg"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 hover:shadow-lg">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white font-medium hover:shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
