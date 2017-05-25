export function buttonStyle(secondary) {
  return `
    display: inline-block;
    padding: 0.5em 1em;
    color: white;
    background-color: ${secondary ? '#bbbbbb' : 'palevioletred'};;
    border-radius: 2px;
    border: none;
    font-size:inherit;
    transition: background-color 0.2s;
    &:hover,
    &:focus {
      background-color: ${secondary ? '#aaaaaa' : '#d4547e'};
    }
    &:focus {
      outline: none;
    }`;
}
