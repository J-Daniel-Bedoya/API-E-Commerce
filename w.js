const numbers = [4, 2, 1, 3, 5];

const iteracion = (arr) => {
  let i = 0
  let j = 0
  let costo = 0

  for (i = 0; i < arr.length-1; i++) {
    const min = Math.min(...arr.slice(i, arr.length))
    j = arr.indexOf(min);

    arr = [ 
      ...arr.slice(0,i), 
      ...arr.slice(i, j+1).reverse(), 
      ...arr.slice(j+1, arr.length)  
    ]
    console.log(arr)
    console.log("====================")
    costo += j-i+1

  }
  return `Costo: ${costo}`

}

// console.log(iteracion(numbers));

const sort = arr => {
  let i = 0
  let j = 0
  let costo = 0
  
  for(;i < arr.length-1; i++){
      j = arr.indexOf(Math.min(...arr.slice(i, arr.length)))
      
      arr = [ 
          ...arr.slice(0,i), 
          ...arr.slice(i, j+1).reverse(), 
          ...arr.slice(j+1, arr.length)  
      ]
      console.log(arr)
      console.log("====================")
      costo += j-i+1
  }
  return costo
}

// console.log(`Costo: ${sort([4,2,9,1,3,5])}`)

const script = () => {
  for(let i = 1; i < 100; i++) {
    const numMul3 = i % 3;
    const numMul5 = i % 5;
    if(numMul3 === 0 && numMul5 === 0) {
      console.log("SiteHost");
    }else if(numMul3 === 0) {
      console.log("Sitio");
    }else if(numMul5 === 0) {
      console.log("Host");
    }else {
      console.log(i)
    }
  }
}

console.log(script())