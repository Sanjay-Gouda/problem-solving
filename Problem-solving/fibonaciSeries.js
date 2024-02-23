const findFibnoacciSeries = () => {
  let inputNum = 20;
  let initialSeq = [0, 1];
  let nextSeq = 0;
  let i = 1;

  while ((nextSeq = initialSeq[i] + initialSeq[i - 1]) <= inputNum) {
    initialSeq.push(nextSeq);
    i++;
  }
  console.log(initialSeq);
};

findFibnoacciSeries();
