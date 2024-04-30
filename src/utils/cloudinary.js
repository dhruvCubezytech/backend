import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLUDINARY_CLOUD_NAME, 
  api_key: process.env.CLUDINARY_API_KEY, 
  api_secret: process.env.CLUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log('file is uploaded on cloudinary',response.url)
        // console.log(response)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log("hellors")
    }
}

export {uploadOnCloudinary}