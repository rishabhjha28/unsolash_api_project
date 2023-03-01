import React from 'react'

const Tag = ({name}) => {
  return (
    <div className='text-[#4F4F4F] bg-[#ECECEC] text-xs rounded-sm px-3 py-2 mr-2 cursor-pointer my-1'>{name}</div>
  )
}

export default Tag