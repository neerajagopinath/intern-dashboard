import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AIChatWidget from '../components/AIChatWidget';
export default function AppLayout(){return <div className='min-h-screen flex'><Sidebar/><main className='flex-1'><Navbar/><div className='p-4 md:p-6'><Outlet/></div></main><AIChatWidget/></div>}
