import MessageContainer from '../../components/messages/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex  h-[100%] w-[100%] rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white bg-[#ffeded]'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}
export default Home
