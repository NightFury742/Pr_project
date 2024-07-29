import DocNavbar from '../../components/DocNavbar';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Doctor() {
  return (
    <>
      <Sidebar />
      <DocNavbar />
      <Outlet />
    </>
  );
}

export default Doctor;
