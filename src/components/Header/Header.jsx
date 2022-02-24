import React from "react";
import "./Header.css";
import { Menu, Dropdown, Checkbox, Button } from "antd";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";

const menu = (
  <Menu className="filter-options">
    <Menu.Item key='all'>
      <Checkbox>All</Checkbox>
    </Menu.Item>
    <Menu.Item key='paid'>
      <Checkbox>Paid</Checkbox>
    </Menu.Item>
    <Menu.Item key='pending'>
      <Checkbox>Pending</Checkbox>
    </Menu.Item>
  </Menu>
);

const Header = ({ count }) => {

  return (
    <div className="app__header">
      <div className="app__header-info">
        <div className="text-heading">Invoices</div>
        <p>There are {count} total invoices</p>
      </div>
      <div className="app__header-feature">
        <div className="app__header-filter">
          <Dropdown overlay={menu}>
            <p
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Filter <DownOutlined style={{ padding: "0 5px", margin: "0 10px" }} />
            </p>
          </Dropdown>
        </div>
        <div className="app__header-button">
          <Button type="primary" shape="round" style={{ background: "rgb(115, 93, 245)", borderColor: "white" }} >
            <PlusCircleOutlined />
            <span className="bold-text">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
