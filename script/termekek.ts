declare interface Termek {
    nev: string|null;
    ar: number;
}

function beolvas(): void {
    const termekek: Termek[] = [];
    let myContainer = document.getElementById('termekekTabla') as HTMLInputElement;
  
    for (let i = 0;i < 7;i++) {
      const nev = prompt("Kérem adja meg a termék nevét:");
      const input = prompt("Kérem adja meg a termék árát:");
      if (nev === "" || input === "") {
        break;
      }

      const ar = Number(input);

      myContainer.value += "<tr><td>" + nev + "</td>" + ar + "</tr>"
  
      termekek.push({
        nev,
        ar,
      });
    }

    legolcsobb(termekek);
    statisztika(termekek);
  }
  
  function legolcsobb(termekek: Termek[]): void {
    let legolcsobb = termekek[0];
    for (const termek of termekek) {
      if (termek.ar < legolcsobb.ar) {
        legolcsobb = termek;
      }
    }

    let myContainer = document.getElementById('legolcsobb') as HTMLInputElement;
    myContainer.value = legolcsobb.nev as string;
  }
  
  function statisztika(termekek: Termek[]): void {
    const osszeg = termekek.reduce((osszeg, termek) => osszeg + termek.ar, 0);
    const atlag = osszeg / termekek.length;
  
    const osszegek = termekek.map((termek) => (termek.ar - atlag) ** 2);
    const szoras = Math.sqrt(osszegek.reduce((szoras, osszeg) => szoras + osszeg, 0) / termekek.length);
  
    let atlagContainer = document.getElementById('atlag') as HTMLInputElement;
    atlagContainer.value = atlag.toString();

    let szorasContainer = document.getElementById('szoras') as HTMLInputElement;
    szorasContainer.value = szoras.toString();
  }
  