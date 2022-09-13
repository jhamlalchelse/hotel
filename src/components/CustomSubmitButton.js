import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CustomSubmitButton = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "70ch" },
        marginTop: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        sx={{ width: "70ch", alignSelf: "center", m: 1, marginLeft: 5 }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
};
export default CustomSubmitButton;
