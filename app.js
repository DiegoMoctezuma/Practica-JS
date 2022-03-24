const pokemonAPI = () => {
  const pokemonImput = document.getElementById("name-input");
  let pokemonSearch = pokemonImput.value.toLowerCase();
  /* Search Pokémon */
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`;
  /* Data */
  fetch(url)
    .then((res) => {
      /* Satus */
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 404) {
        errorname();
        pokeimg("./img/error-name.png");
      } else {
        console.log("Error");
      }
    })
    /* Data */
    .then((data) => {
      /* IMG */
      let pokemonImg = data.sprites.front_default;
      pokeimg(pokemonImg);
      /* Data */
      let pokemonName = data.forms[0].name;
      let pokemonId = data.id;
      pokename(pokemonName, pokemonId);
      /* Stats */
      let pokemonHp = data.stats;
      pokehp(pokemonHp);
      /* Type */
      let pokemonType = data.types;
      poketype(pokemonType);
    });
};

/* Functions */

/* IMG */
const pokeimg = (apiURL) => {
  let imgpoke = document.querySelector(".img-poke");
  imgpoke.setAttribute("src", apiURL);
};
/* Name */
const pokename = (apiName, apiid) => {
  let namepoke = document.querySelector(".name-pokemon");
  namepoke.innerHTML = `Name:${apiName} N°${apiid}`;
};
/* Error */
const errorname = () => {
  let errorpokemon = document.querySelector(".name-pokemon");
  errorpokemon.innerHTML = "Not Found";
};
/* Stats */
const pokehp = (apiHd) => {
  /* hp */
  let hppoke = document.getElementById("hp");
  hppoke.innerHTML = `HP:${apiHd[0].base_stat}`;
  /* atk */
  let atkpoke = document.getElementById("atk");
  atkpoke.innerHTML = `ATK:${apiHd[1].base_stat}`;
  /* def */
  let defpoke = document.getElementById("def");
  defpoke.innerHTML = `DEF:${apiHd[2].base_stat}`;
  /* sp-atk */
  let spatkpoke = document.getElementById("sp-atk");
  spatkpoke.innerHTML = `SP.ATK:${apiHd[3].base_stat}`;
  /* sp-def */
  let spdefpoke = document.getElementById("sp-def");
  spdefpoke.innerHTML = `SP.DEF:${apiHd[4].base_stat}`;
  /* speed */
  let speedpoke = document.getElementById("speed");
  speedpoke.innerHTML = `SPEED:${apiHd[5].base_stat}`;
};
/* Type */
const poketype = (apiType) => {
  let typepoke = document.querySelector(".type-poke");
  let type2poke = document.querySelector(".type2-poke");
  type2poke.innerHTML = "";
  typepoke.innerHTML = apiType[0].type.name;
  type2poke.innerHTML = apiType[1].type.name;
};
