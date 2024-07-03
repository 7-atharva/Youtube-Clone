import React from 'react';

import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { BsFire } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiTrophy } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdPodcasts } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

import { useSelector } from 'react-redux';

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subsription"
  },
  {
    icons: <SiYoutubemusic size="24px" />,
    title: "Youtube Music"
  },
 <hr />,
  {
    icons: <BsFire size="24px" />,
    title: "Trending"
  },
  {
    icons: <IoMusicalNoteOutline size="24px" />,
    title: "Music"
  },
  {
    icons: <BiSolidMoviePlay size="24px" />,
    title: "Movies"
  },
  {
    icons: <FaTowerBroadcast size="24px" />,
    title: "Live"
  },
  {
    icons: <SiYoutubegaming size="24px" />,
    title: "Gaming"
  },
  {
    icons: <IoNewspaperOutline size="24px" />,
    title: "News"
  },
  {
    icons: <GiTrophy size="24px" />,
    title: "Soprts"
  },
  {
    icons: <FaRegLightbulb size="24px" />,
    title: "Courses"
  },
  {
    icons: <MdPodcasts size="24px" />,
    title: "Podcasts"
  },
  {
    icons: <LiaShoppingBagSolid size="24px" />,
    title: "Shopping"
  },
  {
    icons: <CiSettings size="24px" />,
    title: "Settings"
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subsription"
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subsription"
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts"
  },
];

const Sidebar = () => {
  const open = useSelector((state) => state.app.open);
  
  return (
    <div className={`relative left-0 ${open ? 'w-[18%]' : 'w-[6%]'} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
      {
        sidebarItem.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center my-1 cursor-pointer hover:bg-black hover:text-white p-1 rounded-md transition-colors duration-200"
          >
            {item.icons}
            <p className={`ml-5 ${open ? '' : 'hidden'}`}>{item.title}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Sidebar;
