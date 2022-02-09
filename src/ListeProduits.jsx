import './ListeProduits.scss';
import Produit from './Produit.jsx';
import lesProduits from './data/produits.json'

export default function ListeProduits(){
  console.log('La variable lesProduits : ', lesProduits);
  // let notes = [59.566, 78.23, 85.258, 35.9954];

  // Remarquer l'utilisation des fonctions fléchées et de la méthode map
  // let notesArrondies = notes.map(uneNote => uneNote.toFixed(1)-0);

  //Méthode 1 (programmation impérative, avec une boucle for)
  // let composantsProduits = [];
  // Parcourir le tableau lesProduits et générer un composant Produit pour chaque élément
  // for (let i=0; i<lesProduits.length;i++){
  //   composantsProduits.push(<Produit nom={lesProduits[i].nom} 
  //                       prix={lesProduits[i].prix} pid={lesProduits[i].id} />);
  // }
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
              {
                lesProduits.map(p => <Produit key={p.id} nom={p.nom} 
                                        prix={p.prix} pid={p.id}/>)
              }
            </div>
          </section>
    ); 
}