import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({ item }) => {
  return (
    <div className='flex items-center'>
      <div>
      <Avatar
            src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            size={25}
            className="cursor-pointer"
            round={true}
          />
      </div>
      <div className='flex items-center'>
        <h1 className='ml-2 font-bold text-sm'>{item.name} </h1>
        <p className='ml-2 py-2 text-sm'>{item.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
