export function fizz(x) {
  return x % 3 === 0 ? 'fizz' : ''
}

export function buzz(x) {
  return x % 5 === 0 ? 'buzz' : '' 
}

export function fizzbuzz(array) {
  return array.map((x) => fizz(x) + buzz(x) || x)
}
