import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { selectedDate } from "../redux/reducers/formReducer";

const CustomDatePicker = () => {
  const [value, setValue] = React.useState(dayjs(moment().format()));
const dispatch = useDispatch()
  const handleChange = (newValue) => {
    console.log('selected date is:',newValue)
    setValue(newValue);
    // dispatch(selectedDate({selectdate:newValue}))
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
        marginTop: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={4}>
          <DesktopDatePicker
            label="Check-in"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
};
export default CustomDatePicker;
