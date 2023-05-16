const colors = [
  '#98f6a9',
  '#4afde7',
  '#7ff9c7',
  '#ffb6af',
  '#ff6565',
  '#f45572',
  '#bc98f3',
  '#d3bcf6',
  '#b186f1',
  '#caacf9',
  '#eb9cff',
  '#d0bdf6',
  '#ba9df4',
  '#b0c2f2',
  '#95b8f6',
  '#add5fa',
  '#84b6f4',
  '#75c2f9',
  '#f9d99a',
  '#e2e37e',
];


const randomColor = () => {
  return colors[Math.floor(Math.random() * 19) + 1];
};

export default randomColor;