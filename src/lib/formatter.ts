export const formatBytes = (bytes: number): string => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let unitIndex = 0;
  let n = bytes;

  while (n >= 1024 && ++unitIndex) {
    n = n / 1024;
  }

  // Include a decimal point and a tenths-place digit if presenting
  // less than ten of KB or greater units
  return `${n.toFixed(n < 10 && unitIndex > 0 ? 1 : 0)} ${units[unitIndex]}`;
};

export const formatDate = (targetDate: string): string => {
  const date: Date = new Date(targetDate);

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};
