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
                <IonItemOption color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem onClick={onClick}>
                <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>{games[id].title}</IonCardTitle>
                        <IonCardSubtitle>{games[id].status}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        {games[id].descrip}
                    </IonCardContent>
                </IonCard>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default GameCard;
