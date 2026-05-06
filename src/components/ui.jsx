import { motion } from 'framer-motion';
export const Card = ({children,className=''}) => <motion.div whileHover={{y:-2}} className={`glass p-5 ${className}`}>{children}</motion.div>;
export const Skeleton = ({className=''}) => <div className={`animate-pulse bg-white/10 rounded-xl ${className}`} />;
