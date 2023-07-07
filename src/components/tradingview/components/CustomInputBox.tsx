import { InputAdornment, TextField } from "@mui/material";

export default function CustomInputBox ({ leftTitle, rightTitle, defaultValue } : {
  leftTitle : string,
  rightTitle : string,
  defaultValue? : number
}) {

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {leftTitle}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            {rightTitle}
          </InputAdornment>
        )
      }}
      variant="filled"
      defaultValue={defaultValue}
    />    
  );

}