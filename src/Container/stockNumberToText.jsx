export function stockVolumeToText(volume) {
  if (volume > 100000000) {
    volume = (volume / 100000000).toFixed(0) + "億";
  } else if (volume > 10000000) {
    volume = (volume / 10000000).toFixed(1) + "千萬";
  } else if (volume > 1000000) {
    volume = (volume / 1000000).toFixed(1) + "百萬";
  } else if (volume > 10000) {
    volume = (volume / 10000).toFixed(1) + "萬";
  } else if (volume > 1000) {
    volume = (volume / 1000).toFixed(1) + "千";
  }

  return volume;
}

export function stockAmountToText(amount) {
  if (amount > 100000000) {
    amount = (amount / 100000000).toFixed(1) + "億";
  } else if (amount > 10000000) {
    amount = (amount / 10000000).toFixed(1) + "仟萬";
  } else if (amount > 1000000) {
    amount = (amount / 1000000).toFixed(1) + "佰萬";
  } else if (amount > 10000) {
    amount = (amount / 10000).toFixed(1) + "萬";
  }

  return amount;
}
