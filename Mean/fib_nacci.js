function fib() {
  // Some variables here
  var x = 0
  var y = 1
  function nacci() {
    var z = x
    x = y
    y = x + z
    console.log(z);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
