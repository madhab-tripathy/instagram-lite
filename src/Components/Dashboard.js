import React, {useState,useEffect, useContext} from 'react';
import {Outlet,useNavigate,Link} from 'react-router-dom';
import TokenContext from '../Context/TokenContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UploadImage from './UploadImage';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Dashboard = ()=>{
    const [name,setName] = useState("");
    const [zuku,setZuku] = useState("");
    
    let {token,setToken} = useContext(TokenContext);
    const [uploadedImages, setUploadedImages] = useState([]);

    // Callback function to receive uploaded image links
    const addImageToDashboard = (imageLink) => {
      // Update the uploadedImages state with the new image link
      setUploadedImages([...uploadedImages, imageLink]);
    };
  
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        navigate('upload');
    };
  
    const handleClose = () => {
        setOpen(false);
        navigate('/dashboard')
    };
    useEffect(()=>{
        if(!token){
            setToken(localStorage.getItem("token"));
        }
    },[])
    useEffect(()=>{
        if(token){
            axios.get('https://instagram-express-app.vercel.app/api/auth/zuku',{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            })
            .then(response => {
                setName(response.data.data.user.name);
                setZuku(response.data.data.message);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },[token]);

    async function kickOut(){
        try{
            const resposne =  await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout" , {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
                localStorage.removeItem("token")
                setToken(null)
                console.log("Logout done")
                setName("")
                setZuku("")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
        }
        catch(err){
            console.log(err)
        }
    }
    // console.log(setImages);
    return(
        <div>
            <h1>Hello {name}</h1>
            <h1>Your Zuku {zuku}</h1>

            <Button variant="outlined" onClick={kickOut} color="error">Logout</Button>
            <Button variant="outlined" onClick={handleClickOpen}>
                {/* {true&&<Link to="upload" style={{textDecoration:'none', color:'#1976d2'}}>Upload</Link>} */}
                Upload
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upload Image</DialogTitle>
                <DialogContent >
                    <DialogContentText style={{marginBottom:"20px"}}>
                        To upload an image in your image gallary, please select and upload your image file here.
                    </DialogContentText>
                    <UploadImage addImageToDashboard={addImageToDashboard} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            {/* Display uploaded images from state */}
                <ImageList sx={{ width: "100%", height: 300 }} cols={3} rowHeight={164}>
                    {uploadedImages.map((item) => (
                        <ImageListItem key={item}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            alt=""
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
        </div>
    );  
}

export default Dashboard;