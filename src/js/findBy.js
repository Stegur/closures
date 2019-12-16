const findBy = (propName, propValue) => (el) => el[propName] === propValue;

export default findBy;
