import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { StyleCardUser } from './StyleCardUser';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { DateTime } from 'luxon'

interface MyObject {
  createdAt: any;
  data: string;
  [key: string]: any;
}

interface Props {
  handleTabChange: MyObject[] ;
  rating?: number;
 
}


export default function DropDownMenu({handleTabChange}:Props) {
  const [value, setValue] = React.useState(1);
  const [showSearch, setShowSearch] = React.useState(false)
  const [showReset, setShowReset] = React.useState(true)

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


  const handleChange = (event:any, newValue:number) => {
    setValue(newValue);
  };

  // Filter by star 
  const filteredData5 = handleTabChange.filter(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return data.rating === 5;
  });

  const filteredData4 = handleTabChange.filter(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return data.rating === 4;
  });

  const filteredData3 = handleTabChange.filter(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return data.rating === 3;
  });

  const filteredData2 = handleTabChange.filter(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return data.rating === 2;
  });

  const filteredData1 = handleTabChange.filter(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return data.rating === 1;
  });

  // Display stars on the screen 

  const data5 = filteredData5.map(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return(
      <>
        <StyleCardUser data={data} obj={obj} />
      </>
    )
    
  });

  const data4 = filteredData4.map(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return(
      <StyleCardUser data={data} obj={obj}/>
    )
  });

  const data3 = filteredData3.map(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return(
      <StyleCardUser data={data} obj={obj}/>
    )
  });

  const data2 = filteredData2.map(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return(
      <StyleCardUser data={data} obj={obj}/>
    )
  });

  const data1 = filteredData1.map(obj => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    return(
      <StyleCardUser data={data} obj={obj}/>
    )
  });
  
  const FilterData = () => {
  
    const filteredData = filteredData5.filter(item => {
      let dayjsDateddd = dayjs(item.createdAt);
      const formattedDate = dayjsDateddd.format('MMM D, YYYY h:mm A');
      const dayjsDate = dayjs(formattedDate);
      
      if (dayjsDate.isAfter(startDate) || dayjsDate.isSame(startDate)) {
        if (dayjsDate.isBefore(endDate) || dayjsDate.isSame(endDate)) {
          return item
        }
      }
    });

    const filtrado = filteredData.map( (obj,index) => {
      const data = JSON.parse(obj.data.replace(/=>/g, ':'));
      return(
        <StyleCardUser data={data} obj={obj} key={index}/>
      )

      
    })

    return filtrado
    
  }

  const toggleSearch = () => {
    if(showReset){
      setShowReset(!showReset)
    }
    setShowSearch(true)
  }

  const toggleReset = () => {
    if(showSearch){
      setShowSearch(!showSearch)
    }
    setShowReset(true)
  }
  const ButtonSearch = () => {

    return(
      <Button 
      variant="contained" 
        sx={{
          display: 'block',
          margin: '1rem auto',
          padding: '.5rem 3rem',
        }}
        onClick={toggleSearch}
        >
        Search
      </Button>
    )
  }

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <TabContext 
        value={`${value}`}
        >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            >
            <Tab label="5 Star"  value="1" />
            <Tab label="4 Star" value="2" />
            <Tab label="3 Star" value="3" />
            <Tab label="2 Star" value="4" />
            <Tab label="1 Star" value="5" />
          </TabList>
        </Box>
        

        <TabPanel value="1">
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

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ButtonSearch />
        <Button 
          variant="contained" 
          sx={{
            display: 'block',
            margin: '1rem auto',
            padding: '.5rem 3rem',
          }}
          onClick={toggleReset}
        >
          RESET
        </Button>
        </Box>

        {/* <ButtonSearchDates startDate={formattedDateStart} endDate={formattedDateEnd} datos={datos}/> */}
          {/* <MaterialUIPicker datos={filteredData5}/> */}
          {showReset  && data5}
          {showSearch && FilterData()}
        </TabPanel>
        <TabPanel value="2">{data4}</TabPanel>
        <TabPanel value="3">{data3}</TabPanel>
        <TabPanel value="4">{data2}</TabPanel>
        <TabPanel value="5">{data1}</TabPanel>
        
       
      </TabContext>
    </Box>
  );
}