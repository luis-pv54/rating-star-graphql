import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import { StyleCardUser } from './StyleCardUser';
// import { DateTime } from 'luxon'
import MaterialUIPicker from './MaterialUIPicker';
import { ButtonSearchDates } from './ButtonSearchDates';
import Button from '@mui/material/Button';

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
  const [showData, setShowData] = React.useState(true)


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

  const toggleData = () => {
    setShowData(!showData)
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
        <Button variant="contained" 
            sx={{
              display: 'block',
              margin: '1rem auto',
            }}
            onClick={toggleData}
            >RESET</Button>
        <TabPanel value="1">
          <MaterialUIPicker datos={filteredData5}/>
          {showData  && data5}
        </TabPanel>
        <TabPanel value="2">{data4}</TabPanel>
        <TabPanel value="3">{data3}</TabPanel>
        <TabPanel value="4">{data2}</TabPanel>
        <TabPanel value="5">{data1}</TabPanel>
        
       
      </TabContext>
    </Box>
  );
}