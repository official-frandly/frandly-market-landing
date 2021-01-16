import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import { EducationCard } from "components/cards";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "90%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const educationItems = [
  { id: 1 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 10 },
  { id: 21 },
];
export default function EducationModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Styled.EducationModal>
      <button
        type="button"
        onClick={handleOpen}
        className="educationModal__btn"
      >
        모두 보기
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Education</h2>
            <p id="transition-modal-description">
              <div className="education__card_box_flex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
              <div className="education__card_box">
                {educationItems.map((item) => {
                  return (
                    <EducationCard className="education__card" key={item.id} />
                  );
                })}
              </div>
            </p>
          </div>
        </Fade>
      </Modal>
    </Styled.EducationModal>
  );
}

const Styled = {
  EducationModal: styled.div`
    .educationModal__btn {
      background: transparent;
      color: #4f96ff;
      border-radius: 5px;
      border: 0;
      &:hover {
        color: #2e7cf1;
      }
    }
    .education__card_box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &:after {
        display: block;
        clear: both;
        content: "";
      }
    }
    .education__card_box_flex {
      display: flex;
      flex-direction: row;
      div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    }
    .education__card {
      /* display:flex- */
    }
  `,
};
