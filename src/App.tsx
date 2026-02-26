import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import DataDeletion from './Pages/DataDeletion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/data-deletion" element={<DataDeletion />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
