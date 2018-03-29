import React from 'react';
import Dialog from 'material-ui/Dialog';

export default function WelcomeModal(props) {
  const { open, onContinue } = props;
  return (
    <Dialog open={open}>
      hello<button onClick={onContinue}>continue</button>
    </Dialog>
  );
}
