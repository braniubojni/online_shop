import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Arial, Helvetica, sans-serif",
  borderBottom: "1px solid lightblue",
  pb: 20,
  div: {
    flex: 1,
  },
  information: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },

  img: {
    maxWidth: 80,
    objectFit: "cover",
    ml: 40,
  },
});
