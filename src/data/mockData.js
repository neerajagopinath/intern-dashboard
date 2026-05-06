export const stats = [
  { title: 'Total Interns', value: 184, delta: '+12%' },
  { title: 'Active Projects', value: 26, delta: '+5%' },
  { title: 'Attendance Rate', value: '93.4%', delta: '+1.8%' },
  { title: 'Pending Tasks', value: 47, delta: '-9%' },
];
export const interns = Array.from({ length: 12 }, (_, i) => ({ id:i+1, name:["Ava Chen","Noah Kim","Liam Patel","Sophia Diaz"][i%4]+` ${i+1}`, dept:['Engineering','Design','Marketing'][i%3], status:['Active','On Leave','Review'][i%3], progress:55+(i*3%40), mentor:['R. Singh','D. Park','J. Miller'][i%3], skills:['React','SQL','Figma','Python'].slice(0, (i%4)+1)}));
export const activities = [{t:'2m ago',text:'Ava submitted API integration task'},{t:'15m ago',text:'Certificate generated for Summer Cohort'},{t:'1h ago',text:'Noah requested leave for Friday'}];
export const deadlines = [{name:'Mobile UX audit', due:'May 8'},{name:'Q2 Demo Day prep', due:'May 11'}];
export const chart = [{w:'Mon',p:62,t:20},{w:'Tue',p:74,t:24},{w:'Wed',p:81,t:27},{w:'Thu',p:76,t:22},{w:'Fri',p:88,t:31}];
export const dept = [{name:'Engineering',value:44},{name:'Design',value:23},{name:'Marketing',value:18},{name:'Ops',value:15}];
export const kanban = {todo:[{id:1,title:'Landing page QA',priority:'High',due:'May 8'}],inprogress:[{id:2,title:'Refactor analytics API',priority:'Med',due:'May 9'}],review:[{id:3,title:'Onboarding flow',priority:'Low',due:'May 10'}],completed:[{id:4,title:'Weekly report',priority:'Low',due:'May 5'}]};
