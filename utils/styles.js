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
  }
});

export default useStyles;
