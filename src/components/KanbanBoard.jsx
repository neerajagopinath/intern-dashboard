import { kanban } from '../data/mockData';
import { Card } from './ui';
const cols=[['todo','Todo'],['inprogress','In Progress'],['review','Review'],['completed','Completed']];
export default ()=> <div className='grid md:grid-cols-4 gap-4'>{cols.map(([k,l])=><Card key={k}><h4 className='font-medium mb-3'>{l}</h4><div className='space-y-2'>{kanban[k].map(t=><div key={t.id} className='bg-white/5 rounded-xl p-3 text-sm'><p>{t.title}</p><p className='text-xs text-muted mt-1'>{t.priority} • {t.due}</p></div>)}</div></Card>)}</div>;
