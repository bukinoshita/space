import { Grid, Unit } from './space.types'

class Space {
  grid: number
  unit: string

  constructor(grid: Grid = 4, unit: Unit = 'px') {
    this.grid = grid
    this.unit = unit
  }

  calcGrid(value: number) {
    return value * this.grid
  }

  spacing(value: number) {
    const space = this.calcGrid(value)

    return `${space}${this.unit}`
  }
}

export { Space }
