describe("İlk Testim", () => {
  it("true,true ile esit mi!", () => {
    expect(true).to.equal(true);
  });

  it("true,terue ile esit mi!", () => {
    //intellisense
    cy.get("").click();
  });
});


/*
Cypress, Mocha adlı bir test framework'ü üzerine kuruludur ve bu framework'ün temel yapı taşları 
olan describe ve it bloklarını kullanır.

describe Bloğu
Amacı: Test senaryolarınızı gruplamak için kullanılır. 
Genellikle bir test grubunu (veya bir modülü) tanımlar ve içerisine birden fazla it bloğu ekleyerek, 
o gruba ait testleri tanımlarsınız.

Kullanımı: describe içine bir başlık ve bir fonksiyon alır. 
Başlık, test grubunun neyi test ettiğini ifade ederken, fonksiyon içinde o grup altındaki testler yer alır.

describe("Login Modülü", () => {
  // Burada login ile ilgili tüm testler olacak
});


it Bloğu
Amacı: it bloğu, tek bir test durumunu (test case) tanımlar. 
İçerisine testin neyi test ettiğini belirten bir başlık ve test kodlarını içeren bir fonksiyon alır. 
Her it bloğu, Cypress'in çalıştıracağı bağımsız bir testtir.
Kullanımı: it içinde yazılan kod, belirli bir davranışı veya durumu test etmek için kullanılır.

it("Kullanıcı doğru bilgilerle giriş yapabiliyor mu?", () => {
  // Giriş işlemiyle ilgili test kodları burada olacak
});

*/