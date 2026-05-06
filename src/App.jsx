import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Interns from './pages/Interns';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Attendance from './pages/Attendance';
import Analytics from './pages/Analytics';
import Certificates from './pages/Certificates';
import Announcements from './pages/Announcements';
import Settings from './pages/Settings';

const pages = [
  ['dashboard', Dashboard],['interns', Interns],['projects', Projects],['tasks', Tasks],['attendance', Attendance],['analytics', Analytics],['certificates', Certificates],['announcements', Announcements],['settings', Settings],
];

export default function App() {
  return (
    <div className="dark bg-surface text-white min-h-screen">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            {pages.map(([path, Comp]) => <Route key={path} path={path} element={<Comp />} />)}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
