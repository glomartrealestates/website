import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from 'next/link';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

export default function RowAndColumnSpacing2() {
  return (
    <Box sx={{ width: '100%' , height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid size={{ xs:12,  sm: 12, md: 6 }}><Link href={'/'}> 
          <Paper className='align-center text-center flex flex-col justify-center items-center border-slate-500 border-solid border-2 rounded-2xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB4JzXOMO7QQh6EW_4bw9VeW3MQywVYYoEA&s)] bg-cover bg-center bg-no-repeat ' sx={{ height: 150 }}>
          </Paper>
        </Link></Grid>
        <Grid size={{ xs:12,  sm: 12, md: 6 }} ><Link href={'/'}>
        <Paper className='align-center text-center flex flex-col justify-center items-center border-slate-500 border-solid border-2 rounded-2xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3ytYbjDAXyns59zB2S67hSHooMNYAtbinQ&s)] bg-cover bg-center bg-no-repeat ' sx={{ height: 150 }}>
        </Paper>
        </Link></Grid>
        
      </Grid>
    </Box>
  );
}