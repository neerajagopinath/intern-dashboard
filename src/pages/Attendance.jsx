import AttendanceHeatmap from '../components/AttendanceHeatmap';
import ChartCard from '../components/ChartCard';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { chart } from '../data/mockData';
export default ()=> <div className='grid lg:grid-cols-2 gap-4'><AttendanceHeatmap/><ChartCard title='Attendance Trend'><div className='h-72'><ResponsiveContainer><AreaChart data={chart}><XAxis dataKey='w'/><YAxis/><Tooltip/><Area dataKey='p' stroke='#22d3ee' fill='#22d3ee22'/></AreaChart></ResponsiveContainer></div></ChartCard></div>;
