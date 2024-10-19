import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'

interface SurveyData {
  name: string;
  age: string;
  country: string;
  luggage: string[];
  flightDate: Date | null;
  luggageValue: string;
}


const SurveyComponent: React.FC = () => {
  const [surveyData, setSurveyData] = useState<SurveyData>({
    name: '',
    age: '',
    country: '',
    luggage: [],
    flightDate: null,
    luggageValue: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
  };

  const handleLuggageChange = (values: string[]) => {
    setSurveyData({ ...surveyData, luggage: values });
  };

  const handleFlightDateChange = (date: Date | null) => {
    setSurveyData({ ...surveyData, flightDate: date });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(surveyData);
  };

  return (
    <Box w="xl" p={4} bg="white" borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={surveyData.name} onChange={handleInputChange} />
        </FormControl>

        <FormControl id="age" mb={4}>
          <FormLabel>Age</FormLabel>
          <Input type="number" name="age" value={surveyData.age} onChange={handleInputChange} />
        </FormControl>

        <FormControl id="country" mb={4}>
          <FormLabel>Country of Destination</FormLabel>
          <Select name="country" value={surveyData.country} onChange={handleInputChange}>
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </Select>
        </FormControl>

        <FormControl id="luggage" mb={4}>
          <FormLabel>Luggage</FormLabel>
          <CheckboxGroup value={surveyData.luggage} onChange={handleLuggageChange}>
            <Stack spacing={2}>
              <Checkbox value="Backpack">Backpack</Checkbox>
              <Checkbox value="Suitcase">Suitcase</Checkbox>
              <Checkbox value="Handbag">Handbag</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl id="flightDate" mb={4}>
          <FormLabel>Date of Flights</FormLabel>
          <DatePicker
            selected={surveyData.flightDate}
            onChange={handleFlightDateChange}
            dateFormat="yyyy-MM-dd"
            className="date-picker-input"
          />
        </FormControl>

        <FormControl id="luggageValue" mb={4}>
          <FormLabel>Estimated Value of Luggage</FormLabel>
          <Input type="number" name="luggageValue" value={surveyData.luggageValue} onChange={handleInputChange} />
        </FormControl>

        
      </form>
    </Box>
  );
};

export {SurveyComponent};