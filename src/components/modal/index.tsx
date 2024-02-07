import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { ModalContent, ModalOverlay } from "./modal.style";
import ModalBox from "../../assets/images/modal-box.png";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()} $src={ModalBox}>
        <button onClick={onClose}>close</button>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("root")! // Use the created div as the portal target
  );
};

export default Modal;
