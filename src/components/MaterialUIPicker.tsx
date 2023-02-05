import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StyleCardUser } from './StyleCardUser';
import { DateTime } from 'luxon'
import  isBetween from 'dayjs/plugin/isBetween'
import { ButtonSearchDates } from './ButtonSearchDates';


interface MyString {
  createdAt?: string;
}

interface Props {
  datos?: MyString[];
  // datos?: MyString | "No hay valor";
}

export default function MaterialUIPicker({datos = []}: Props) {
 
  
  const [startDate, setStartDate] = React.useState<Dayjs | null>(
    dayjs('2020-08-18T21:11:54'),
    );
    
    const [endDate, setEndDate] = React.useState<Dayjs | null>(
      dayjs('2023-01-09T21:11:54'),
      );
    
    const formattedDateStart = startDate?.format('MMM D, YYYY h:mm A');
    const formattedDateEnd = endDate?.format('MMM D, YYYY h:mm A');


    const handleChangeStart = (newValue: Dayjs | null) => {
      setStartDate(newValue);
    };
    
    const handleChangeEnd = (newValue: Dayjs | null) => {
      setEndDate(newValue);
    };
    
    datos.forEach(dato => {
      const createdAt = dayjs(dato.createdAt);
      if(dato.createdAt){
        const date = DateTime.fromISO(dato.createdAt).toFormat('DD t');
        // console.log(date);
      }
      if (createdAt.isBetween(startDate, endDate) && (startDate && endDate) ) {
        // console.log(`${dato.createdAt} está entre ${startDate.format()} y ${endDate.format()}`);
      }
    });

    // console.log(typeof(startDate))
 
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
       
        <MobileDatePicker
          label="Start Date"
          inputFormat="MMM D, YYYY h:mm A"
          value={startDate}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField {...params} />}
        />
         <MobileDatePicker
          label="End Date"
          inputFormat="MMM D, YYYY h:mm A"
          value={endDate}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    <ButtonSearchDates startDate={formattedDateStart} endDate={formattedDateEnd} datos={datos}/>
    </>
  );
}