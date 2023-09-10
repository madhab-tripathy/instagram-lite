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
      // flexDirection:"column"
   },
   loginHero:{
      // width:"500px",
      // height:"560px",
      
      
   },
   imageBox:{
      height:"90%",
      width:"90%",
      // margin:"0 50px",
   },
   loginGrid:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems: "center",
      
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
      // height:"60px",
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
      justifyContent:"space-around",
      alignItems:"center",
      flexDirection:"column",
   }




}));

export default useStyles;