import { Card } from './ui';
export default ({items}) => <Card><h3 className='mb-3 font-medium'>Upcoming Deadlines</h3>{items.map((d,i)=><div key={i} className='flex justify-between text-sm py-1'><span>{d.name}</span><span className='text-amber-300'>{d.due}</span></div>)}</Card>;
