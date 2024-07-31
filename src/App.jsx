import './App.css';
import Landing from './pages/Landing';
import Doctor from './pages/Doctor';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Prescribe from './components/Prescribe';
import Prescriptions from './components/Prescriptions';
import PrintPreview from './components/PrintPreview';
import PrintPreview1 from './components/PrintPreview/PrintPreview1';
import PrintPreview2 from './components/PrintPreview/PrintPreview2';
import PrintPreview3 from './components/PrintPreview/PrintPreview3';
import Login from './pages/Login';
import Verify from './pages/Verify';
import SignUp from './pages/SignUp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3700);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Landing />} />
        <Route path="/doctor" element={isLoading ? <Preloader /> : <Doctor />}>
          <Route
            path="prescribe"
            element={isLoading ? <Preloader /> : <Prescribe />}
          />
          <Route
            path="prescriptions"
            element={isLoading ? <Preloader /> : <Prescriptions />}
          />
          <Route path="print" element={<PrintPreview />} />
          <Route path="print/2ad3" element={<PrintPreview1 />} />
          <Route path="print/332d" element={<PrintPreview2 />} />
          <Route path="print/4h2f" element={<PrintPreview3 />} />
          {/* add dynamic route for diffrent prescription */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
