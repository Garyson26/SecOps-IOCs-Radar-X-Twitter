import Image from 'next/image'
import React from 'react'

const Status = (props) => {
  return (
    <div>
        {
          props?.value >= 0 && props?.value <= 300 ?
          <Image src="/assets/orange.png" width={16} height={16} />  :
          props?.value > 300 ?
          <Image src="/assets/green.png" width={16} height={16} /> :
          <Image src="/assets/red.png" width={16} height={16} />
        }
        {props.value}
    </div>
  )
}

export default Status
