import React from 'react'

const MainLoading = () => {
  return (
    <div className='flex-col pt-4 flex w-screen h-screen items-center'>
        <img src="./image/loading.png" alt="loading"/>
        <p className=' text-2xl text-[#A7A7A7] text-center'>
            Loading Some awesome Images...
        </p>
    </div>
  )
}

export default MainLoading