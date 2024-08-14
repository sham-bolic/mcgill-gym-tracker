import { useEffect } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
}

export default function Occupation(props: { currentVisitors: number }) {
  const maxOccupancy = 200; // TBD
  const percentageOfProgressBar = Math.round(
    (props.currentVisitors / maxOccupancy) * 100
  );
  const tolerance = Math.round(props.currentVisitors * 0.1); // currently set at 10%

  let color = "danger";
  if (percentageOfProgressBar < 50) {
    color = "success";
  } else if (percentageOfProgressBar < 70) {
    color = "secondary";
  }

  useEffect(() => {
    const percentage = document.getElementById("percentage");

    if (percentageOfProgressBar.toString().length > 1) {
      percentage!.style.left = "33%";
    } else {
      percentage!.style.left = "36%";
    }
  }),
    [];

    const theme = extendTheme({
      colorSchemes: {
        light: {
          palette: {
            secondary: {
              // Credit:
              // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
              // Adjust the global variant tokens as you'd like.
              // The tokens should be the same for all color schemes.
              solidBg: "#F07B0E",
              softHoverBg: "#F0DDA1"
            },
          },
        },
      },
    });

  return (
    <CssVarsProvider theme={theme}>
      <div className="flex flex-col mx-auto w-[300px] text-center">
        <h2 className="text-[1.75rem] font-bold py-4">Current Occupancy</h2>
        <div>
          <div className="relative w-[140px] h-[140px] mx-auto">
            <CircularProgress
              color={color}
              determinate={true}
              value={percentageOfProgressBar}
              variant="solid"
              thickness={14}
              sx={{
                "--CircularProgress-size": "140px",
              }}
            ></CircularProgress>
            <div
              id="percentage"
              className="absolute top-[34%] left-[33%] text-[2rem] font-semibold"
            >
              {percentageOfProgressBar}%
            </div>
          </div>
          <h2 className="text-[2rem] font-bold p-2 pb-4">
            {props.currentVisitors - tolerance}-
            {props.currentVisitors + tolerance}
            <br />
            students
          </h2>
        </div>
      </div>
    </CssVarsProvider>
  );
}
