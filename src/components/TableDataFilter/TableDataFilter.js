import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import { LiaSave } from 'react-icons/lia';
const day = [{
    id: 1,
    name: 'Day',
    value: 'day',
},
{
    id: 2,
    name: 'Month',
    value: 'month',
},
{
    id: 3,
    name: 'Year',
    value: 'year',
},
{
    id: 4,
    name: 'Day-1',
    value: 'day-1',
},
{
    id: 5,
    name: 'Month-1',
    value: 'month-1',
},
{
    id: 6,
    name: 'Year-1',
    value: 'year-1',
},
]


const TableDataFilter = () => {
    const [tab, setTab] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (

        <input type='text' value={value} className="border-none max-w-[110px]" onClick={onClick} ref={ref} />



    ));
    return (
        <div className='border flex flex-wrap p-4 gap-4 items-start bg-white'>
            <div className='divide-x border '>

                {
                    day.map((item, index) => {
                        return (
                            <button className={`${tab === item.id ? 'text-white bg-[#1d1d1b]' : 'text-[#1d1d1b] hover:text-white hover:bg-[#61615f]'} px-3 py-2 text-[12px] `} onClick={() => setTab(item.id)}>
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
            <div className='flex gap-8 items-center'>
                <div className='flex border '>
                    <span className='text-gray-600 border-r px-4 py-2.5  bg-[#f7f7f7]  text-[12px]  '>
                        From
                    </span>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        customInput={<ExampleCustomInput />}
                    />
                </div>
                <div className='flex border '>
                    <span className='text-gray-600 border-r px-4 py-2.5  bg-[#f7f7f7]  text-[12px]  '>
                        To
                    </span>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        customInput={<ExampleCustomInput />}
                    />
                </div>
            </div>
            <div>
                <button className='text-[12px] border flex items-center gap-1 px-[16px] py-[8px] text-[#1d1d1b]'>
                    <LiaSave />  Save
                </button>
            </div>
        </div>
    )
}

export default TableDataFilter