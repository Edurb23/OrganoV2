import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const [times, setTimes] = useState( [
    {
      nome: 'Rocket League',
      cor: '#d8f7e9',
      
    },
    {
      nome: 'Rainbow Six Siege',
      cor: '#E8F8FF',
      
    },
    {
      nome: 'Warzone',
      cor: '#F0F8E2',
    },
     
    {
      nome: 'Valorant',
      cor: '#FDE7E8',
      
    },
    {
      nome: 'League of Legends',
      cor: '#FAE9F5',
      
    },
    {
      nome: 'Overwatch',
      cor: '#FFF5D9',
      
    },
    {
      nome: 'Couter-Striker',
      cor: '#FFEEDF',
      
    },
  ])

  const inicial = [
    {
      nome: 'Tio Fino',
      funcao: 'GoalKeaper e Líbero',
      imagem: 'https://github.com/LucasMaiellaro.png',
      time: times[0].nome
    },
    {
      nome: 'Pereira',
      funcao: 'Líbero e Atacaque',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144000952282644500/308691658_451106247032488_4846731854346827528_n.png',
      time: times[0].nome
    },
    {
      nome: 'Tutz',
      funcao: 'Ataque',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144001374741344327/356948005_963785254868493_5620456784910647675_n.png',
      time: times[0].nome
    },
    {
      nome: 'Venom',
      funcao: 'Ataque',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144001781462994954/115963818_1906571352811816_7664623793072943811_n.png',
      time: times[0].nome
    },
    {
      nome: 'DRE',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144002856962248734/199816113_324203292415460_4413049102583737756_n.png',
      time: times[1].nome
    },
    {
      nome: 'Kenjola',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144003735740219512/309264407_117328681123858_8214617194974107823_n.png',
      time: times[1].nome
    },
    {
      nome: 'Rafinha',
      funcao: 'Intermediario',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144003977403453510/358784413_807379174341392_5409141725673998462_n.png',
      time: times[1].nome
    },
    {
      nome: 'Silvio',
      funcao: 'Coringa',
      imagem: 'https://github.com/silvio009.png',
      time: times[1].nome
    },
    {
      nome: 'Ramsés',
      funcao: 'Entry Fragger',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144004501716615168/image.png',
      time: times[1].nome
    },
    {
      nome: 'Rapha',
      funcao: 'Sniper',
      imagem: 'https://github.com/RaphaPab.png',
      time: times[2].nome
    },
    {
      nome: 'Vitor',
      funcao: 'Sniper',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144006809032609972/352586668_212050495056584_5448251560540989256_n.png',
      time: times[2].nome
    },
    {
      nome: 'Thiago 30hz.',
      funcao: 'runner',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144006849344057425/252074506_1039610453541161_1519815840931859481_n.png',
      time: times[2].nome
    },
    {
      nome: 'Eric',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144006897238814740/312286832_2387945218031558_1071025777643420287_n.png',
      time: times[2].nome
    },
    {
      nome: 'Bitola',
      funcao: 'Sentinela',
      imagem: 'https://github.com/DeNicola01.png',
      time: times[3].nome
    },
    {
      nome: 'Lucas',
      funcao: 'Duelista',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144408155418279957/299732017_2042422376147857_3630607100324684288_n.png',
      time: times[3].nome
    },
    {
      nome: 'Rypg',
      funcao: 'Controlador',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144408547564728401/317314942_151751010930259_8331211450778795133_n.png',
      time: times[3].nome
    },
    {
      nome: 'Omega',
      funcao: 'Flex',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144408916466335824/277860008_480664297137725_6779275824018707741_n.png',
      time: times[3].nome
    },
    {
      nome: 'JV',
      funcao: 'Iniciador',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144409362945814548/317776196_1564385357419738_679226328360930564_n.png',
      time: times[3].nome
    },
    {
      nome: 'Jamal',
      funcao: 'Top laner',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144412398325858344/300531619_1073889343257526_185454562744980554_n.png',
      time: times[4].nome
    },
    {
      nome: 'Boomer',
      funcao: 'Jungler',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144411960016904223/256876866_580302026515893_5883537445107352451_n.png',
      time: times[4].nome
    },
    {
      nome: 'Matheusilvbr',
      funcao: 'Mid laner',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144412300044943400/337815895_622660789725586_8959928445761770961_n.png',
      time: times[4].nome
    },
    {
      nome: 'G10',
      funcao: 'Ad carrys',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144412447126589510/359703128_285786040704095_9207309494618468330_n.png',
      time: times[4].nome
    },
    {
      nome: 'larisou',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144412338217295912/340448059_260587522991006_6389602225482235961_n.png',
      time: times[4].nome
    },
    
    {
      nome: 'Dezi',
      funcao: 'Tank/DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144414978519072768/232207766_516192219653404_5598471225196256884_n.png',
      time: times[5].nome
    },
    {
      nome: 'Bife',
      funcao: 'DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144415204369780866/355216182_821879549447668_883574037821961757_n.png',
      time: times[5].nome
    },
    {
      nome: 'Poki',
      funcao: 'DPS',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144419421566283886/jT4_JBHy_400x400.png',
      time: times[5].nome
    },
    {
      nome: 'Vini',
      funcao: 'Sup',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144418111433486467/image.png',
      time: times[5].nome
    },
    {
      nome: 'Givic',
      funcao: 'Sup',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144417921238569000/341928653_181175084392627_9073001516907346619_n.png',
      time: times[5].nome
    },
    {
      nome: 'Bocão',
      funcao: 'Lurker/Coringa',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144419935246897173/227779258_4001776999932052_3583539700384187845_n.png',
      time: times[6].nome
    },
    {
      nome: 'Beirute',
      funcao: 'In-Game Leader/Solo Bomb',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144419814576758834/315791187_493366829600451_6887181696317457223_n.png',
      time: times[6].nome
    },
    {
      nome: 'Fly',
      funcao: 'Awper',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144420293855678494/Odu8S0rm_400x400.png',
      time: times[6].nome
    },
    {
      nome: 'Gu',
      funcao: 'Entry Fragger/Awper',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144420077651886151/340603426_659399212690309_1421396566537181560_n.png',
      time: times[6].nome
    },
    {
      nome: 'Leozinho',
      funcao: 'Suporte',
      imagem: 'https://cdn.discordapp.com/attachments/1144000938458222672/1144419870205804634/290000316_167211935780472_3456725659652662117_n.png',
      time: times[6].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborador');
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor;
      }
      return time;
    }));
  }
  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) => 
        <Time
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
