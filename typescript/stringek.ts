function randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}
  
function randomString(strings: string[]): string[] {
    const result: string[] = [];
    for (let i = 0; i < 3; i++) {
        let random = randomNumber(strings.length);
        let string = strings[random];
        result.push(string);
    }
    return result;
}

  
  
  const strings = ["alma", "körte", "szilva", "barack", "dió"];
  
  const results = randomString(strings);
  
  console.log(results);