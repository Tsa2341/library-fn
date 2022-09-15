import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../axiosInstance';
import { formatAxiosError } from '../helpers/error.helper';
import {
  allBooksErrorAction,
  getAllBooksAction,
  loadingGetAllBooksAction,
} from '../redux/slices/allBooks.slice';
import BookCard from './BookCard';
import Category from './Category';
import Header from './Header';
import SearchBookInput from './SearchBookInput';

function Search() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.allBooks);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    dispatch(loadingGetAllBooksAction());
    axiosInstance
      .get('/books')
      .then((res) => {
        dispatch(getAllBooksAction(res.data.data.books));
        setFilteredBooks(res.data.data.books);
      })
      .catch((error) => {
        const formattedError = formatAxiosError(error);
        dispatch(allBooksErrorAction(formattedError));
      });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        py: { xs: '20px', sm: '30px' },
        px: { xs: '30px', sm: '60px', md: '70px', lg: '80px' },
        gap: { xs: '6px', md: '10px' },
      }}
    >
      <Typography fontSize={{ xs: '1rem', md: '1.5rem' }}>
        Insert title, ISBN, author
      </Typography>
      <SearchBookInput books={books} setFilteredBooks={setFilteredBooks} />
      <Header marginTop="10px">Category</Header>
      <Category books={books} />
      <Header marginTop="10px">Books</Header>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}
      >
        {filteredBooks &&
          filteredBooks.map((book) => {
            return (
              <BookCard key={book.ISBN} book={book} sx={{ marginX: 'auto' }} />
            );
          })}
      </Box>
    </Box>
  );
}

export default Search;
