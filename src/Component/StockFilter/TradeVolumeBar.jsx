import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 10,
    label: "100",
  },
  {
    value: 20,
    label: "500",
  },
  {
    value: 30,
    label: "1,000",
  },
  {
    value: 40,
    label: "5,000",
  },
  {
    value: 50,
    label: "1萬",
  },
  {
    value: 60,
    label: "50,000",
  },
  {
    value: 70,
    label: "10萬",
  },
  {
    value: 80,
    label: "100萬",
  },
  {
    value: 100,
    label: "1000萬",
  },
];

function valuetextInChinese(value) {
  switch (value) {
    case 1:
      value = 1;
      break;
    case 10:
      value = 100;
      break;
    case 20:
      value = 500;
      break;
    case 30:
      value = "1千";
      break;
    case 40:
      value = "5千";
      break;
    case 50:
      value = "1萬";
      break;
    case 60:
      value = "5萬";
      break;
    case 70:
      value = "10萬";
      break;
    case 80:
      value = "1百萬";
      break;
    case 100:
      value = "1千萬";
      break;
  }
  return value;
}

export default function TradeVolumeBar({
  tradeVolumeBarPosition,
  setTradeVolumeBarPosition,
}) {
  const handleChange = (event, newValue) => {
    setTradeVolumeBarPosition(newValue);
  };
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <Box sx={{ width: "90%", padding: "10px" }}>
      <Box sx={{ textAlign: "center", fontSize: "20px" }}>
        {`交易量: ${valuetextInChinese(
          tradeVolumeBarPosition[0]
        )} ~ ${valuetextInChinese(tradeVolumeBarPosition[1])}張`}
      </Box>

      <Slider
        getAriaLabel={() => "Temperature range"}
        value={tradeVolumeBarPosition}
        onChange={handleChange}
        defaultValue={1}
        step={null}
        valueLabelFormat={valueLabelFormat}
        marks={marks}
      />
    </Box>
  );
}
