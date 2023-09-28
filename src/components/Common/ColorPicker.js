'use strict';

import Image from 'next/image';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState("#fff");
    
    console.log(color , "adsdasdasdas")
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };
    const handleChange = (newColor) => {
        setColor(newColor.hex);
    };
    const popover = {
        position: 'absolute',
        zIndex: '2',
    };

    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    };

    return (
        <div className='flex items-center'>
            <input className='border-neutral-300' value={color} />
            <button onClick={handleClick} className='px-3 flex items-center justify-center  w-[50px] h-[42px] py-2 bg-[#f7f7f7]'>
                <Image src="/assets/color.png" width={15} height={15} />
            </button>
            {displayColorPicker ? (
                <div style={popover}>
                    <div style={cover} onClick={handleClose} />
                    <ChromePicker color={color} onChange={handleChange} />
                </div>
            ) : null}
        </div>
    );
};

export default ColorPicker;
