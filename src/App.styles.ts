import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled("div")({
  margin: 40,
});

export const StyledButton = styled(IconButton)({
  position: "fixed",
  zIndex: 100,
  right: 20,
  top: 20,
});
