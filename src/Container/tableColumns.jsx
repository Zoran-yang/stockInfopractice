import TinyLineChart from "../Component/TinyLineChart";
import { stockVolumeToText, stockAmountToText } from "./stockNumberToText";

const columns = [
  {
    field: "id",
    headerName: "股票代碼",
    headerAlign: "center",
    align: "center",
    minWidth: 150,
  },
  {
    field: "name",
    headerName: "股票名稱",
    headerAlign: "center",
    align: "center",
    minWidth: 150,
  },
  {
    field: "trend",
    headerName: "走勢",
    renderCell: (params) => {
      let color = params.row.growth < 0 ? "green" : "red";
      return (
        <div>
          <TinyLineChart stockId={params.value} color={color} />;
        </div>
      );
    },
    headerAlign: "center",
    align: "right",
    minWidth: 150,
  },
  {
    field: "price",
    headerName: "成交價(元)",
    renderCell: (params) => {
      return (
        <div className={params.row.growth < 0 ? "loss" : "profit"}>
          {parseFloat(params.value)}
        </div>
      );
    },
    headerAlign: "center",
    align: "right",
    minWidth: 150,
  },
  {
    field: "growth",
    headerName: "漲跌(元)",
    renderCell: (params) => {
      return (
        <div className={params.value < 0 ? "loss" : "profit"}>
          {params.value}
        </div>
      );
    },
    headerAlign: "center",
    align: "right",
    minWidth: 150,
  },
  {
    field: "growthPercent",
    headerName: "漲跌(%)",
    renderCell: (params) => {
      return (
        <div className={params.value < 0 ? "loss" : "profit"}>
          {params.value}%
        </div>
      );
    },
    headerAlign: "center",
    align: "right",
    minWidth: 150,
  },
  {
    field: "open",
    headerName: "開盤價(元)",
    renderCell: (params) => {
      return <div>{params.value}</div>;
    },
    headerAlign: "center",
    align: "right",
    minWidth: 150,
  },
  {
    field: "volume",
    headerName: "成交量(張)",
    renderCell: (params) => {
      return <div>{stockVolumeToText(params.value)}</div>;
    },
    headerAlign: "center",
    align: "center",
    minWidth: 150,
  },
  {
    field: "tradeValue",
    headerName: "成交總額(元)",
    renderCell: (params) => {
      return <div>{stockAmountToText(params.value)}</div>;
    },
    headerAlign: "center",
    align: "center",
    minWidth: 160,
  },
];

export default columns;
