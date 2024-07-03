import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API_KEY from '../constant/youtube';
import Avatar from 'react-avatar';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../utils/chatSlice';

const Watch = () => {
    const [input, setInput] = useState("");
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();


    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            
            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error);
        }
    }
    const SendMessage = () => {
        dispatch(setMessage({name:"Atharva ", message:input}));
        setInput("");
    }

    useEffect (() => {
        getSingleVideo();
    },[]);


  return (
    <div className='flex ml-4 w-[80%] mt-2'>
        <div className='flex w-[88%]'>
        <div>
      <iframe
        width="750"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
     </iframe>
        <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title} </h1>
        <div className='flex items-center justify-between'>
            <div className='flex justify-between items-center w-[35%]'>
                <div className='flex'>
                <Avatar
            src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            size={33}
            className="cursor-pointer"
            round={true}
          />
          <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                </div>
                <button className='px-4 py-1 font-medium bg-black text-white rounded-full'>Subscribe</button>
            </div>
            <div className='flex items-center w-[40%] justify-between mt-2'>
                <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                    <AiOutlineLike size={"20px"} className='mr-3'/>
                    <AiOutlineDislike size={"20px"}/>
                </div>
                <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                    <PiShareFatLight size={"20px"} className='mr-2' />
                    <span>Share</span>
                </div>
                <div className='flex item-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                    <GoDownload size={"20px"} className='mr-1'/>
                    <span>Download</span>
                </div>
            </div>
        </div>
        </div>
        
        <div className='w-[100%] border border-gray-300 ml-7 rounded-lg h-fit p-4'>
            <div className='flex items-center justify-between'>
                <h1>Top Chat</h1>
                <BsThreeDotsVertical/>
            </div>
            <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                <LiveChat/>
            </div>
            <div className='flex items-center justify-between border-t p-2'>
                <div className='flex items-center w-[90%]'>
                    <div>
                    <Avatar
            src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            size={33}
            className="cursor-pointer"
            round={true}/>
                    </div>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='border-b border-b-gray-300 outline-none ml-2' type="text" placeholder='Add a comment...' />
                    <div className='bg-gray-200 cursor-pointer p-2 rounded-full'>
                        <LuSendHorizonal onClick={SendMessage}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Watch
