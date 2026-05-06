import { Card } from './ui';
export default ({items}) => <Card><h3 className='mb-3 font-medium'>Recent Activity</h3><div className='space-y-3'>{items.map((a,i)=><div key={i}><p className='text-sm'>{a.text}</p><p className='text-xs text-muted'>{a.t}</p></div>)}</div></Card>;
