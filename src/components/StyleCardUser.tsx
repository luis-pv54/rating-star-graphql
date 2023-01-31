import { Box, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DateTime } from 'luxon'


interface Props {
    data: Object;
    obj: Object;
}
export const StyleCardUser = ({data,obj}:Props) => {
    return (
        <Box sx={{
            height: '8rem',
            backgroundColor: '#d0bcd5',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '12px',
            paddingTop: '12px',
            boxShadow: 3,
            width: '16rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}>
      
            <Box sx={{ display: 'flex' }}>
            <AccountCircleIcon />
              <Typography variant='body1' component="h2" sx={{
                fontSize: '15px',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}>
                {data.userName}
                {console.log(data)}
              </Typography>
            <Typography>
                {DateTime.fromISO(obj.createdAt).toFormat('DD t')}
            </Typography>
            </Box>
            <Typography variant="body1" component="p"
                sx={{
                    marginTop: '15px',
                }}
            >
                {data.feedbackMessage}
            </Typography>

          </Box>   
    )
}