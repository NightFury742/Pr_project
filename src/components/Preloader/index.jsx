import Lottie from 'lottie-react';
import preloaderAnimation from '../../animations/preloaderAnimation.json';
import { Box } from '@chakra-ui/react';

function Preloader() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Lottie animationData={preloaderAnimation} />
      </Box>
    </Box>
  );
}

export default Preloader;
