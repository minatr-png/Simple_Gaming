import { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonModal, IonButton } from '@ionic/react';
import GameCard from '../../components/GameCard/GameCard';
import './Tab1.css';

interface Game {
  title: string;
  status: "Playing" | "Finished" | "Backlog" | "Given up";
  descrip: string;
}

interface Games {
  [key: number]: Game;
}

const Tab1: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<number>(-1)
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

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

  const openModal = (id: number) => {
    setSelectedGame(id);
    if (modal.current) {
      modal.current.present();
    }
  };

  const closeModal = () => {
    setSelectedGame(-1);
    if (modal.current) {
      modal.current.dismiss();
    }
  };

  return (
    <IonPage ref={page}>
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle>Currently Playing</IonTitle>
        </IonToolbar>
        <IonList>
          <GameCard id={1} onClick={() => openModal(1)}/>
          <GameCard id={2} onClick={() => openModal(2)}/>
          <GameCard id={3} onClick={() => openModal(3)}/>
          <GameCard id={4} onClick={() => openModal(4)}/>
          <GameCard id={5} onClick={() => openModal(5)}/>
        </IonList>

        <IonModal ref={modal} initialBreakpoint={0.5} breakpoints={[0, 0.5]}>
          <IonContent>
            <div>{games[selectedGame]?.title}</div>
            <div>{games[selectedGame]?.status}</div>
            <div>{games[selectedGame]?.descrip}</div>
            
            <IonButton onClick={closeModal}>Close Modal</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
