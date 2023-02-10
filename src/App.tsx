import React, {useEffect, useState}from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import gql from 'graphql-tag'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography, Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import { ThemeProvider, borderRadius, color, fontSize } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { blueGrey, red, yellow } from '@mui/material/colors';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import DropDownMenu from './components/DropDownMenu'
import BorderLinearProgress from './components/BorderLinearProgress';
import { type } from 'os';


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.doomo.dev/p_gql',
  }),
  cache: new InMemoryCache(),
});

const COLLECTION = gql`
query Collection($id: String!) {
  collection(id: $id) {
    documents {
      createdAt
      data 
        
    }
  }
}
`

function MyComponent() {
  const { loading, error, data } = useQuery(COLLECTION, {
    variables: {
      id: '260a6d06-4705-4784-abad-c6f7d6f2fc5f'
    }
  });

  if (loading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  const documents = data?.collection?.documents; 


  const avgRating = documents.slice().reduce((acc:number, item:any) => JSON.parse(item.data.replaceAll("=>", ":")).rating + acc, 0)
  // const json_data = document.data.map(feedback => JSON.parse(feedback.replaceAll("=>", ":")) )
  const test = documents.slice().reduce((acc:number, item:any) => JSON.parse(item.data.replaceAll("=>", ":")));
  const average = Number(avgRating) / Number(documents.length)
  const distance = 2;

  // test.map( (item: any) => {
  //   console.log(item)
  // })
  // console.table(documents)
  let rate5 = 0
  let rate4 = 0
  let rate3 = 0
  let rate2 = 0
  let rate1 = 0

  documents.forEach((obj: { data: string; }) => {
    const data = JSON.parse(obj.data.replace(/=>/g, ':'));
    
    // return data.rating === 5;
    if(data.rating === 5){
      rate5++;
    }
    if(data.rating === 4){
      rate4++;
    }if(data.rating === 3){
      rate3++;
    }if(data.rating === 2){
      rate2++;
    }if(data.rating === 1){
      rate1++;
    }
    // return [rate5,rate4,rate3,rate2,rate1]
  });

  const convertPercentage  = (num: number): number => parseFloat((num / documents.length * 100).toFixed(2));


  console.log(convertPercentage(339))
  console.log(rate5,rate4,rate3,rate2,rate1)

  return (
    <Container sx={{
      marginTop: 5
    }}>
      <Box sx={{ 
        display:'flex',
        justifyContent: 'center'
      }}>
        
        <Box>
          <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={average} precision={0.5} readOnly size='small'/> */}

          </Stack>
         
        </Box>
        <Box sx={{ width: '60%'}}>
        
          <BorderLinearProgress value={convertPercentage(rate5)} starNum={5}/>
          <BorderLinearProgress value={convertPercentage(rate4)} starNum={4}/>
          <BorderLinearProgress value={convertPercentage(rate3)} starNum={3}/>
          <BorderLinearProgress value={convertPercentage(rate2)} starNum={2}/>
          <BorderLinearProgress value={convertPercentage(rate1)} starNum={1}/>
          
        </Box>
      
        <Box sx={{
          marginLeft: 10
        }}>
          <Typography variant='h2' component='h2'>
            {average.toFixed(1)}
          </Typography>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={average} precision={0.5} readOnly size='small'/>
          </Stack>
          <Typography>
            {documents.length} reviews
          </Typography>
        </Box>
      </Box>
      <DropDownMenu handleTabChange={documents}/>
    </Container>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MyComponent />
    </ApolloProvider>
  );
}
