import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      marginLeft: 10,
      color: "#ffffff",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop:10,
    textAlign: "center",
  },
  section: {
    marginTop:10,
    marginBottom:10
  }
  
 
});

export default useStyles;
