import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface BackgroundWithLogoProps extends BoxProps {
  backgroundImageUrl: string;
  
  children?: ReactNode;
}

const BackgroundWithLogo: React.FC<BackgroundWithLogoProps> = ({
  backgroundImageUrl,
  
  children,
  ...rest
}) => {
  return (
    <Box
      backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
      position="relative"
      {...rest}
    >
      <Box
        position="absolute"
        top="20px"
        left="20px"
        zIndex={1}
      >
       
      </Box>
      {children}
    </Box>
  );
};

export {BackgroundWithLogo};