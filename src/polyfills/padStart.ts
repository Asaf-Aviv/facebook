/* eslint-disable */
export default () => {
  if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength >>= 0
      padString = String((typeof padString !== 'undefined' ? padString : ' '))
      if (this.length > targetLength) {
        return String(this)
      }
      targetLength -= this.length
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length)
      }
      return padString.slice(0, targetLength) + String(this)
    }
  }
}
