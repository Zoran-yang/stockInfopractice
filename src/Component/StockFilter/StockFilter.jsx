import { useState } from "react";
import TradeValueBar from "./TradeValueBar";
import TradeVolumeBar from "./TradeVolumeBar";
import Button from "@mui/material/Button";
import { tradeValueText, tradeVolumeText } from "./function/textTranslate";

export default function StockFilter({
  setFilterTradeValue,
  setFilterTradeVolume,
  setIsFiltered,
}) {
  const [tradeValueBarPosition, setTradeValueBarPosition] = useState(() => {
    return [1, 100];
  });
  const [tradeVolumeBarPosition, setTradeVolumeBarPosition] = useState([
    1, 100,
  ]);

  const handleClick = (tradeValueBarPosition, tradeVolumeBarPosition) => {
    let TradeVolume = tradeVolumeBarPosition.map((value) => {
      return tradeVolumeText(value);
    });
    let TradeValue = tradeValueBarPosition.map((value) => {
      return tradeValueText(value);
    });
    setFilterTradeVolume(TradeVolume);
    setFilterTradeValue(TradeValue);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <TradeVolumeBar
        tradeVolumeBarPosition={tradeVolumeBarPosition}
        setTradeVolumeBarPosition={setTradeVolumeBarPosition}
      />
      <TradeValueBar
        tradeValueBarPosition={tradeValueBarPosition}
        setTradeValueBarPosition={setTradeValueBarPosition}
      />
      <Button
        variant="contained"
        onClick={() => {
          setIsFiltered(false);
          handleClick(tradeValueBarPosition, tradeVolumeBarPosition);
        }}
        sx={{ width: "15%" }}
      >
        確定
      </Button>
    </div>
  );
}
