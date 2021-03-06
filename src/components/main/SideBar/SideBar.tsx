import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { drawerWidth } from "../../../utils/constants";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CustomScrollbars from "../../ui/CustomScollBars";
import TagIcon from "@mui/icons-material/Tag";
import SettingsIcon from "@mui/icons-material/Settings";
import { dashboardStyles } from "../../../styles/Style";
import { TextField, Typography } from "@material-ui/core";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Chip,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  Divider,
} from "@mui/material";
import { getUserState } from "../../../store/user-slice";
import { getAllTodo } from "../../../store/todo-slice";
import { useAppSelector } from "hooks/useHooks";
import Logo from "components/svgs/Logo";

interface SideBarProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  setOpenUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  changeContentHandler: (title: string, id: number) => void;
  openModalHandler: (id: number) => void;
  createTodoHandler: (e: React.FormEvent) => void;
  Todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  window?: any;
}

// Sidebar Component
export const SideBar: React.FC<SideBarProps> = (props) => {
  const { window } = props;
  const classes = dashboardStyles();
  const userState = useAppSelector(getUserState);
  const Todos = useAppSelector(getAllTodo);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <a
        href="https://cvwo-groups-and-steps-user-guide.netlify.app/"
        className={classes.anchor}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            margin: ".5rem",
            backgroundColor: "#e3e3e3",
            borderRadius: "10px",
            padding: ".5rem",
            color: " #5865f2",
          }}
        >
          <Logo />
          <Typography variant="h6" style={{ fontWeight: 500 }}>
            Groups and Steps
          </Typography>
        </Box>
      </a>
      <Divider>
        <Chip label="USER" />
      </Divider>
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={userState?.currUser?.name} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={userState?.currUser?.email} />
        </ListItem>
        <ListItem
          style={{
            background: "#2e3747",
            color: "#fff",
            width: "auto",
            borderRadius: "10px",
            margin: ".5rem",
          }}
          button
          onClick={() => props.setOpenUserModal(true)}
        >
          <ListItemIcon>
            <LogoutIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>

      <Divider>
        <Chip label="GROUP" />
      </Divider>
      <CustomScrollbars
        style={{ height: "50vh" }}
        // @ts-ignore
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      >
        <List>
          {Todos.map((Todo) => (
            <ListItem
              button
              onClick={props.changeContentHandler.bind(
                null,
                Todo.title,
                Todo.id
              )}
              key={Todo.id}
              style={{
                background: "#e3e3e3",
                width: "auto",
                borderRadius: "5px",
                margin: ".4rem",
                justifyContent: "space-around",
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <TagIcon />
              </ListItemIcon>
              <ListItemText primary={Todo.title} />
              <ListItemIcon
                style={{
                  justifyContent: "end",
                  fontSize: "10px",
                  minWidth: "35px",
                }}
              >
                <SettingsIcon
                  className={classes.settings}
                  onClick={props.openModalHandler.bind(null, Todo.id)}
                  fontSize="small"
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </CustomScrollbars>
      <Divider>
        <Chip label="ADD GROUP" />
      </Divider>
      <List>
        <TextField
          style={{ margin: "2rem 0 0 1rem" }}
          // @ts-ignore
          component="form"
          size="medium"
          value={props.Todo}
          onChange={(e) => props.setTodo(e.target.value)}
          onSubmit={props.createTodoHandler}
          placeholder="Add group"
          variant="standard"
          InputProps={{
            color: "primary",
            style: { color: "black", fontSize: "1.1rem" },
          }}
        />
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            height: "100vh",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100vh",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
