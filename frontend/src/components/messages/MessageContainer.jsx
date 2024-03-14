import { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  //? useConversation is original store that holds all the values at the frontend, fetched from the backed 
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='w-[100%] flex flex-col'>
      <img
        src='chatbg.jpg'
        alt='Description of the image'
        className='h-[100%]  w-[100%] z-[-100] absolute bg-contain object-cover'
      />

      {!selectedConversation ? (
        <div className='flex items-center h-[100%] w-auto justify-center'>
          <NoChatSelected />
        </div>
      ) : (
        <>
          {/* Header */}
          <div className='bg-[#0EA4E8] px-4 py-2 mb-2'>
            <span className='text-white font-bold'>
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className=' flex items-center justify-center w-auto rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-[#191919] font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
