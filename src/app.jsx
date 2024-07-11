import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import ProfileComponent from './pages/profile';
import NotFound from './pages/empty';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';
  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
