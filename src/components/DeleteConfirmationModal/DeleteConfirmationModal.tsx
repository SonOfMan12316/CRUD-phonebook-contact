import {
  Wrapper,
  CustomModal,
  ButtonsWrapper,
  Button,
  Text,
} from "./DeleteConfirmation.styledModal"

interface DeleteConfirmationModalProps {
  isOpen: Boolean
  onRequestClose: () => void
  onConfirm: () => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
      appElement={document.getElementById("root")!}
    >
      <Wrapper>
        <Text>Are you sure you want to delete this contact?</Text>
        <ButtonsWrapper>
          <Button onClick={onConfirm} color="confirm">
            Yes
          </Button>
          <Button onClick={onRequestClose} color="cancel">
            No
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </CustomModal>
  )
}

export default DeleteConfirmationModal
