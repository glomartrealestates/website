import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({currentPage , totalPages , onPageChange}) {


  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} page={currentPage} onChange={onPageChange} />
    </Stack>
  );
}
