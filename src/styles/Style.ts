import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { alpha } from "@mui/material/styles";

export const navStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchBar: {
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: "3em",
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "12ch",
          "&:focus": {
            width: "20ch",
          },
        },
      },
    },
    searchIconWrapper: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    appBar: {
      background: "#282424",
      "& > .MuiPaper-elevation4": {
        boxShadow: "10px",
      },
    },
    toolBar: {
      justifyContent: "space-between",
    },
    group: {
      display: "flex",
      alignItems: "center",
    },
    inboxIcon: {
      marginLeft: "1rem",
      "& :hover": {
        color: theme.palette.primary.main,
      },
    },
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "27%",
      backgroundColor: theme.palette.background.default,
      boxShadow: "24",
      borderRadius: "10px",
      p: 4,
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },
  })
);

export const stepStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      background: "#36393f",
      borderRadius: "10px",
      padding: "1rem",
      transition: "all 0.2s",
    },
    notask: {
      height: "88vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      transition: "all 0.2s",
    },
    filter: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "1rem",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "start",
      },
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        transition: "all 0.2s",
        fontSize: "1.6rem",
      },
    },
    root: {
      height: "69vh",
      [theme.breakpoints.down("xs")]: {
        transition: "all 0.2s",
        height: "65vh",
      },
    },
    inputField: {
      display: "flex",
      justifyContent: "space-between",
      transition: "all 0.2s",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        marginTop: "1rem",
      },
    },
    container: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    text_: theme.typography.h6,
    formControlLabel: {
      ...theme.typography.caption,
      fontSize: "1rem",
    },
    reminders: {
      background: "#2f3136",
      height: "10vw",
      marginBottom: "2rem",
      borderRadius: "10px",
      maxWidth: "90vw",
      display: "flex",
      [theme.breakpoints.down("md")]: {
        height: "fit-content",
      },
    },
  })
);

export const tagInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5, 0.25),
    },
    scrollbar: {
      display: "flex",
      maxWidth: "80vw",
      marginBottom: "0.5rem",
      borderRadius: "10px",
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        height: "0.1rem",
      },

      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "#5865f2",
        outline: "1px solid slategrey",
      },
    },
  })
);

export const popperStyle = makeStyles((theme: Theme) =>
  createStyles({
    popper: {
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "0.1rem",
        backgroundColor: "#5865f2",
      },

      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
  })
);

export const scrollStyle = makeStyles((theme: Theme) =>
  createStyles({
    scroll: {
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        height: ".2rem",
        width: ".3rem",
      },

      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "#d7d8e0",
        outline: "1px solid slategrey",
      },
    },
    title: {
      color: "#fff",
      width: "10vw",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    notasks: {
      width: "100%",
      color: "#fff",
    },
  })
);

export const todoModalStyle = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      backgroundColor: "#28282b",
      boxShadow: "24",
      borderRadius: "4px",
      padding: "4rem",
      [theme.breakpoints.down("xs")]: {
        padding: ".5rem",
        width: 300,
      },
    },
    input: {
      "& .MuiFilledInputInput": {
        color: theme.palette.secondary.main,
      },
    },
  })
);

export const dashboardStyles = makeStyles((theme) => ({
  settings: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  anchor: {
    textDecoration: "none",
    "&:active": {
      textDecoration: "none",
    },
  },
}));

export const userModalStyle = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 300,
      backgroundColor: "#28282b",
      boxShadow: "24",
      borderRadius: "4px",
      padding: "1rem",
    },
    input: {
      "& .MuiFilledInputInput": {
        color: theme.palette.secondary.main,
      },
    },
  })
);

export const loginStyles = makeStyles((theme: Theme) =>
  createStyles({
    login: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    login__form: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      backgroundColor: "#2f3136 !important",
      padding: "2rem",
      margin: "0 1rem 0 1rem",
      borderRadius: "10px",
      [theme.breakpoints.down("sm")]: {
        padding: "1rem",
      },

      "& > h1": {
        fontSize: "35px",
        marginBottom: "15px",
        paddingBottom: "10px",
        textAlign: "center",
        fontWeight: 600,
        color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
          fontSize: "20px",
        },
      },

      "& > label ": {
        marginBottom: "1rem",
        fontSize: "1.2rem",
        fontWeight: "600",
        color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
          marginBottom: "0.5rem",
        },
      },

      "& > input": {
        padding: "17px 0",
        paddingLeft: "13px",
        marginBottom: "10px",
        outline: "none",
        border: "1px solid rgba(0, 0, 0, 0.24)",
        borderRadius: theme.shape.borderRadius,
        fontSize: "15px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px",
          marginBottom: "0.5rem",
          padding: "10px 0 10px 5px",
        },
      },
    },
    linearWipe: {
      background:
        "linear-gradient(to right, #97A9B4 20%, #5865f2 40%, #5865f2 60%, #97A9B4 80%)",
      backgroundSize: "200% auto",
      backgroundClip: "text",
      textFillColor: "transparent",
      animation: "$shine 1s linear infinite",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "@keyframes shine": {
      to: {
        backgroundPosition: "200% center",
      },
    },
    btn__group: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    submit__btn: {
      fontWeight: 400,
      "& :hover": {
        color: theme.palette.secondary.main,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
    error_text: {
      color: theme.palette.error.main,
      margin: "0",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  })
);

export const homeStyles = makeStyles((theme) => ({
  root: {
    background: "#1d1e1f",
    height: "100vh",
  },
  login: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  svg: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
