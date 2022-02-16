import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App() {
  const etatPanier = useState({});

  const panier = etatPanier[0];
  const setPanier = etatPanier[1];
  console.log("État du panier: ", panier)
  // let panier={
  // prd0001: {
  //     nom: "chandail blanc i guess",
  //     prix: 13.95,
  //     qte: 5
  // },
  // prd0002: {
  //   prix: 13.95,
  //   qte: 5
  // },
  // prd0003: {
  //   prix: 13.95,
  //   qte: 5
  // },
  // prd0004:{
  //   prix: 13.95,
  //   qte: 5
  // }
// };
  return (
    <div className="App">
      <Entete panier={panier} />
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <PiedPage panier={panier}/>
    </div>
  );
}

export default App;
