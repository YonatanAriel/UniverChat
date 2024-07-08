export const getUniqueId = () => {
  const randomNumber = Date.now() * Math.random() * (100 * Math.random());
  const uniqueId = Math.floor(randomNumber).toString();
  return uniqueId;
};
