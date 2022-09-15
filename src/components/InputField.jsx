import { Box, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField({ label, name, control, size = 'small', ...props }) {
  const {
    palette: { secondary },
  } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        ...props,
      }}
    >
      <Typography htmlFor={name} fontSize="0.7rem">
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <>
            <TextField
              variant="outlined"
              value={value}
              onChange={onChange}
              size={size}
              sx={{
                '& .MuiOutlinedInput-input': {
                  padding: '7px 10px',
                  fontSize: '0.7rem',
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: secondary.main,
                  },
                },
              }}
            />
            <Typography fontSize="0.7rem" color="error.light">
              {errors[name]
                ? errors[name].message.replace(/['"`]/gi, '')
                : undefined}
            </Typography>
          </>
        )}
      />
    </Box>
  );
}

export default InputField;
