
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrixNew = [];
  if (matrix === undefined) {
    return matrixNew;
  }
  for (let i = 0; i < matrix.length; i+=2) {
    for (let k = 0; k < matrix[i].length; k++) {
      matrixNew.push(matrix[i][k]);
    }
    if (i < (matrix.length-1)) {
      for (let l = matrix[i+1].length - 1; l >= 0; l--) {
        matrixNew.push(matrix[i+1][l]);
      }
    }
  }
  return matrixNew;
}
