import './App.css';
import Landing from './pages/Landing';
import Doctor from './pages/Doctor';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Prescribe from './components/Prescribe';
import Prescriptions from './components/Prescriptions';

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
