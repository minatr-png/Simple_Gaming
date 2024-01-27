import './GameCard.css';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle, IonItem, IonItemSliding, IonItemOptions, IonItemOption
} from '@ionic/react';

interface Game {
    title: string;
    status: "Playing" | "Finished" | "Backlog" | "Given up";
    descrip: string;
}
  
interface Games {
    [key: number]: Game;
}

interface GameCardProps {
    id: number;
    onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ id, onClick }) => {

    const games:Games = {
        1: {
          title: "Pokémon Yellow",
          status: "Playing",
          descrip: "Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases."
        },
        2: {
          title: "Mega Man X",
          status: "Finished",
          descrip: "Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases."
        },
        3: {
          title: "The Legend of Zelda",
          status: "Backlog",
          descrip: "Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases."
        },
        4: {
          title: "Pac-Man",
          status: "Given up",
          descrip: "Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases."
        },
        5: {
          title: "Super Mario World",
          status: "Backlog",
          descrip: "Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases."
        }
    };

    return (
        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption className="GiveUp" color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem onClick={onClick} lines="none">
                <div>
                    <img alt="Silhouette of mountains" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2022%2F09%2F14%2Fzelda-tears-of-the-kingdom-button-2k-1663127818777.jpg&f=1&nofb=1&ipt=80d69d5156f92ca51b09d7184d456cf6f40e593a7c290af4f0a7a6838c5c4e92&ipo=images" />
                    <div>
                        <div className="title">{games[id].title}</div>
                        <div className="descrip">{games[id].descrip}</div>
                        <div className="cardFooter">{games[id].status}</div>
                    </div>
                </div>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption className="Complete" color="danger">Delete</IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default GameCard;
