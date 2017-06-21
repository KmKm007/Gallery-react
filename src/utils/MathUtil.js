export function getRandom (range1, range2) {
  const value = range1 + Math.random() * (range2 - range1)
  return value
}
