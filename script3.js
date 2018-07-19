const average = arr => arr.reduce((x, y) => x + y, 0) / arr.length;

average(4, 6, 5);
average(1, 3, 6, 6);
average(3, 8);