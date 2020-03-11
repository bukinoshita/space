import { Space } from '../source'

test('4px grid', () => {
  const space = new Space()

  expect(space.spacing(1)).toBe('4px')
  expect(space.spacing(2)).toBe('8px')
  expect(space.spacing(10)).toBe('40px')
})

test('8em grid', () => {
  const space = new Space(8, 'em')

  expect(space.spacing(1)).toBe('8em')
  expect(space.spacing(2)).toBe('16em')
  expect(space.spacing(10)).toBe('80em')
})
