import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { selectedGuest } from "../redux/reducers/formReducer";


const guests = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

const CustomDropdownInput = ({ label }) => {
  const dispatch = useDispatch()
  const [guest, setguest] = React.useState("EUR");
  const [guestSelected, setGuestSelected] = React.useState({guest:''});
  console.log('the val of guest is: ',guest)

  const handleChange = (event) => {
    setguest(event.target.value);
    dispatch(selectedGuest({selectguest:event.target.value}))
    console.log('handle change in guest:',event.target.value)
  };
  console.log('handle change in selected guest:', guestSelected)

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
        // marginTop: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-guest"
          select
          label="Select"
          value={guest}
          name="guest"
          onChange={handleChange}
          helperText="Please select no of guest"
        >
          {guests.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default CustomDropdownInput;
