import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme)=>({

   loginScreen:{
      
   },
   loginBox:{
      // backgroundColor:"red",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      columnGap:"30px"
      // flexDirection:"column"
   },
   loginHero:{
      // width:"560px",
      // height:"560px",
      position:"relative",
      
   },
   imageBox:{
      height:"100%",
      width:"100%",
   },
   loginGrid:{
      display:"flex",
      flexDirection:"column",
      rowGap:"20px",
   },
   formCard:{
      width:"350px",
      height:"360px",
      border: "1px solid #ccc",
      boxShadow:"none",
      borderRadius:"0",
   },
   bottomCard:{
      width:"350px",
      height:"70px",
      border: "1px solid #ccc",
      boxShadow:"none",
      borderRadius:"0",

   },
   appAdvertise:{
      width:"350px",
      height:"90px"
   },
   cardLogo:{
      height:"60px"
   },
   cardContent:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",

   }



}));

export default useStyles;