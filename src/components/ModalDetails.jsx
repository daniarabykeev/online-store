import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

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

function ModalDetails({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen1}>More details</Button>
      <Modal
        open={open}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {item.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item.description1}
              </Typography>
            </div>
            <div style={{ marginLeft: "150px" }}>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 3, fontSize: "20px", color: "green" }}
              >
                $ {item.price}
              </Typography>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description2}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={item.image1} alt="" style={{ width: "100px" }} />
              <img
                src={item.image2}
                alt=""
                style={{ width: "100px", margin: "0px 20px" }}
              />
              <img src={item.image3} alt="" style={{ width: "100px" }} />
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalDetails;
