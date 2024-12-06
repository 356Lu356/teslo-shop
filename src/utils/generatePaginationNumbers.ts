export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
  //si el numero total de pagionas es menor de 7, mostrar sin puntos suspensivos
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  //si esta entre las 3 primeras paginas mostrar hasta la 5
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  //si la pagina actiualñ esta en las ultimas , muestra las primeras dos y luego las ultimas
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  //si la pagina actual esta en medio , muestra la primera , puntos suspensivos y la ultimavecinos
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
