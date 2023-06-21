import { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchData, fetchStockName } from "./Container/apiService";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FloatingWindow from "./Component/FloatingWindow";
import StockFilter from "./Component/StockFilter/StockFilter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Component/theme.jsx";
import { CssBaseline } from "@mui/material";
import columns from "./Container/tableColumns";
import "./App.css";

function App() {
  const [stockInfo, setStockInfo] = useState([]);
  const [isFiltered, setIsFiltered] = useState(0);
  const [onLoading, setOnLoading] = useState(true);
  const [filterTradeValue, setFilterTradeValue] = useState([1, 100000000000]);
  const [filterTradeVolume, setFilterTradeVolume] = useState([1, 10000000]);
  const fetchIntervalRef = useRef(null);
  const stockNameRef = useRef(null);

  const fetchStockData = async () => {
    const data = await fetchData(filterTradeValue, filterTradeVolume);
    stockNameRef.current = await fetchStockName();
    const transformedData = data.map((stock) => {
      let price = +stock.close;
      let growth = stock.change;
      let growthPercent = stock.change_percent;
      let open = stock.open;
      let volume = stock.volume;
      let tradeValue = stock.amount;

      return {
        id: stock.symbol,
        name: stockNameRef.current[stock.symbol],
        trend: stock.symbol,
        price: price.toFixed(2),
        growth: growth,
        growthPercent: `${growthPercent.toFixed(2)}`,
        open: open.toLocaleString(),
        volume: volume,
        tradeValue: tradeValue,
      };
    });
    setStockInfo(transformedData);
    setOnLoading(false);
  };

  useEffect(() => {
    fetchStockData();
    const intialInterval = setInterval(fetchStockData, 10000);
    fetchIntervalRef.current = intialInterval;
    return () => clearInterval(fetchIntervalRef.current);
  }, [filterTradeValue, filterTradeVolume]);

  if (onLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Button
          variant="contained"
          onClick={() => setIsFiltered((prev) => !prev)}
        >
          篩選設定
        </Button>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={stockInfo} columns={columns} hideFooter={true} />
        </div>
        <FloatingWindow isOpen={isFiltered}>
          <StockFilter
            setFilterTradeValue={setFilterTradeValue}
            setFilterTradeVolume={setFilterTradeVolume}
            setIsFiltered={setIsFiltered}
          />
        </FloatingWindow>
      </Box>
    </ThemeProvider>
  );
}

export default App;
