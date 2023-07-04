export default function viewTotalCount(count: string) {
  const cntToNum = Number(count);
  if (cntToNum > 100000000) {
    return `조회수 ${Math.round(cntToNum / 100000000)}억회`;
  }
  if (cntToNum >= 10000) {
    return `조회수 ${Math.round(cntToNum / 10000)}만회`;
  }
  if (cntToNum >= 1000) {
    return `조회수 ${Math.round(cntToNum / 1000)}천회`;
  }

  return `조회수 ${Math.round(cntToNum)}회`;
}
