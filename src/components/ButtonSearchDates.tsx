import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';


interface MyString {
    createdAt?: String;
}

interface Props {
    startDate: any
    endDate: any
    datos: MyString[]
}

export const ButtonSearchDates = ({startDate, endDate, datos}: Props) => {
    const formattedStartDate = startDate?.format('YYYY-MM-DDTHH:mm:ss+00:00');
    const formattedEndDate = endDate?.format('YYYY-MM-DDTHH:mm:ss+00:00');
    
    const prueba = () => {
        // console.log(startDate)
        console.log(formattedStartDate)
        console.log(formattedEndDate)
        console.log(endDate)
        const datotes = datos.map(dato => {
            return dato.createdAt
        })

        console.log(datotes)

    }

    // console.log(startDate.$d)
    return (
        <>
            <Button variant="contained" 
            sx={{
              display: 'block',
              margin: '1rem auto',
            }}
            onClick={prueba}
            >
            Search
            </Button>
        </>
    )
}