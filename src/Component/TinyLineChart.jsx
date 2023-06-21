import { useEffect, useState } from "react";
import { LineChart, Line, YAxis } from "recharts";

function generateTimestamps() {
  // Get the current date
  var currentDate = new Date();

  // Calculate "today minus 7 days"
  var sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  var timestampSevenDaysAgo = Math.floor(sevenDaysAgo.getTime() / 1000);

  // Calculate "today minus 2 days"
  var twoDaysAgo = new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000);
  var timestampTwoDaysAgo = Math.floor(twoDaysAgo.getTime() / 1000);

  // Return the timestamps
  return {
    sevenDaysAgo: timestampSevenDaysAgo,
    twoDaysAgo: timestampTwoDaysAgo,
  };
}
async function fetchHistory(stockId) {
  let timestamps = generateTimestamps();

  const response = await fetch(
    `https://tvapi.futures-op.com/v2/history?symbol=${stockId}&resolution=20&from=${timestamps["sevenDaysAgo"]}&to=${timestamps["twoDaysAgo"]}&ws=true`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error: ${response.status}, Data: ${JSON.stringify(errorData)}`
    );
  }
  return response.json();
}
async function getLineChartData(stockId) {
  const history = await fetchHistory(stockId);

  return history.map((item) => {
    return {
      time: item.time,
      price: item.close,
    };
  });
}

export default function TinyLineChart({ stockId, color }) {
  const [stockData, setStockData] = useState("");
  useEffect(() => {
    getLineChartData(stockId).then((data) => {
      setStockData(data);
    });
  }, [stockId]);
  if (!stockData) {
    return null;
  }

  // Determine the minimum and maximum values of the price data
  const prices = stockData.map((dataPoint) => dataPoint.price);
  const minValue = Math.min(...prices);
  const maxValue = Math.max(...prices);

  // Adjust the scale to make the trend move more drastically
  const scaleOffset = 0.2; // Increase this value to exaggerate the trend
  const scaleMin = minValue - (maxValue - minValue) * scaleOffset;
  const scaleMax = maxValue + (maxValue - minValue) * scaleOffset;

  return (
    <div>
      <LineChart width={150} height={50} data={stockData}>
        <Line type="monotone" dataKey="price" stroke={color} dot={false} />
        <YAxis domain={[scaleMin, scaleMax]} tick={false} axisLine={false} />
      </LineChart>
    </div>
  );
}
