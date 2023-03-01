import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PopUp from './PopUp';

const ImageCard = ({image,likes, userFullName, userName,description,userImage,id}) => {
  const [open,setOpen] = useState(false)
  const handleClose = ()=>{
    setOpen(false)
  }
  console.log( "open = ",open)
  return (
    <div>
      <div className='rounded-lg border cursor-pointer mx-2 dark:text-[white] dark:bg-[#141414] my-2 w-max' onClick={()=>{setOpen(true)}}>
        <div>
          <img className='rounded-t-lg' src={image} alt={description}/>
        </div>
        <div className='flex justify-between px-3 py-4'>
          <div className='flex items-center'>
            <div><img className=' rounded-3xl' src={userImage} alt={userFullName}/></div>
            <div className='pl-2'>
              <p >{userFullName}</p>
              <p className=' font-semibold font-[#A7A7A7] text-xs'>@{userName}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <span><ThumbUpOffAltIcon/></span><span>{likes}</span>
          </div>
        </div>
      </div>
    <PopUp open = {open} setOpen = {handleClose} imageId = {id}/>
    </div>
  )
}

export default ImageCard