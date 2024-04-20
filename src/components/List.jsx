import axios from "axios";
import React, { useEffect, useState } from "react";
import fash from "../assets/fash.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function List() {
  const [kinolar, setKinolar] = useState([]);
  const [dataModal, setDataModal] = useState([]);
  console.log(dataModal);

  useEffect(() => {
    axios.get("https://api.kinocheck.de/movies?tmdb_id=299534").then((res) => {
      setKinolar(res.data.videos);
    });
  }, []);
  const basketkino = [];
  function addCard(index) {
    basketkino.push(kinolar[index]);
    setDataModal(basketkino);
    handleOpen();
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 996,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    ml: -0.8,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="list">
      <div classeName="title">
        <img src={fash} alt="" />
        <p>Trading</p>
      </div>
      <div className="films-list">
        {kinolar.map((item, index) => (
          <div className="films" key={index} onClick={() => addCard(index)}>
            <img src={item.youtube_thumbnail} alt="" />
            <p>{item.title}</p>
            <span>{item.published}</span>
          </div>
        ))}
      </div>
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 700, height: 480 }}>
            {dataModal.map((item) => (
              <div className="card-modal">
                <img src={item.youtube_thumbnail} alt="" />
                <div className="txt">
                  <h5>Nomi:{item.title}</h5>
                  <p>Til:{item.language}</p>
                  <p>Vaqti:{item.published.slice(0, 4)}</p>
                  <p>Korish:{item.views}</p>
                </div>
              </div>
            ))}
          </Box>
        </Modal>
      </>
    </div>
  );
}

export default List;
