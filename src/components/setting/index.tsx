import { useState } from "react";
import Modal from "../modal";

function Setting() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        setting
      </Modal>
    </>
  );
}

export default Setting;
