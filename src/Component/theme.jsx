// import { createTheme } from "@mui/material/styles";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Consolas",
      "Noto Sans Traditional Chinese",
      "文泉驛正黑",
      "WenQuanYi Zen Hei",
      "儷黑 Pro",
      "LiHei Pro",
      "標楷體",
      "微軟正黑體",
      "Microsoft JhengHei",
      "source-code-pro",
      "Menlo",
      "Monaco",
      "Courier New",
      "monospace",
    ].join(","),
    color: "red",
  },
});

export default theme;
