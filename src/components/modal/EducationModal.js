import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled, { createGlobalStyle } from "styled-components";
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
  {
    id: 1,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 12,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 13,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 14,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 15,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 16,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 17,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 18,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 19,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 10,
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
  {
    id: 21,
    href:
      "https://www.hanwhawm.com/main/common/common_file/fileView.cmd?category=2&depth3_id=anls5&key1=51501&key2=1&bldid=bbs10031",
    image: "https://t1.daumcdn.net/cfile/tistory/994BEF355CD0313D05",
    title: "프랜들리 입점 프로세스",
    subtitle:
      "프랜들리 입점 신청은 1분이면 끝입니다. 쉽고 간단한 프랜들리 입점 방법을 확인해보세요! 입점 프로세스 프랜들리 입점을... ",
  },
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
    <Styled.EducationModal className="education__modal">
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
            <h2 id="transition-modal-title" className="education__modal_title">
              교육 자료
            </h2>
            <div id="transition-modal-description">
              <div className="education__card_box">
                {educationItems.map((item) => {
                  return (
                    <div className="education__card_col" key={item.id}>
                      <a href={item.href} target="_blank">
                        <EducationCard
                          className="education__card"
                          image={item.image}
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      <ModalStyle />
    </Styled.EducationModal>
  );
}

const ModalStyle = createGlobalStyle`
    .education__modal_title{
      font-size:25px;
      font-weight:bold;
      border-bottom:1px solid #ececec;
      margin-bottom:20px;
    }
    .education__card_box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      max-width:1400px;
      margin:auto;
      &:after {
        display: block;
        clear: both;
        content: "";
      }
    }
    .education__card_col{
      
      flex-basis: 33% ;
      padding:10px;
      max-width:360px;
    }
    .education__card{
      
      
      
    }
`;
const Styled = {
  EducationModal: styled.div`
    text-align: right;

    .educationModal__btn {
      background: transparent;
      color: #4f96ff;
      border-radius: 5px;
      border: 0;
      &:hover {
        color: #2e7cf1;
      }
    }
  `,
};
