
export const handleError = (res, error, placeMessage) => {
  return res
  .status(error.status || 500)
  .json({ Place: placeMessage,
          Error: error.message });
};
