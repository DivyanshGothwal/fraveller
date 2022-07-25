import { Button } from '@mui/material';
import React from 'react';

interface FravellerComponentProps {
  onClickClient: () => void;
  onClickTraveller: () => void;
}

export function FravellerComponent(props:FravellerComponentProps) {
  const { onClickClient, onClickTraveller } = props;
  return (
    <div className="d-flex justify-content-center flex-column align-items-center w-100 h-100">
      <div className="mb-2">
        Are you a
      </div>
      <div className="d-flex justify-content-center align-items-center flex-row">
        <Button
          variant="outlined"
          className="mr-2"
          onClick={onClickClient}
        >
          Client
        </Button>
        <Button
          variant="outlined"
          onClick={onClickTraveller}
        >
          Traveller
        </Button>
      </div>
    </div>
  );
}
