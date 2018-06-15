const points = require("./data/points.json")["points"]

const MAX_PARALLEL_CALLS = 3
const currentCalls = []
const pendingCalls = []

const distanceHandler = (p1, p2, cb) => {  
  if (currentCalls.length >= MAX_PARALLEL_CALLS) {
      pendingCalls.push({ p1, p2, cb })
  } else {
      currentCalls.push({ p1, p2, cb })
      calculateDistance()
  }
}

const calculateDistance = () => {
  setTimeout(() => {
      const current = currentCalls.shift()
      const { p1, p2, cb } = current
      cb(p2 - p1)
      if (pendingCalls.length) {
          const next = pendingCalls.shift()
          distanceHandler(next.p1, next.p2, next.cb)
      }
  }, 1500);
}

points.forEach((item, index) => {
  distanceHandler(item.p1, item.p2, (distance) => {
    console.log(`Distance for item ${index + 1}: ${distance}`)
  })
})

