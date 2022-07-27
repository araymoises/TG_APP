const colors= [
  // green: [
    '#98f6a9',
    '#4afde7',
    '#a2edce',
    '#b0f2c2',
    '#95fab9',
    '#7ff9c7',
    '#a6fab6',
  // ],
  // red: [
    '#ff6961',
    '#ffb6af',
    '#f9a59a',
    '#f47e8e',
    '#ff6565',
    '#f45572',
    '#f45572',
  // ],
  // purple: [
    '#bc98f3',
    '#d3bcf6',
    '#b186f1',
    '#caacf9',
    '#eb9cff',
    '#d0bdf6',
    '#ba9df4',
  // ],
  // blue: [
    '#84b6f4',
    '#b0c2f2',
    '#b2e2f2',
    '#95b8f6',
    '#add5fa',
    '#84b6f4',
    '#75c2f9',
  // ],
  // yellow: [
    '#fdfd96',
    '#ffda9e',
    '#ffeebc',
    '#f9d99a',
    '#eef6b0',
    '#fdfd96',
    '#e2e37e',
  // ],
];


const randomColor = () => {
  return colors[Math.floor(Math.random() * 35) + 1];
};

export default randomColor;