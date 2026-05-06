import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import InternCard from '../components/InternCard';
export default function Interns(){const interns=useAppStore(s=>s.interns); const [q,setQ]=useState(''); const filtered=interns.filter(i=>i.name.toLowerCase().includes(q.toLowerCase())); return <div><div className='glass p-3 mb-4'><input className='bg-transparent w-full outline-none' placeholder='Search interns...' value={q} onChange={e=>setQ(e.target.value)} /></div><div className='grid md:grid-cols-3 gap-4'>{filtered.map(i=><InternCard key={i.id} intern={i}/> )}</div></div>}
