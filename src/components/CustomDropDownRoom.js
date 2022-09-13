import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { selectedRoom } from "../redux/reducers/formReducer";
import { useDispatch } from "react-redux";

const rooms = [
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

const CustomDropDownRoom = ({ label }) => {
  const [room, setroom] = React.useState("EUR");
const dispatch = useDispatch()
  const handleChange = (event) => {
    setroom(event.target.value);
    dispatch(selectedRoom({selectroom:event.target.value}))
    console.log('handle change in room:',event.target.value)
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
      <div>
        <TextField
          id="outlined-select-room"
          select
          label="Select"
          name="room"
          value={room}
          onChange={handleChange}
          helperText="Please select no of room"
        >
          {rooms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default CustomDropDownRoom;
