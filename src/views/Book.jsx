import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';
import { formatAxiosError } from '../helpers/error.helper';
import {
  getOneBookAction,
  loadingGetOneBookAction,
  oneBookErrorAction,
} from '../redux/slices/oneBook.slice';

function Book() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, loadingGet } = useSelector((state) => state.oneBook);

  if (!localStorage.getItem('token')) {
    navigate('/member/signIn');
  }

  useEffect(() => {
    dispatch(loadingGetOneBookAction());
    axiosInstance
      .get(`/books/${id}`)
      .then((res) => {
        dispatch(getOneBookAction(res.data.data.book));
        navigate('details');
      })
      .catch((error) => {
        dispatch(oneBookErrorAction(formatAxiosError(error)));
        toast.error(formatAxiosError(error));
      });
  }, []);

  return loadingGet ? (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress thickness={10} size="4rem" color="secondary" />
    </Box>
  ) : (
    <Outlet />
  );
}

export default Book;
