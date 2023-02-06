import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import React, {useState} from 'react';
import { DateTime } from 'luxon'
import { StyleCardUser } from './StyleCardUser';
import DropDownMenu from './DropDownMenu';


interface MyObject {
    data?: string;
    createdAt?: String | Date;
}

interface Props {
    startDate: any
    endDate: any
    datos: MyObject[]
}

export const ButtonSearchDates = ({startDate, endDate, datos}: Props) => {
    const [showData, setShowData] = React.useState(false)
    const startFDate = dayjs(startDate)
    const endFDate = dayjs(endDate)    
    const MyContext = React.createContext({});

    const formattedDatos = datos
    .filter(dato => {
        let createdAt: Dayjs = dayjs(0);
        if (typeof dato.createdAt === "string") {
        const format = DateTime.fromISO(dato.createdAt).toFormat("DD t");
        createdAt = dayjs(format);
      } else if (dato.createdAt instanceof Date) {
        createdAt = dayjs(dato.createdAt);
      }

      return createdAt.isBetween(startFDate, endFDate);
    })
    .map(obj => {
        const data = obj.data ? JSON.parse(obj.data.replace(/=>/g, ':')): undefined
        return(
            <>
            <StyleCardUser data={data} obj={obj} />
            </>
        )
        
    });

    const toggleData = () => {
        setShowData(!showData)
    }


    return (
        <>
            <Button variant="contained" 
            sx={{
              display: 'block',
              margin: '1rem auto',
            }}
            onClick={toggleData}
            >
            Search
            </Button>
            {/* {showData && data5} */}
            {showData && formattedDatos}
            {/* <MyContext.Provider value={{ showData, setShowData }}>
                <DropDownMenu handleTabChange={}/>
            </MyContext.Provider> */}
        
        </>
    )
}