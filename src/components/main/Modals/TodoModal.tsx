import React, { ChangeEvent } from "react";
import { Modal, Box, Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { todoModalStyle } from "../../../styles/Style";

type TodoModalProps = {
  open: boolean;
  handleClose: () => void;
  updateTodoChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  updateTodoHandler: (e: React.FormEvent) => void;
  deleteTodoHandler: (id: number) => void;
  todoId: number;
};

function TodoModal(props: TodoModalProps) {
  const classes = todoModalStyle();
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box className={classes.modal}>
        <Typography
          style={{ fontWeight: "600", textAlign: "center", margin: "1rem" }}
          variant="h5"
          color="secondary"
        >
          Change your title
        </Typography>
        <Typography
          style={{ fontWeight: "400", textAlign: "center", color: "#cccccc" }}
          variant="subtitle1"
        >
          Enter your new title below or click the delete button to delete Todo.
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "revert",
            margin: "2rem",
          }}
        >
          <TextField
            id="title"
            // @ts-ignore
            component="form"
            className={classes.input}
            color="primary"
            size="medium"
            onChange={props.updateTodoChangeHandler}
            onSubmit={props.updateTodoHandler}
            variant="filled"
            InputProps={{
              color: "primary",
              style: { color: "white", fontSize: "1.05rem" },
            }}
          />

          <Button
            variant="outlined"
            color="error"
            style={{ marginTop: "2rem" }}
            startIcon={<DeleteIcon />}
            onClick={props.deleteTodoHandler.bind(null, props.todoId)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default TodoModal;
