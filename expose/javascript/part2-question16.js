for(const prop in statistics) {
  if((statistics[prop] % 2 != 0) || prop.startsWith("r")) {
    console.log(statistics[prop]);
  }
}
