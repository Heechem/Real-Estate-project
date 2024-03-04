'use client';
import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const loading = () => {
  return (
    <ClimbingBoxLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default loading;
