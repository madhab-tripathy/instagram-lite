
import React, { useState } from 'react';
import AWS from "aws-sdk";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import Dashboard from './Dashboard';
const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
`;
const UploadImage = ({ addImageToDashboard }) => {

    const [file, setFile] = useState("");

    // console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID)

    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY_ID,
        region: process.env.REACT_APP_AWS_REGION
    }) 

    async function uploadFile() {
        const s3 = new AWS.S3()
        let filename = `${Date.now()}-${file.name}`
        try{
            const response  =  await s3.putObject({
                Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
                Key: filename,
                Body: file,
                ContentType: file.type,
            }).promise();
            const imageLink = `https://accio-unstopable.s3.ap-south-1.amazonaws.com/${filename}`;
            // setImgLink({imageLink:[...imgLink.imageLink,`https://accio-unstopable.s3.ap-south-1.amazonaws.com/${filename}`]})
            // console.log(response)
            addImageToDashboard(imageLink);
        }
        catch(error){
            console.log(error.message)
        }
    }

    // console.log(imgLink);
    return(
        <div>
            <Stack direction="row" spacing={2}>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                    >
                    Upload Image
                    <VisuallyHiddenInput type="file" onChange={e => setFile(e.target.files[0])} />
                </Button>
                <Button variant="contained" onClick={uploadFile}>Upload</Button>
            </Stack>
            {/* {
            imgLink && <img src={imgLink.imageLink[0]} alt="uploaded" />
            } */}
        </div>
    )
}

export default UploadImage;