import DocNavbar from '../../components/DocNavbar';
import Sidebar from '../../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

function Doctor() {
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      navigate('/login');
      toast({
        title: 'Please Login',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
  }, []);

  return (
    <>
      <Sidebar />
      <DocNavbar />
      <Outlet />
    </>
  );
}

export default Doctor;
