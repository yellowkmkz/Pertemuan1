async function getData() {
  const data = await fetch("data.json").then((res) =>
    res.json()
  );

  return data;
}

const run = async () => {
  const contentData = await getData()
  console.log(contentData)
  console.log('test b')

  const table = document.querySelector('section#content')

  for (let i = 0; i < contentData.length; i++) {
    table.innerHTML += `
    <div class="card">
      <img src="${contentData[i].image}" />
      <span style="padding: 5px;">${contentData[i].type}</span>
      <span style="padding: 5px;">${contentData[i].price}</span>
    </div>
        `
  }
}

run()