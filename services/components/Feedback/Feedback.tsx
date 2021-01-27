import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Modal from "../Modal";
import { Typography } from "@material-ui/core";
import { useReactiveVar } from "@apollo/client";
import { feedbackVar } from "../../../front/graphql/cache/variables/feedback.var";
import { initFeedbackState } from "./feedbackState";

export interface FeedbackType {
  isOpen: boolean;
  message?: string;
  error?: boolean;
  type?: "modal" | "snackbar";
  modal?: {
    title: string;
    btnText?: string;
    onClick?: (any?: any) => any;
    buttonCloseText?: string;
    onCloseAction?: (any?: any) => any;
  };
}

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Feedback = () => {
  const { isOpen, message, error, type = "snackbar", modal } = useReactiveVar(
    feedbackVar
  );

  if (type === "modal" && modal)
    return (
      <Modal
        title={modal.title}
        isOpen={isOpen}
        setOpen={feedbackVar}
        onClick={modal.onClick}
        buttonActionText={modal.btnText || "Fermer"}
        buttonCloseText={modal.buttonCloseText}
        onCloseAction={modal.onCloseAction}
      >
        <Typography variant={"body1"} component={"p"}>
          {message}
        </Typography>
      </Modal>
    );
  if (type === "snackbar")
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        open={isOpen}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              feedbackVar(initFeedbackState);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          severity={error ? "error" : "success"}
          onClose={() => {
            feedbackVar(initFeedbackState);
          }}
        >
          <Typography variant={"caption"}> {message}</Typography>
        </Alert>
      </Snackbar>
    );
  return null;
};
export default Feedback;
