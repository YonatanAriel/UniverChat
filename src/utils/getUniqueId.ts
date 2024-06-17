export const getUniqueId = () => {
  const randomNumber = Date.now() * Math.random() * (100 * Math.random());
  const uniqueId = randomNumber.toString();
  return uniqueId;
};
