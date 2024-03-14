import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='border-r bg-sky-600 border-slate-500 p-4 flex flex-col'>
      {/* to search for the conversation */}
      <SearchInput />
      <div className='divider px-3'></div>
      {/* the actual sidebar that shows  all conversations */}
      <Conversations />
      <LogoutButton />
    </div>
  )
}
export default Sidebar

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
