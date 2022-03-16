
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(paka => {
        let mass = "";
        paka.map((vall) => {
            mass += `
        <div class="box">
        <div class="text1">${vall.category}</div>
      <div class="imgBox">  <img src=${vall.image} class="imges" alt="img"></div>
        <p class="text3">${vall.title}</p>
        <p class="text4">${vall.description}</p>
        <p class="text5">${vall.price}$</p>
    </div>
    `
        })
        document.querySelector(".container").innerHTML = (mass);
    })
    .catch(err => {
        document.querySelector(".container").innerHTML =
            (
                "<h2 style='color:white; '>Internet mavjud emas!!!</h2>"
            );

    })