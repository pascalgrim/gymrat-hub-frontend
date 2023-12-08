export function replaceUmlaute(str: string): string {
  const umlautMap: Record<string, string> = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    ß: "ss",
  };

  return str.replace(/[äöüß]/g, (match) => umlautMap[match]);
}
