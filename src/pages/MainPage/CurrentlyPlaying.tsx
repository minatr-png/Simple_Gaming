import { useRef, useState } from 'react';
import { IonContent, IonPage, IonList, IonModal, IonButton, IonReorderGroup, IonReorder, ItemReorderEventDetail } from '@ionic/react';
import GameCard from '@GameCard';
import './CurrentlyPlaying.css';

interface Game {
  title: string;
  status: "Playing" | "Finished" | "Backlog" | "Given up";
  descrip: string;
}

interface Games {
  [key: number]: Game;
}

const CurrentlyPlaying: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<number>(-1)
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const games: Games = {
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

  const handleReorder =(event: CustomEvent<ItemReorderEventDetail>) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonPage ref={page}>
      <IonContent fullscreen>
        <h1>Currently Playing</h1>
        <IonList>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonReorder>
              <GameCard id={1} onClick={() => openModal(1)} />
            </IonReorder>
            <IonReorder>
              <GameCard id={2} onClick={() => openModal(2)} />
            </IonReorder>
            <IonReorder>
              <GameCard id={3} onClick={() => openModal(3)} />
            </IonReorder>
            <IonReorder>
              <GameCard id={4} onClick={() => openModal(4)} />
            </IonReorder>
            <IonReorder>
              <GameCard id={5} onClick={() => openModal(5)} />
            </IonReorder>
          </IonReorderGroup>
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

export default CurrentlyPlaying;
