const createModalProps = ({ modalOpen, toggleModal, completeTask }) => ({
  open: modalOpen,
  closeAction: toggleModal,
  completeTask,
});


export default createModalProps;
