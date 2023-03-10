import { Box, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { DateTime } from 'luxon'
import { DateTime } from 'luxon';
import MaterialUIPicker from "./MaterialUIPicker";

interface DataObject {
  userName: string;
  feedbackMessage: string;
}

interface ObjObject {
  createdAt?: any;
}
interface Props {
    data?: DataObject;
    obj?: ObjObject | any;
    
}
export const StyleCardUser = ({data,obj}:Props) => {
  const date = DateTime.fromISO(obj && obj.createdAt).toFormat('DD t');
    return (
      
        <Box sx={{
            height: '100%',
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
      
          <Typography variant="body1" component='p'
            sx={{
              marginRight: 'auto',
              fontSize: '.8rem',
              marginBottom: '.2rem',
            }}
          >
            {date}
          </Typography>
          <Box sx={{ display: 'flex'}}>
          <AccountCircleIcon />
            <Typography variant='body1' component="h2" sx={{
              fontSize: '15px',
              fontWeight: 'bold',
              marginLeft: '5px',
            }}>
              {data && data.userName}
              {/* {console.log(data)} */}
            </Typography>
          </Box>
          <Typography variant="body1" component="p"
              sx={{
                marginTop: '.4rem',
                marginBottom: '.3rem'

              }}
          >
              {data && data.feedbackMessage}
          </Typography>
        </Box>  
    )
}