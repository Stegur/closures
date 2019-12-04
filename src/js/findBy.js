export default function findBy(propName, propValue) {
  return (el) => el[propName] === propValue;
}
