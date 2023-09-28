import React from 'react'
import Modal from '../Modal/Modal'
import { AiOutlineClose } from 'react-icons/ai'

const DeleteCategory = (props) => {

    return (
        <Modal isOpen={props.isOpen} className={"max-w-[800px]"} setIsOpen={props.setIsOpen}>
            <div>

                <div className='flex mb-7 items-center gap-3 justify-between'>
                    <h2 className='text-[20px]'>
                        What do you want to do with the products associated with this category?
                    </h2>
                    <button onClick={() => {
                        props.setIsOpen(false)
                    }}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div>
                    <div className='flex gap-2 mb-1 items-start'>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='mt-1.5' />
                        <label for="html" className='block text-[14px]'> If they have no other category, I want to associate them with the parent category and turn them offline. (Recommended)</label>
                    </div>
                    <div className='flex gap-2  mb-1 items-start'>
                    <input type="radio" id="css" name="fav_language" value="CSS" className='mt-1.5'  />
                        <label for="css" className='block text-[14px]'>  If they have no other category, I want to associate them with the parent category.</label>
                       
                    </div>
                    <div className='flex gap-2  mb-2 items-start'>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='mt-1.5'  />
                        <label for="javascript" className='block text-[14px]'> If they have no other category, I want to delete them as well.</label>
                    </div>
                    <p className='text-[12px]'>Note that if they have another category, your products will logically remain associated with it.
                    </p>
                    <div className='flex mt-6 items-center justify-end gap-3'>
                        <button onClick={() => props.setIsOpen(false)} className='border bg-white px-4 py-2'>
                            Cancel
                        </button>
                        <button className='border px-4 bg-red-600 border-red-600 text-white py-2'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteCategory