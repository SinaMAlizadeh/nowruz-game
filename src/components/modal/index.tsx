import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { ModalContent, ModalOverlay } from "./modal.style";
import ModalBox from "../../assets/images/modal-box_v1.png";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()} $src={ModalBox}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("root")!
  );
};

export default Modal;
