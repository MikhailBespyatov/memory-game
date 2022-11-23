import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MemoryCard } from "./components/MemoryCard";
import { gameItems } from "./constants";
import styles from "./styles.module.scss";
import { concatWords } from "./tests/concat";
import { getData, getFetchData } from "./utils/utils";

getData();
getFetchData();

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const gameItems2 = [...gameItems];
const allItems = shuffle(gameItems.concat(gameItems2));

const App = () => {
  const [items, setItems] = useState(allItems);
  const [openedItems, setOpenedItems] = useState<any[]>([]);

  const onCard = (i: number, opened: boolean) => {
    if (opened) return;
    if (openedItems.length === 2) {
      const closedItems = items.map((item) => ({ ...item, opened: false }));
      const openedItem = { ...closedItems[i], opened: true };
      setItems([
        ...closedItems.slice(0, i),
        openedItem,
        ...closedItems.slice(i + 1),
      ]);
      setOpenedItems([openedItem]);
    } else {
      const openedItem = { ...items[i], opened: true };
      setOpenedItems([...openedItems, openedItem]);
      setItems([...items.slice(0, i), openedItem, ...items.slice(i + 1)]);
      if (openedItems[0] && openedItem.id === openedItems[0].id) {
        setTimeout(
          () =>
            setItems(
              items.map((item) => (item.id === openedItem.id ? {} : item))
            ),
          500
        );
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map(({ src, opened }, i) => (
          <MemoryCard
            opened={opened}
            onClick={() => onCard(i, opened)}
            key={i.toString()}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
