import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete(props) {
    // console.log("Le panier dans Entête:", props.lePanier);
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
            <Badge badgeContent={Object.values(props.panier).length} color="success" >
                <ShoppingCartSharpIcon/>
            </Badge>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}