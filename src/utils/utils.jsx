export const numbetToTime = duration => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};
