export const getDaysFromNow = (
  borrowDate: string,
  returnPeriod: number = 15
) => {
  const logDate = new Date(borrowDate);
  const returnDate = new Date(
    logDate.getTime() + returnPeriod * 24 * 60 * 60 * 1000
  );
  const now = new Date();

  const diffTime = returnDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return {
      text: `Termin upłynął ${Math.abs(diffDays)} dni temu`,
      isWarning: true,
    };
  }
  if (diffDays === 0) {
    return {
      text: 'Upływa dzisiaj',
      isWarning: true,
    };
  }
  if (diffDays === 1) {
    return {
      text: 'Upłynie jutro',
      isWarning: true,
    };
  }
  if (diffDays <= 4) {
    return {
      text: `Zostało ${diffDays} dni`,
      isWarning: true,
    };
  }

  return {
    text: `Zostało ${diffDays} dni`,
    isWarning: false,
  };
};
