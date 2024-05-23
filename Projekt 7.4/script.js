const result = document.querySelector(".result");

const bill = parseFloat(prompt("Kolik mame zaplatit?"));
const tips = parseFloat(prompt("Vetsina spropitneho v %"));
const croud = parseFloat(prompt("Kolik nas jsou?"));

const debit = ((bill / 100) * tips + bill) / croud;
result.append("Kazdy z nas ma zaplatit " + debit + " korun.");
