import React, { useContext } from 'react'
import SearchContext from '../context/search/SearchContext'
import MainLoading from './MainLoading'
import SuccessSearch from './SuccessSearch'

const MainBody = () => {
  const imageLoading = useContext(SearchContext).searchImageStatus
  const images = useContext(SearchContext).searchImage
  if(imageLoading === 'searching'){
    return <MainLoading/>
  }
  else if(imageLoading === 'success' && images.length>0){
    return <SuccessSearch/>
  }
  else if(imageLoading === 'success'){
    return <div>Sorry No Data Found</div>
  }
  else{
    return <div className='flex justify-center'>Failed to search</div>
  }
}

export default MainBody