// Add delay to loop for making requests to API
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = [1, 2, 3, 4]
const doSomething = async () => {
  for (const item of list) {
    await sleep(1000)
    console.log('🦄')    
  }
}
doSomething()
