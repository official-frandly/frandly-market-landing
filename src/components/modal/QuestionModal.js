import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled, { createGlobalStyle } from "styled-components";
import { setting } from "lib/config";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
    <Styled.QuestionModal>
      <button type="button" onClick={handleOpen} className="qna__btn">
        문의하기
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
            {/* <h2 id="transition-modal-title">문의하기</h2> */}
            <div id="transition-modal-description">
              <div>
                추가적인 문의는{" "}
                <span className="question__email">{setting.questionEmail}</span>{" "}
                으로 문의주시면 감사하겠습니다.
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      <QuestionModalStyle />
    </Styled.QuestionModal>
  );
}

const QuestionModalStyle = createGlobalStyle`
  .question__email{
    display:inline-block;
    background:#f5f5f5;
    padding: 0 10px;
  }
`;

const Styled = {
  QuestionModal: styled.div`
    .qna__btn {
      display: inline-block;
      vertical-align: middle;
      background: #02073e;
      color: #fff;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 700;
      padding: 10px 21px;
      letter-spacing: -0.16px;
      transition: all 500ms ease;
      border: 0;
      &:hover {
        opacity: 0.8;
      }
    }
  `,
};
