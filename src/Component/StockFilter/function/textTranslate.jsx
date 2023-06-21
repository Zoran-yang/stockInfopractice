export function tradeVolumeText(value) {
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
      value = 1000;
      break;
    case 40:
      value = 5000;
      break;
    case 50:
      value = 10000;
      break;
    case 60:
      value = 50000;
      break;
    case 70:
      value = 100000;
      break;
    case 80:
      value = 1000000;
      break;
    case 100:
      value = 10000000;
      break;
    default:
      value = 1;
      break;
  }
  return value;
}

export function tradeValueText(value) {
  switch (value) {
    case 1:
      value = 1;
      break;
    case 10:
      value = 1000000;
      break;
    case 20:
      value = 10000000;
      break;
    case 30:
      value = 100000000;
      break;
    case 40:
      value = 1000000000;
      break;
    case 60:
      value = 5000000000;
      break;
    case 80:
      value = 10000000000;
      break;
    case 100:
      value = 100000000000;
      break;
  }
  return value;
}
