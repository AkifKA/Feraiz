//? Form elementlerinin yakalanarak değişkenlere atanması:

//! Mûris (Miras Bırakan): Erkek ve Kadın Radio Butonları
const erkekRadioBtn = document.querySelector("#erkek"); //? Erkek
const kadinRadioBtn = document.querySelector("#kadin"); //? Kadın

//! Mûrisin (Miras Bırakanın) Geride Bıraktıkları
const kocasiCheckBtn = document.querySelector("#kocasi"); //? Kocası
const hanimiInputNbr = document.querySelector("#hanimi"); //? Hanımı
const dedesiCheckBtn = document.querySelector("#dedesi"); //? Dedesi
const ninesibaCheckBtn = document.querySelector("#dedesi"); //? Ninesi (Babasının Annesi)
const ninesiaaCheckBtn = document.querySelector("#dedesi"); //? Ninesi (Annesinin Annesi)
const babasiCheckBtn = document.querySelector("#babasi"); //? Babası
const annesiCheckBtn = document.querySelector("#annesi"); //? Annesi
const erkekKardesiAInputNbr = document.querySelector("#erkek-kardesi-a"); //? Ana Bir Erkek Kardeşi
const kizKardesiAInputNbr = document.querySelector("#kiz-kardesi-a"); //? Ana Bir Erkek Kardeşi
const erkekKardesiABInputNbr = document.querySelector("#erkek-kardesi-ab"); //? Ana-Baba Bir Erkek Kardeşi
const kizKardesiABInputNbr = document.querySelector("#erkek-kardesi-ab"); //? Ana-Baba Bir Kız Kardeşi
const ogluInputNbr = document.querySelector("#oglu"); //? Oğlu
const oglununOgluInputNbr = document.querySelector("#oglunun-oglu"); //? Oğlunun Oğlu
const kiziInputNbr = document.querySelector("#kizi"); //? Kizi
const oglununKiziInputNbr = document.querySelector("#oglunun-kizi"); //? Oğlunun Kızı
const oglununOglununOgluInputNbr = document.querySelector(
  "#oglunun-oglunun-oglu"
); //? Oğlunun Oğlunun Oğlu
const oglununOglununKiziInputNbr = document.querySelector(
  "#oglunun-oglunun-kizi"
); //? Oğlunun Oğlunun Kızı
const amcasiABInputNbr = document.querySelector("#amcasi-ab"); //? Ana-Baba Bir Amcası
const amcasiBInputNbr = document.querySelector("#amcasi-b"); //? Baba bir Amcsası
const amcaOgluABInputNbr = document.querySelector("#amca-oglu-ab"); //? Ana-Baba Bir Amcasının Oğlu
const amcaOgluBInputNbr = document.querySelector("#amca-oglu-b"); //? Baba bir Amcsasının Oğlu
const erkekKardesininOgluABInputNbr = document.querySelector(
  "#erkek-kardesinin-oglu-ab"
); //? Baba bir Amcsasının Oğlu
const erkekKardesininOgluBInputNbr = document.querySelector(
  "#erkek-kardesinin-oglu-b"
); //? Baba bir Amcsasının Oğlu

//! Hesapla ve Temizle Butonları
const hesaplaBtn = document.querySelector("#sumit");
const TemizleBtn = document.querySelector("#reset");
