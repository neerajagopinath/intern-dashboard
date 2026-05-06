import { Card } from './ui';
export default ({intern}) => <Card className='p-4'><h4 className='font-medium'>{intern.name}</h4><p className='text-sm text-muted'>{intern.dept} • {intern.mentor}</p><div className='mt-2 h-2 rounded bg-white/10'><div className='h-2 rounded bg-indigo-400' style={{width:`${intern.progress}%`}}/></div></Card>;
