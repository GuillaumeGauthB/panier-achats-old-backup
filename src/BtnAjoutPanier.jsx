import './BtnAjoutPanier.scss';
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier () {
    return(
        <Badge badgeContent={2} color="primary">
            <button className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>
    );
}