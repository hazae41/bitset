export class Bitset {

  constructor(
    public value: number,
    public length: number
  ) { }

  /**
   * Get the value as a left-padded binary string
   * 
   * @returns 
   */
  toString() {
    return this.value.toString(2).padStart(this.length, "0")
  }

  /**
   * Transform the value to an unsigned 32-bits number
   * 
   * @returns 
   */
  unsign() {
    this.value = this.value >>> 0

    return this
  }

  /**
   * Bitwise NOT
   * 
   * @returns 
   */
  not() {
    for (let i = 0; i < this.length; i++)
      this.value ^= (1 << i)
    return this
  }

  /**
   * Get the bit at big-endian index
   * 
   * @param index 
   * @returns 
   */
  getBE(index: number) {
    return Boolean(this.value & (1 << (this.length - index - 1)))
  }


  /**
   * Get the bit at little-endian index
   * 
   * @param index 
   * @returns 
   */
  getLE(index: number) {
    return Boolean(this.value & (1 << index))
  }

  /**
   * Toggle the bit at big-endian index
   * 
   * @param index 
   * @returns 
   */
  toggleBE(index: number) {
    this.value ^= (1 << (this.length - index - 1))

    return this
  }

  /**
   * Toggle the bit at little-endian index
   * 
   * @param index 
   * @returns 
   */
  toggleLE(index: number) {
    this.value ^= (1 << index)

    return this
  }

  /**
   * Enable the bit at big-endian index
   * 
   * @param index 
   * @returns 
   */
  enableBE(index: number) {
    this.value |= (1 << (this.length - index - 1))

    return this
  }

  /**
   * Enable the bit at little-endian index
   * 
   * @param index 
   * @returns 
   */
  enableLE(index: number) {
    this.value |= (1 << index)

    return this
  }

  /**
   * Disable the bit at big-endian index
   * 
   * @param index 
   * @returns 
   */
  disableBE(index: number) {
    this.value &= ~(1 << (this.length - index - 1))

    return this
  }

  /**
   * Disable the bit at little-endian index
   * 
   * @param index 
   * @returns 
   */
  disableLE(index: number) {
    this.value &= ~(1 << index)

    return this
  }

  /**
   * Set the bit at big-endian index
   * 
   * @param index 
   * @param value 
   * @returns 
   */
  setBE(index: number, value: boolean) {
    if (value)
      return this.enableBE(index)
    else
      return this.disableBE(index)
  }

  /**
   * Set the bit at little-endian index
   * 
   * @param index 
   * @param value 
   * @returns 
   */
  setLE(index: number, value: boolean) {
    if (value)
      return this.enableLE(index)
    else
      return this.disableLE(index)
  }

  /**
   * Get first count bits
   * 
   * @param count number of bits to get
   * @returns 
   */
  first(count: number) {
    return this.value >> (this.length - count)
  }

  /**
   * Get last count bits
   * 
   * @param count number of bits to get
   * @returns 
   */
  last(count: number) {
    return this.value & ((1 << count) - 1)
  }
}