// Check rows
export const checkRow = (board, i, j) => {
  const value = board[i][j];
  console.log(value);
  const boardLength = board.length;
  let count = 1;
  let k = 1;
  while (true) {
    if (i + k >= boardLength) break;

    if (board[i + k][j] === value) {
      count++;
      k++;
    } else break;
  }
  k = 1;
  while (true) {
    if (i - k < 0) break;

    if (board[i - k][j] === value) {
      count++;
      k++;
    } else break;
  }

  if (count >= 5) return true;
  return false;
};

// Check columns
export const checkColumns = (board, i, j) => {
  const value = board[i][j];
  console.log(value);
  const boardLength = board.length;
  let count = 1;
  console.log("count: " + count);
  let k = 1;
  while (true) {
    if (i + k >= boardLength) break;

    if (board[i][j + k] === value) {
      count++;
      k++;
    } else break;
  }
  k = 1;
  while (true) {
    if (i - k < 0) break;

    if (board[i][j - k] === value) {
      count++;
      k++;
    } else break;
  }

  if (count >= 5) return true;
  return false;
};

// Check diagonals left
export const checkDiagonalsLeft = (board, i, j) => {
  const value = board[i][j];
  const boardLength = board.length;
  let count = 1;
  let k = 1;
  while (true) {
    if (i + k >= boardLength) break;

    if (board[i + k][j + k] === value) {
      count++;
      k++;
    } else break;
  }
  k = 1;
  while (true) {
    if (i - k < 0) break;

    if (board[i - k][j - k] === value) {
      count++;
      k++;
    } else break;
  }

  if (count >= 5) return true;
  return false;
};

// Check diagonals right
export const checkDiagonalsRight = (board, i, j) => {
  const value = board[i][j];
  const boardLength = board.length;
  let count = 1;
  let k = 1;
  while (true) {
    if (i + k >= boardLength) break;

    if (board[i + k][j - k] === value) {
      count++;
      k++;
    } else break;
  }
  k = 1;
  while (true) {
    if (i - k < 0) break;

    if (board[i - k][j + k] === value) {
      count++;
      k++;
    } else break;
  }

  if (count >= 5) return true;
  return false;
};
