import axios from 'axios'
import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchState = (props) => {
    const [searchCollectionStatus,setSearchCollectionStatus] = useState('searching')
    const [searchList,setSearchList] = useState([])
    const [searchImageStatus,setSearchImageStatus] = useState('searching')
    const [searchImage,setSearchImage] =useState([])
    const YOUR_ACCESS_KEY=process.env.REACT_APP_YOUR_ACCESS_KEY 
    const search =(value,what)=>{
        if(what==='photos'){
            setSearchImageStatus('searching')
        }
        else if(what==='collections'){
            setSearchCollectionStatus('searching')
        }
        axios.get(`https://api.unsplash.com/search/${what}/?client_id=${YOUR_ACCESS_KEY}&query=${value}`)
        .then(res=>{
            console.log(res.data.results)
            if(what==='photos'){
                setSearchImage(res.data.results)
                setSearchImageStatus('success')
            }
            else if(what==='collections'){
                setSearchList(res.data.results)
                setSearchCollectionStatus('success')
            }
        })
        .catch(err=>{
            if(what==='photos'){
                setSearchImageStatus('failed')
            }
            else if(what==='collections'){
                setSearchCollectionStatus('failed')
            }
            console.log(err)
        })
    }
  return (
    <SearchContext.Provider value={{searchCollectionStatus,search,searchList,searchImage,searchImageStatus}}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState