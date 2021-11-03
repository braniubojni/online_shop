import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "100%",
  border: "1px solid lightblue",
  borderRadius: 10,
  height: "100%",
  button: {
    borderRadius: "0 0 10px 10px",
  },
  img: {
    maxHeight: 250,
    objectFit: "cover",
    borderRadius: 10,
  },
  div: {
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "1rem",
    height: "100%",
  },
});
