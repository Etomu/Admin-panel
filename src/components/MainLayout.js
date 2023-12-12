import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import {
  AiOutlineShoppingCart,  
} from 'react-icons/ai';
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { RiCouponLine } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { MdDashboardCustomize, MdLocalShipping } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaClipboardUser } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
        <h2 className="text-white fs-5 text-center py-3 mb-0">
        <span className="sm-logo">PEX</span>
            <span className="lg-logo">PEX Admin</span>
        </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <MdDashboardCustomize className="fs-4" />,
              label: 'Dashboard',
            },
            {
              key: "customers",
              icon: <FaUserFriends className="fs-4" />,
              label: 'Customers',
              children: [
                {
                  key: "list-customers",
                  icon: <FaClipboardUser className="fs-4" />,
                  label: "Customers List",
                },
              ]
            },
            {
              key: "Catalog",
              icon: <BsDatabaseFill className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
              ],
            },
            {
              key: "orders",
              icon: <MdLocalShipping className="fs-4" />,
              label: "Order",
              children: [
                {
                  key: "orders",
                  icon: <LiaShippingFastSolid className="fs-4" />,
                  label: "Orders",
                },
              ]
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "banner",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Banner",
                },
                {
                  key: "list-banner",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Banner List ",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupons",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
            {
              key: "inbox",
              icon: <MdForwardToInbox className="fs-4" />,
              label: "Inbox",
              children: [
                {
                  key: "chatbox",
                  icon: <IoIosChatboxes className="fs-4" />,
                  label: "Chatbox",
                },
                {
                  key: "maillist",
                  icon: <FaMailBulk className="fs-4" />,
                  label: "Mail Lists",
                },
              ]
            },
            {
              key: "settings",
              icon: <IoMdSettings className="fs-4" />,
              label: "Settings",
              children: [
                {
                  key: "signout",
                  icon: <FaSignOutAlt className="fs-4" />,
                  label: "Signout",
                },
              ]
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img 
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" 
                  alt="" 
                />
              </div>
              <div 
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0" >Mercy</h5>
                <p className="mb-0" >Tobiofegor@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </a>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>  
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;