const quotes = [
  {
    quote : "I don’t want to survive. Want to live the life I want.",
    korean : "밥만 먹고서 살아가고 싶지는 않아. 나는 내가 원하는 삶을 살고 싶다." ,
  },
  {
    quote : "Be true to thyself.",
    korean : "자기 자신에게 솔직해져라",
  },
  {
    quote : "It hurt because it mattered.",
    korean : "중요했기 때문에 아팠습니다.",
  },
  {
    quote : "No one is you and that is your power.",
    korean : "아무도 당신이 될 수 없다. 그것이 당신의 힘이다.",
  },
  {
    quote : "The more I get to know people, the more I find myself loving dogs.",
    korean : "사람에 대해 알면 알수록, 더 강아지를 사랑하게 된다.",
  },
  {
    quote : "A day without laughter is a day wasted.",
    korean : "웃음 없는 하루는 낭비한 하루다.",
  },
  {
    quote : "Success doesn't come overnight.",
    korean : "성공은 하룻밤 사이에 오지 않는다.",
  },
  {
    quote : "When they go low, we go high",
    korean : "그들이 저급해도 우리는 품위 있게 갑시다.",
  },
  {
    quote : "I don't want a perfect life, I want a happy life.",
    korean : "완벽한 인생을 원하지 않고 행복한 삶을 원합니다.",
  },
  {
    quote : "Never speak bad about yourself",
    korean : "스스로에 대해 안좋은 얘기 하지 말자.",
  },
]
// 명언 배열 저장

const quote_en = document.querySelector(".quoteBox .quote_en");
const quote_ko = document.querySelector(".quoteBox .quote_ko");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];




quote_en.innerText = todaysQuote.quote;
quote_ko.innerText = todaysQuote.korean;

// round(반올림) / ceil(올림) / floor (내림) 