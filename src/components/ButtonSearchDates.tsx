import Button from '@mui/material/Button';

interface MyString {
    createdAt?: String;
}

interface Props {
    startDate: any
    endDate: any
    datos: MyString[]
}

export const ButtonSearchDates = ({startDate, endDate, datos}: Props) => {
   
    const prueba = () => {
        console.log(startDate)
        console.log(endDate)
        datos.forEach(dato => {
            console.log(dato.createdAt)
        })
    }
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