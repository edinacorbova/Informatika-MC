function terulet(magassag: number, oldal: number): number {
    return magassag * oldal;
  }
  
  function teruletSzog(szog: number, oldalA: number, oldalB: number): number {
    return oldalA * oldalB * Math.sin(szog);
  }
  
  const magassag = 10;
  const oldalA = 5;
  const oldalB = 7;
  const szog = 80;
  
  const terulet1 = terulet(magassag, oldalA);
  const terulet2 = teruletSzog(szog, oldalA, oldalB);
  
  console.log("A paralelogramma területe magassággal és oldallal:", terulet1);
  console.log("A paralelogramma területe szöggel és két oldallal:", terulet2);
  