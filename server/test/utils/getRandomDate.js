export const getRandomDate = () => {
  const start = new Date(1992, 1, 13);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
