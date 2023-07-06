import { MenuItem, Stack, Typography } from "@mui/material";

export default function NavBarMenuItem ({ svgElement, title, description } : {
  svgElement : React.ReactNode,
  title : string,
  description : string
}) {

  // This returns a MenuItem with the appropriate color that has the inputted SVG element to its left and 
  // A stack of column-ordered title and description to the right which are left indented

  return (
    <MenuItem
      sx={{
        borderRadius: 1,
        p: 2
      }}
    >
      {svgElement}
      <Stack
        direction='column'
      >
        <Typography
          sx={{
            color: ''
          }}
        >
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </Stack>
    </MenuItem>
  );
}