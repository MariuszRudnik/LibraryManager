import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Outlet, useNavigate } from "@tanstack/react-router";

type ModalBookProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalBook = ({ open, setOpen }: ModalBookProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate({ to: "/dashboard/books" });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Outlet />
      </Box>
    </Modal>
  );
};
