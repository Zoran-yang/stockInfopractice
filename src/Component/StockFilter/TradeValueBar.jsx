import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 10,
    label: "100萬",
  },
  {
    value: 20,
    label: "1000萬",
  },
  {
    value: 30,
    label: "1億",
  },
  {
    value: 40,
    label: "10億",
  },
  {
    value: 60,
    label: "50億",
  },
  {
    value: 80,
    label: "100億",
  },
  {
    value: 100,
    label: "1000億",
  },
];

function valuetextInChinese(value) {
  switch (value) {
    case 1:
      value = 1;
      break;
    case 10:
      value = "1佰萬";
      break;
    case 20:
      value = "1仟萬";
      break;
    case 30:
      value = "1億";
      break;
    case 40:
      value = "10億";
      break;
    case 60:
      value = "50億";
      break;
    case 80:
      value = "1佰億";
      break;
    case 100:
      value = "1仟億";
      break;
  }
  return value;
}

export default function TradeValueBar({
  tradeValueBarPosition,
  setTradeValueBarPosition,
}) {
  const handleChange = (event, newValue) => {
    setTradeValueBarPosition(newValue);
  };

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <Box sx={{ width: "90%", padding: "10px" }}>
      <Box sx={{ textAlign: "center", fontSize: "20px" }}>
        {`成交值: ${valuetextInChinese(
          tradeValueBarPosition[0]
        )} ~ ${valuetextInChinese(tradeValueBarPosition[1])}元`}
      </Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={tradeValueBarPosition}
        onChange={handleChange}
        defaultValue={1}
        step={null}
        valueLabelFormat={valueLabelFormat}
        marks={marks}
      />
    </Box>
  );
}
