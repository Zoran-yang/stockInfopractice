// Services to make the api calls
export async function fetchData(filterTradeValue, filterTradeVolume) {
  const response = await fetch(
    `https://stock-screener.futures-ai.com/api/v1/daily_rank?order_by=desc&sort_by=amount&volume_gte=${filterTradeVolume[0]}&volume_lte=${filterTradeVolume[1]}&amount_gte=${filterTradeValue[0]}&amount_lte=${filterTradeValue[1]}`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error: ${response.status}, Data: ${JSON.stringify(errorData)}`
    );
  }
  return response.json();
}

export async function fetchStockName() {
  const response = await fetch(
    `https://storage.googleapis.com/symbol-config/stock_code_to_chinese.json`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error: ${response.status}, Data: ${JSON.stringify(errorData)}`
    );
  }
  return response.json();
}
