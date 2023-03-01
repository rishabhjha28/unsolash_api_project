import React, { useContext } from 'react'
import SearchContext from '../context/search/SearchContext'
import ImageCard from './ImageCard'

const SuccessSearch = () => {
    const images = useContext(SearchContext).searchImage
  return (
    <div className='flex flex-wrap justify-center items-center mt-5'>
        {
            images.map(image=>{
                return <ImageCard key = {image.id} likes = {image.likes} image = {image.urls.small} userFullName = {image.user.name} userName = {image.user.username} description = {image.description} userImage = {image.user.profile_image.small} id = {image.id}/>
            })
        }
    </div>
  )
}

export default SuccessSearch