import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

interface Props {
  value: number;
  starNum: number;
}

const BorderLinear = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#FBBC04' : '#308fe8',
    },
  }));

  const distance = 2

const BorderLinearProgress = ({value, starNum}: Props) => {

    return(
      <Box sx={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-around',
          color: '#a5a58d',
          fontWeight: 'bold'
        }}>
          <Typography component="span">{starNum}</Typography>
          <BorderLinear variant="determinate" value={value} sx={{
            paddingTop: .2,
            marginBottom: distance,
            borderRadius: 5,
            width: '90%'
          }}/>
      </Box>
    )
}

export default BorderLinearProgress

