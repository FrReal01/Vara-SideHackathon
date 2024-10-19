import { 
  Center, 
  HStack, 
  VStack, 
} from "@chakra-ui/react";
import { 
  GreenColor,
  RedColor,
  YellowColor,
  TrafficLightReadState,
  SurveyComponent,
  BackgroundWithLogo
} from "@/components";


export const Home = () => {

  return (
    <div>
      <BackgroundWithLogo  backgroundImageUrl="WanderSure-2.png">
      <Center>
        <HStack>
          <VStack>
            <GreenColor />
          </VStack>
          <SurveyComponent />
        </HStack>
      </Center>
      </BackgroundWithLogo>
      </div>
    );
};