let data = [];

async function fetchData() {
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/distritos",
  );
  data = await response.json();
}

async function setData() {
    await fetchData();
    const element = document.getElementById('data')

    const reduceData = data.reduce((acc, value) => {
        if (value.municipio?.microrregiao?.mesorregiao?.UF?.sigla === "PR") {
            acc += 1;
        }
        return acc;
    }, 0);

    element.innerHTML = reduceData
}

setData();