import React from 'react';

const isInDev = process.env.REACT_APP_DEV_STATUS === 'yes';

function InDevelopment() {
  console.log(process.env);
  return (
    isInDev ? (
      <div>
        Em desenvolvimento
      </div>
    ) : null
  );
}

export default InDevelopment;
