import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/appSlice'

const buttonList = ["All", "Javascript", "Java", "Live", "Music", "React", "Programmig", "Vlogs", "Trending","Sports", "News", "Cricket", "Football", "New to you"]

const ButtonList = () => {
  const [active, setActive] = useState("All")
  const dispatch = useDispatch()
  const videoByTag = (tag) => {
    if(active != tag) {
      dispatch(setCategory(tag))
      setActive(tag)
    }
  }
  console.log(active);
  return (
    <div className='flex w-full overflow-x-scroll my-1 no-scrollbar'>
        {
          buttonList.map((buttonName, index) => {
            return(
            <div key={index}>

              <button onClick={() => {videoByTag(buttonName)}} className={`${active === buttonName ? "bg-slate-900 text-white" : "text-black"} bg-gray-200 font-medium mx-2 px-4 py-1 rounded-lg`}> <span className='whitespace-nowrap'>{buttonName}</span></button>
            </div>
            )
          })
        }
    </div>
  )
}

export default ButtonList
