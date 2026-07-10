export const paginate = ({ page = 1, limit = 10, total = 0 }) => {
  const safePage = Math.max(1, Number(page) || 1);
  const safeLimit = Math.max(1, Number(limit) || 10);
  const totalPages = Math.max(1, Math.ceil(total / safeLimit));
  const skip = (safePage - 1) * safeLimit;

  return {
    page: safePage,
    limit: safeLimit,
    total,
    totalPages,
    skip,
  };
};

export default paginate;
