//*-------------- ÖDEV -------------------
//* prices dizisinde her bir fiyata %10 zam yapalım.
const prices = [100, 250, 50, 89];

 const newprices = prices.map((p) => Math.round(p*1.1));
 console.log(newprices);

//*-------------- ÖDEV -------------------
//* prices dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
//* 1. ürünün zamlı fiyati 110 TL gibi
const newPrices = (prices) => {
  for (i in prices) {
    if (prices[i] > 250) {
      prices[i] = `${Number(i) + 1}. ürünün zamli fiyati ${Math.round(
        prices[i] * 1.1
      )}`;
    } else {
      prices[i] = `${Number(i) + 1}. ürünün zamli fiyati ${Math.round(
        prices[i] * 1.1
      )}`;
    }
  }
  console.log(prices);
};
newPrices(prices);

//*-------------- ÖDEV -------------------
//* salary 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const salaries = [3000, 5000, 4000, 6000, 6500];

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

const salary50 = salaries.filter((s) => s < 4000).map((s) => s * 1.5);
console.log(salary50);
const salary25 = salaries
  .filter((s) => s > 4000)
  .map((s) => s * 1.25)
  .forEach((s) => console.log(s));

//*-------------- ÖDEV -------------------
//* maasi ortalamanin altinda olanlara %20 zam yapalim.

const salary20 = salaries
  .filter((s) => s < salaries.reduce((x, y) => x + y) / salaries.length)
  .map((s) => s * 1.2);
console.log(salary20);
