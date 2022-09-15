import { joiResolver } from '@hookform/resolvers/joi';
import { Box, styled, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';
import signInMemberSchema from '../validations/signInMemberSchema.validation';
import InputField from './InputField';
import LoadingButton from './LoadingButton';

const CustomTypography = styled(Typography)(() => ({
  textAlign: 'center',
  lineHeight: '1.3rem',
}));

function SignInLibrarian() {
  const {
    palette: { color, secondary },
  } = useTheme();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    resolver: joiResolver(signInMemberSchema),
  });

  async function signInLibrarian(data) {
    setLoading(true);
    await axiosInstance
      .post('/users/librarians/login', data)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.data.token));
        toast.success(res.data.message);
        reset();
      })
      .catch((error) => {
        toast.error(
          (error.response.data && error.response.data.message) || error.message,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Box
      sx={{
        backgroundImage: `url('/images/member_sign_bg.png')`,
        backgroundColor: 'rgba(255, 255, 255, 0.44)',
        backgroundBlendMode: 'overlay',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          pb: '60px',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'Center',
          gap: '10px',
          bgcolor: 'white',
          margin: '10px',
          borderRadius: '5px',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <CustomTypography variant="h3" fontWeight="bold" fontSize="1.5rem">
          Sign In
        </CustomTypography>
        <CustomTypography color={color.grey}>
          Welcome to <br />
          Kazakh National Library!
        </CustomTypography>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            gap: '5px',
            width: '100%',
            pb: '10px',
          }}
        >
          <InputField label="Username" name="userName" control={control} />
          <InputField label="Password" name="password" control={control} />
        </Box>
        <LoadingButton
          loading={loading}
          onClick={handleSubmit(signInLibrarian)}
        >
          Sign In
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default SignInLibrarian;
