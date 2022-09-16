import { joiResolver } from '@hookform/resolvers/joi';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';
import { formatAxiosError } from '../helpers/error.helper';
import paymentSchema from '../validations/payment.validation';
import Header from './Header';
import InputField from './InputField';
import LoadingButton from './LoadingButton';

function Payment() {
  const { book } = useSelector((state) => state.addBook);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(undefined);
  const { control, handleSubmit, reset } = useForm({
    resolver: joiResolver(paymentSchema),
  });

  function pay(data) {
    axiosInstance
      .post('/payments', { ...data, amount })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.success(formatAxiosError(error));
        reset();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    axiosInstance
      .get('/payments/fine')
      .then((res) => {
        setAmount(parseInt(res.data.data.fine, 10));
      })
      .catch((error) => {
        toast.success(formatAxiosError(error));
      });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: '20px', sm: '30px' },
        px: { xs: '30px', sm: '60px', md: '70px', lg: '80px' },
      }}
    >
      <Header sx={{ marginBottom: '30px' }}>Payment Method</Header>
      <Box
        component="form"
        action=""
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'auto', sm: 'repeat(2, auto)' },
          columnGap: '30px',
          rowGap: '20px',
        }}
      >
        <InputField
          label="Card Number"
          name="cardNumber"
          control={control}
          fontSize="1rem"
        />
        <InputField
          label="ExpirationDate"
          name="expireDate"
          control={control}
          fontSize="1rem"
        />
        <InputField
          label="Card Holder Name"
          name="cardHolder"
          control={control}
          fontSize="1rem"
        />
        <InputField label="CCV" name="ccv" control={control} fontSize="1rem" />
      </Box>
      <Stack direction="row-reverse" alignItems="center">
        <LoadingButton
          loading={amount !== undefined ? loading : true}
          variant="contained"
          color="secondary"
          sx={{
            marginTop: '30px',
            maxWidth: '200px',
            width: '100%',
          }}
          onClick={handleSubmit(pay)}
        >
          <Typography>PAY</Typography>
        </LoadingButton>
        <Box
          sx={{
            height: '36px',
            marginTop: '30px',
            paddingX: '10px',
            bgcolor: '#1165A2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography color="white">SUM: ${amount}.00</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Payment;