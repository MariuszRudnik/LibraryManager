export const getDaysFromNow = (log: string) => {
  const logDate = new Date(log);
  const now = new Date();

  // Obliczamy różnicę w milisekundach
  const diffTime = logDate.getTime() - now.getTime();

  // Konwertujemy milisekundy na dni i zaokrąglamy w dół
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
      isWarning: false,
    };
  }
  if (diffDays === 1) {
    return {
      text: 'Upłynie Jutro',
      isWarning: false,
    };
  }
  if (diffDays <= 14) {
    return {
      text: `Za ${diffDays} dni`,
      isWarning: false,
    };
  }

  return {
    text: `Za ${diffDays} dni`,
    isWarning: false,
  };
};
