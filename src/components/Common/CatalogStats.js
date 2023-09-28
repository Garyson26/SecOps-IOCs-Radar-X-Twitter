import React from 'react'

const CatalogStats = (props) => {
  return (
  <div className='px-[15px] flex justify-between items-center py-[10px]'>
    <span className='text-[#555] text-[12px]'>{props?.title}</span>
    <span className='bg-[#25b9d7] rounded-full py-[1px] px-[5px] text-[12px] text-white font-medium'>
        {props.value}
    </span>
  </div>
  )
}

export default CatalogStats