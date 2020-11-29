let musyılı = 3;
let renk = "siyah";
let model = 2013;
let marka = "audi";

if (musyılı >= 5) {
  console.log(" kapımız size her zaman açıktır. ");
} else if (
  (renk == "kırmızı" || renk == "siyah") &&
  (marka == "audi" || marka == "bmw" || marka == "vw")
) {
  if (marka == "bmw") {
    if (
      (renk == "kırmızı" && model >= 2010 && model <= 2019) ||
      (renk == "siyah" && model >= 2020)
    ) {
      console.log(" kapımız size her zaman açıktır. ");
    } else {
      console.log("kusura bakmayın size yardımcı olamayız.");
    }
  } else if (marka == "audi") {
    if ((model >= 2005 && model <= 2010) || (model >= 2014 && model <= 2019)) {
      console.log(" kapımız size her zaman açıktır. ");
    } else {
      console.log("kusura bakmayın size yardımcı olamayız.");
    }
  } else {
    if (marka == "vw" && renk == "siyah" && model >= 2001 && model <= 2018) {
      console.log(" kapımız size her zaman açıktır. ");
    } else {
      console.log("kusura bakmayın size yardımcı olamayız.");
    }
  }
} else {
  console.log("kusura bakmayın size yardımcı olamayız.");
}
