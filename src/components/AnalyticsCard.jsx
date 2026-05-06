import { Card } from './ui';
export default ({title,value,delta}) => <Card><p className='text-muted text-sm'>{title}</p><h3 className='text-2xl font-semibold mt-1'>{value}</h3><p className='text-xs text-emerald-400 mt-1'>{delta}</p></Card>;
