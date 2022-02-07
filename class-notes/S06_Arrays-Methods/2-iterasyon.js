//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                        DİZİLERDE İTERASYON
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR DÖNGÜSÜ
//* ======================================================

const diziIsaretliTopla = (dizi) => {
  let sumP = 0,
    sumN = 0;
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > 0) {
      sumP += dizi[i];
    } else {
      sumN += dizi[i];
    }
  }
  return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
};

const koordinatlar = [120, 100, -100, 220, 330, -40];
console.log(diziIsaretliTopla(koordinatlar));

//* ======================================================
//*                   FOR IN DÖNGÜSÜ
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığı varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//*  ana programa döndürecek fonksiyonu yazınız. Eğer o
//* türden bir hayvan yok ise bulunamadığını yazdırsın.
//*--------------------------------------------------------

//* ÖDEV
//*----------------------------------------------------------
const Animals = [
  "elephant",
  "camel",
  "bird",
  "camel",
  "Mouse",
  "bird",
  "camel",
];
const Find = prompt("Please Enter Your Animals").toLowerCase();

const findAnimal = (Find, Arrays) => {
  let counter = 0;
  for (animal of Arrays) {
    if (animal == Find) {
      counter++;
    }
  }
  if (counter == 0) {
    return `Sorry we have not ${Find}`;
  } else {
    return `We have ${counter} ${Find}`;
  }
};
console.log(findAnimal(Find, Animals));

//* ======================================================
//*                   FOR OF DÖNGÜSÜ
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let araclar = ["BMW", "Volvo", "Mini"];
let yazi = "";
for (let arac of araclar) {
  console.log(arac);
  yazi += arac + " "; // arac:  dizinin her bir elemanini temsil etmektedir.
}
console.log(yazi);
