import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router-dom";
import '../assests/CSS/AdminPannel.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin" },
  { name: "Customers", path: "/admin" },
  { name: "Orders", path: "/admin" },
  { name: "Total Earnings", path: "/admin" },
  { name: "Weekly Overview", path: "/admin" },
  { name: "Monthly Overview", path: "/admin" },
  { name: "Add Product", path: "/admin" },
];

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
    white: {
      main: "#fff"
    },
    orange: {
      main: "#ffdb0f"
    },
    background: {
      default: '',
      paper: "rgb(0, 0, 22)"
    },
  },
});

export default function AdminPannel() {
  const user = useSelector(selectUser);
  const email=user.user && user.user.email ? user.user.email :'Guest';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();

  const dashboardData = {
    weekSales: 25599,
    monthSales: 25599,
    yearSales: 25599,
    totalCustomers: 1000, 
    totalProductsSold: 500, 
    totalProductsLeft: 200, 
    newOrders: 20, 
    pendingOrders: 10, 
    revenuePerCustomer: 25.5, 
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        {["Account", "Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  
  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  height: "100%",
                  zIndex: (theme) => theme.zIndex.drawer + 2,
                },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1, padding: "16px" }}>
          <Toolbar />
          {/* Display data in an attractive format */}
          <div>
          <h2>Welcome, {email} 👋</h2>
            <div className="dashboard-data">
              <div className="dashboard-data-item">
                <h3>Total Sales of This Week</h3>
                <p>${dashboardData.weekSales}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Total Sales of This Month</h3>
                <p>${dashboardData.monthSales}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Total Sales of This Year</h3>
                <p>${dashboardData.yearSales}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Total Number of Customers</h3>
                <p>{dashboardData.totalCustomers}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Total Number of Products Sold</h3>
                <p>{dashboardData.totalProductsSold}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Total Number of Products Left</h3>
                <p>{dashboardData.totalProductsLeft}</p>
              </div>
              {/* Additional data */}
              <div className="dashboard-data-item">
                <h3>New Orders</h3>
                <p>{dashboardData.newOrders}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Pending Orders</h3>
                <p>{dashboardData.pendingOrders}</p>
              </div>
              <div className="dashboard-data-item">
                <h3>Revenue Per Customer</h3>
                <p>${dashboardData.revenuePerCustomer}</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
