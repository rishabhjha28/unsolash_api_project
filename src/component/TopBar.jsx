import React, { useState, useContext, useEffect } from 'react'
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import modeContext from '../context/mode/ModeContext';
import { alpha, styled } from '@mui/material/styles';
import SearchContext from '../context/search/SearchContext';
import SearchList from './SearchList';

const ModeSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: useContext(modeContext).mode?'#858484':'#fffff',
    '&:hover': {
      backgroundColor: alpha('#ffffff', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#ffffff',
    padding:'1px'
  },
}));
const TopBar = () => {
    const [search,setSearch] = useState("")
    const [isSearchFocused,setIsSearchFocused] = useState(false)
    const darkMode = useContext(modeContext).mode
    const setDarkMode = useContext(modeContext).setMode
    const searchData = useContext(SearchContext).search
    const searchList = useContext(SearchContext).searchList
    const image = useContext(SearchContext).searchImage
    
    useEffect(()=>{
      searchData(search,'collections')
    },[search])
    const onPressOfEnter = (code)=>{
      if(search && code ==='Enter'){
        searchData(search,'photos')
        setIsSearchFocused(false)
      }
    }
    useEffect(()=>{
      setIsSearchFocused(false)
    },[image])
  return (
    <div className='flex justify-center items-center py-7 text-xs bg-white dark:bg-[#232323] dark:text-white' >
        <div className='!text-3xl !font-pattaya !font-normal mr-16'>Image Gallery</div>
        <div className='w-1/5 flex-col mr-7'>
          <div className='dark:bg-[#4F4F4F] bg-[#FAFAFA] py-2 pl-2 rounded border-[#ECECEC] dark:border-[#858484] border flex justify-start items-center '>
              <span><SearchIcon className='text-[#C4C4C4]'/></span>
              <input className='bg-[#FAFAFA] dark:bg-[#4F4F4F] outline-none py-2 pr-3 pl-1 w-full !font-medium' type="search" name="search" onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search images here' value={search} onFocus={()=>{setIsSearchFocused(true)}} 
              onKeyDown={(e)=>{onPressOfEnter(e.code)}}
              onBlur={()=>{
                setTimeout(() => {
                  console.log('in onBlur')
                  setIsSearchFocused(false)
                }, 1000);
              }}
              />
          </div>
          <div className='absolute rounded-lg border bg-white dark:bg-[#4F4F4F] border-[#E5E5E5] mt-1 w-1/5'
          style={{visibility:isSearchFocused?"visible":"hidden"}}
          >
              <SearchList data={searchList} setSearch={setSearch}/>
          </div>
          </div>
        <div className='flex justify-center items-center'>
            <div className=' mr-9'>Explore</div>
            <div className=' mr-9'>Collection</div>
            <div className=' mr-20'>Community</div>
        </div>
        <div className='flex justify-center items-center'>
            <span>
                {darkMode?'Light Mode':'Dark Mode'}
            </span>
            <ModeSwitch name='darkMode' value = {darkMode} onClick={()=>{setDarkMode(!darkMode)}} />
            
        </div>
    </div>
  )
}

export default TopBar