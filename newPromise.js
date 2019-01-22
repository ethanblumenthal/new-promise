const sleep = (waitTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Wake up!')
    }, waitTime)
  })
}

const init = async () => {
  try {
    const timer = await sleep(3000)
    console.log(timer);
  } catch (err) {
    console.log(err)
  }
}

init()