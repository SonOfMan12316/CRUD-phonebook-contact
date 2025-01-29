import {
  Wrapper,
  CustomModal,
  ButtonsWrapper,
  Button,
  Text,
} from "./DeleteConfirmation.styledModal"

interface DeleteConfirmationModalProps {
  isOpen: Boolean
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
}) => {
  return (
    <CustomModal isOpen={isOpen}>
      <Wrapper>
        <Text>Are you sure you want to delete this contact?</Text>
        <ButtonsWrapper>
          <Button color="confirm">Yes</Button>
          <Button color="cancel">No</Button>
        </ButtonsWrapper>
      </Wrapper>
    </CustomModal>
  )
}

export default DeleteConfirmationModal
