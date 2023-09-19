import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState( [
    {
      id: uuidv4(),
      nome: 'Rocket League',
      cor: '#d8f7e9',
      
    },
    {
      id: uuidv4(),
      nome: 'Rainbow Six Siege',
      cor: '#E8F8FF',
      
    },
    {
      id: uuidv4(),
      nome: 'Warzone',
      cor: '#F0F8E2',
    },
     
    {
      id: uuidv4(),
      nome: 'Valorant',
      cor: '#FDE7E8',
      
    },
    {
      id: uuidv4(),
      nome: 'League of Legends',
      cor: '#FAE9F5',
      
    },
    {
      id: uuidv4(),
      nome: 'Overwatch',
      cor: '#FFF5D9',
      
    },
    {
      id: uuidv4(),
      nome: 'Couter-Striker',
      cor: '#FFEEDF',
      
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tio Fino',
      funcao: 'GoalKeaper e Líbero',
      imagem: 'https://github.com/LucasMaiellaro.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Pereira',
      funcao: 'Líbero e Atacaque',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144776659950637208/308691658_451106247032488_4846731854346827528_n.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tutz',
      funcao: 'Ataque',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144776775461777589/356948005_963785254868493_5620456784910647675_n.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Venom',
      funcao: 'Ataque',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144776989413216317/115963818_1906571352811816_7664623793072943811_n.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DRE',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144777332121415740/199816113_324203292415460_4413049102583737756_n.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kenjola',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144777407673413662/309264407_117328681123858_8214617194974107823_n.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rafinha',
      funcao: 'Intermediario',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144777508034711662/358784413_807379174341392_5409141725673998462_n.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Silvio',
      funcao: 'Coringa',
      imagem: 'https://github.com/silvio009.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ramsés',
      funcao: 'Entry Fragger',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144777658241130636/342709001_1205837763428877_5699560682985321964_n.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rapha',
      funcao: 'Sniper',
      imagem: 'https://github.com/RaphaPab.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vitor',
      funcao: 'Sniper',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144778557701238916/352586668_212050495056584_5448251560540989256_n.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Thiago 30hz.',
      funcao: 'runner',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144778557701238916/352586668_212050495056584_5448251560540989256_n.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Eric',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144778678870474885/312286832_2387945218031558_1071025777643420287_n.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bitola',
      funcao: 'Sentinela',
      imagem: 'https://github.com/DeNicola01.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lucas',
      funcao: 'Duelista',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144779724334301305/299732017_2042422376147857_3630607100324684288_n.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rypg',
      funcao: 'Controlador',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144780016572436510/317314942_151751010930259_8331211450778795133_n.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Omega',
      funcao: 'Flex',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144780059014598736/277860008_480664297137725_6779275824018707741_n.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JV',
      funcao: 'Iniciador',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1144780858646073404/317776196_1564385357419738_679226328360930564_n.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jamal',
      funcao: 'Top laner',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153483722402840586/300531619_1073889343257526_185454562744980554_n.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Boomer',
      funcao: 'Jungler',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153483808012771459/256876866_580302026515893_5883537445107352451_n.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Matheusilvbr',
      funcao: 'Mid laner',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153483676819132486/337815895_622660789725586_8959928445761770961_n.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'G10',
      funcao: 'Ad carrys',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153483869803261972/370680066_806206877869733_3273304915257091725_n.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'larisou',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153483989911339099/340448059_260587522991006_6389602225482235961_n.png',
      time: times[4].nome
    },
    
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dezi',
      funcao: 'Tank/DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484230303686656/232207766_516192219653404_5598471225196256884_n.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bife',
      funcao: 'DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484276503949433/355216182_821879549447668_883574037821961757_n.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Poki',
      funcao: 'DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153534469014294619/6d0d4e19f5ec7810d7e996fa6d1d502d.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'mdiaz',
      funcao: 'Sup',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484344040620183/364541184_316648437691203_3465804707211614916_n.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Givic',
      funcao: 'Sup',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484536798261445/375755062_3445925048991500_3532475584189178786_n.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bocão',
      funcao: 'Lurker/Coringa',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484693191266414/280250692_1211091066361956_4447175069746347915_n.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Beirute',
      funcao: 'In-Game Leader/Solo Bomb',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484768772636712/315791187_493366829600451_6887181696317457223_n.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fly',
      funcao: 'Awper',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153485150072614983/ab6a7fca3bd2206bafa5e5404539bd77.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gu',
      funcao: 'Entry Fragger/Awper',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484817573359646/340603426_659399212690309_1421396566537181560_n.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Leozinho',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144776070214733977/1153484880445964318/290000316_167211935780472_3456725659652662117_n.png',
      time: times[6].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id == id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} 
      aoCadastrar={colaborador => 
      setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) => 
        <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={indice} time={time} 
          colaboradores={colaboradores.filter(colaborador =>
          colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
         />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
