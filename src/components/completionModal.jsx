import React from 'react'
import Dialog from 'material-ui/Dialog';


export default function CompletionModal(props) {
  const {modal,open} = props
  return (
    <Dialog
    modal={true}
    open={false}
  >
  </Dialog>
  )
}