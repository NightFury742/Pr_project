import SignupForm from '../../components/SignupForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const isVerified = localStorage.getItem('isVerified');
    if (!isVerified) {
      navigate('/verify');
      toast({
        title: 'Please Verify Your Account',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }
  }, []);

  return (
    <>
      <SignupForm />
    </>
  );
}

export default SignUp;
