import React from 'react';
import Dialog from 'material-ui/Dialog';

export default function CardsWelcome(props) {
  const {onWelcomeContinue,isOpen} = props
  return (
    <div className="welcome-cards">
      <Dialog open={isOpen}>
        <div>welcome!</div>
        <button onClick={onWelcomeContinue}>continue</button>
      </Dialog>
    </div>
  );
}
