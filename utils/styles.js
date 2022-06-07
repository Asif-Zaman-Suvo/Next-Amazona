import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      marginLeft: 10,
      color: "#ffffff"
    },
  },

  main: {
      minHeight:'80vh'
  },

  footer: {
      textAlign: 'center'
  },
  brand: {
    fontWeight:'bold',
    fontSize:"1.5rem"
  },
  grow:{
    flexGrow:1,
  }
});

export default useStyles;
