import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

import "./Navbar.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [avatarImage, setavatarImage] = useState('');
  const { currentUser, logout, getEmail } = useAuth();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError('Failed to Logout');
    }
  };

  useEffect(() => {
    const email = getEmail();
    setavatarImage(`https://ui-avatars.com/api/?name=${email}`);
  }, []);

  const userMenu = (
    <Menu>
      <Menu.Item key="home">
        <Link to="/" className="w-100 mt-3">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="update">
        <Link to="/update-profile" className="w-100 mt-3">
          Update Profile
        </Link>
      </Menu.Item>
      <Button block type="primary" onClick={handleLogout}  style={{ background: "rgb(115, 93, 245)" }}>
        Log Out
      </Button>

    </Menu>
  );

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <div className="app__navbar-logo-top" />
        <div className="app__navbar-logo-bottom" />
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div className="app__navbar-avatar-image">
        <Dropdown overlay={userMenu} trigger={["click"]}>
          <p style={{ margin: "auto 0"}} className="d-flex ant-dropdown-link w-100 justify-content-center align-items-center" onClick={(e) => e.preventDefault()}>
            <img src={avatarImage !== '' ?  avatarImage : avatar} alt="avatar" id="avatar"/>
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
