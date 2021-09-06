module.exports = (url) => {
  const regex = new RegExp('^(//|[a-z]+:)', 'i');
  return regex.test(url);
};
