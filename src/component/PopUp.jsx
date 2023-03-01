import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tag from './Tag';
import { saveAs } from 'file-saver'

const PopUp = ({open,setOpen,imageId}) => {
    const YOUR_ACCESS_KEY=process.env.REACT_APP_YOUR_ACCESS_KEY 
    const [img,setImg] = useState(null)
    const [downloadStatus,setDownloadStatus] = useState("Download Image")
    const downloadImage = () => {
        saveAs(img.links.download, img.description+'.jpg')
    }
    const download = async() => {
        const originalImage=img.links.download;
        const image = await fetch(originalImage);
       
        //Split image name
        const nameSplit=originalImage.split("/");
        const  duplicateName=nameSplit.pop();
       
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL;
        link.download = ""+duplicateName+"";
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)  
       };
    useEffect(()=>{
        if(open && !img){
            axios.get(`https://api.unsplash.com/photos/${imageId}/?client_id=${YOUR_ACCESS_KEY}`)
            .then(res=>{
                setImg(res.data)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[open])
  return (
    <Dialog
        className=' bg-transparent'
        open={open}
        onClose={setOpen}
    >
        <div className='px-5 bg-transparent'>
        <div className='flex justify-end text-2xl rounded-2xl'>
            <div className=' flex justify-center items-center rounded-2xl w-7 h-7 border border-slate-900 relative top-5 left-2 cursor-pointer' onClick={setOpen}>X</div>
        </div>
        <div className=''>
            {
                img &&<div>
                    <div className='flex flex-col h-min'>
                        <img className=' rounded-t-2xl ' src={img.urls.small} alt={img.alt_description} />
                        <div className='flex justify-between text-white items-center relative bottom-16 text-xs'>
                            <div className='flex'>
                                <div className='border border-white rounded-md mx-2 p-1 cursor-pointer'><ShareOutlinedIcon/>Share</div>
                                <div className='border p-1 border-white rounded-md cursor-pointer'><InfoOutlinedIcon/>Info</div>
                            </div>
                            <button className='cursor-pointer bg-[#3CB46E] mx-1 px-5 py-3 w-1/3 rounded' onClick={downloadImage}>{downloadStatus}</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='flex items-center'>
                                    <img src={img.user.profile_image.small} className='h-10 rounded-3xl aspect-square' alt={img.user.first_name}/>
                                    <div>
                                        <div>{img.user.first_name+img.user.last_name}</div>
                                        <div>@{img.user.username}</div>
                                    </div>
                                </div>
                                {
                                    img?.user?.instagram_username && <div><InstagramIcon/>/{img?.user?.instagram_username}</div>
                                }
                                {
                                    img?.user?.twitter_username && <div><TwitterIcon/>/{img?.user?.twitter_username}</div>
                                }
                            </div>
                            <div className='flex items-center'>
                                <div>{img.downloads>1000?(img.downloads/1000+'K'):img.downloads} downloads</div>
                                <div><ThumbUpAltOutlinedIcon/> {img.likes}</div>
                            </div>
                        </div>
                        <div>
                            <div>Related Tags</div>
                            <div className='flex w-full flex-wrap'>
                                {
                                    img.tags.map((tag,index)=>{
                                        return <Tag name={tag.title} key={index}/>
                                    })

                                }
                            </div>
                        </div>
                    </div>
            </div>
            }
        </div>
        </div>
    </Dialog>
  )
}

export default PopUp