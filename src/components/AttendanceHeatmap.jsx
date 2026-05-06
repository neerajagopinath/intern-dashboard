import { Card } from './ui';
export default ()=> <Card><h3 className='font-medium mb-3'>Attendance Heatmap</h3><div className='grid grid-cols-14 gap-1'>{Array.from({length:70},(_,i)=><div key={i} className='h-4 rounded' style={{background:`rgba(99,102,241,${(i%5+1)/6})`}}/>)}</div></Card>;
