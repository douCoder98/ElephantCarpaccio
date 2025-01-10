const taxes = {
  UT: 6.85,
  NV: 8,
  TX: 6.25,
  AL: 4,
  CA: 8.25,
};

function print(price: number, quantity: number, etat: string) {
  let taxe = 0;
  switch (etat) {
    case "UT":
      taxe = taxes.UT;
      break;
    case "NV":
      taxe = taxes.NV;
      break;
    case "TX":
      taxe = taxes.TX;
      break;
    case "AL":
      taxe = taxes.AL;
      break;
    case "CA":
      taxe = taxes.CA;
      break;

    default:
      break;
  }
  let total = quantity * price;

  
  if(total >=1000 && total< 5000){
    total = total - (total*3)/100
  }else if(total>= 5000 && total < 7000){
    total = total - (total*5)/100
  }else if(total>= 7000 && total < 10000){
    total = total - (total*7)/100
  }else if(total >= 10000 && total< 50000){
    total = total - (total*10)/100
  }else if(total>= 50000 ){
    total = total - (total*15)/100
  }
  
    
  let total_taxe = total - (total* taxe) / 100;
  return (
    "quantity : " +
    quantity +
    "; price : " +
    price +
    "€" +
    " => TTC : " +
    total_taxe +
    "€"
  );
}

console.log(print(270.99, 978, "UT"));

