/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Switch } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  minHeight: 200,
  bgcolor: "background.paper",
  border: "1px solid #666",
  borderRadius: "3px",
  boxShadow: 24,
  p: 4,
};

export default function Setting({ checked, onChange }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          minWidth: "0px",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          maxWidth: "10px",
        }}
      >
        <i
          className="fa-solid fa-gear iconSetting"
          style={{ color: "#fff" }}
        ></i>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "30px"
              }}>
                <p style={{fontSize: "1.6rem",color: "#2D9596"}}>Dark mode:</p>
                <Switch checked={checked} onChange={onChange} style={{color: "#2D9596"}} />
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
