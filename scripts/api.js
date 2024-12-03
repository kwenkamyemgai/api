fetch(`https://swapi.tech/api/films`)
  .then((res) => {
    return res.json()
  })
  .then(data => {
    console.log(data)

    const tit1 = document.getElementById('yem1')
    const tit2 = document.getElementById('yem2')
    const tit3 = document.getElementById('yem3')
    const tit4 = document.getElementById('yem4')
    const tit5 = document.getElementById('yem5')
    const tit6 = document.getElementById('yem6')
    tit1.innerHTML = `film name: ${data.result[0].properties.title}`
    tit2.innerHTML = `film name: ${data.result[1].properties.title}`
    tit3.innerHTML = `film name: ${data.result[2].properties.title}`
    tit4.innerHTML = `film name: ${data.result[3].properties.title}`
    tit5.innerHTML = `film name: ${data.result[4].properties.title}`
    tit6.innerHTML = `film name: ${data.result[5].properties.title}`
  })
