import { Card } from './ui';
export default function ChartCard({title,children}){return <Card className='h-full'><h3 className='font-medium mb-4'>{title}</h3>{children}</Card>}
