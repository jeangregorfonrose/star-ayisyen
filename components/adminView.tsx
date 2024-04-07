import { Plus, SquarePen, Trash2 } from "lucide-react";
import styles from "@/styles/adminview.module.css";
import { useEffect, useState } from "react";
import { IStar } from "@/utils/interfaces";
import Image from "next/image";

interface Iprops {
  cancelHandler: Function;
  addHandler: Function;
}

function AddStarForm(props: Iprops) {
  const [name, setName] = useState("");

  // const addStar = async () => {
  //   try {
  //     let res = await fetch("")
      
  //   } catch (error) {
      
  //   }
  // };

  return (
    <div id={styles.newArtistContainer}>
      <div id={styles.form}>
        <input
          id={styles.input}
          type="text"
          name="name"
          placeholder="Name of the artist"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div id={styles.buttonsActions}>
          <button
            id={styles.addButton}
            className="button"
            onClick={() => props.addHandler(name)}
          >
            Add
          </button>
          <button
            id={styles.deleteButton}
            className="button"
            onClick={() => props.cancelHandler()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminView() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [stars, setStars] = useState<IStar[]>([]);

  const getStars = async () => {
    try {
      let res = await fetch("/api/stars");

      if (!res.ok) throw new Error("Could not get artists.");

      let resJson = await res.json();

      setStars(resJson.data);

    } catch (err) {

      console.log(err);

    }
  };

  // Get artists from database
  useEffect(() => {
    getStars();
  }, []);

  const hideForm = () => {
    setShowForm(false);
  };

  const addArtist = (name: string) => {
    alert("Adding  " + name + "...");
    // TODO: Implement adding an artist to the database
    hideForm();
  };

  return (
    <>
      <section id={styles.adminSection}>
        <div className="content">
          <div className={styles.head}>
            <input
              id={styles.search}
              type="text"
              placeholder="Search for an artist"
            ></input>
            <button
              className="button"
              onClick={() => setShowForm((prev) => !prev)}
            >
              <Plus />
              Add new artist
            </button>
          </div>
          <div id={styles.separator}></div>
          <div className="list">
            <ul id={styles.listContainer}>
              {stars ? stars.map((star: IStar) => {
                return (
                  <li key={star.starName} className={styles.star}>
                    <div className={styles.info}>
                      <div className={styles.pic}></div>
                      <h3>{star.starName}</h3>
                    </div>

                    <div className={styles.actions}>
                      <SquarePen className={styles.icon} color="#55d38b" />
                      <Trash2 className={styles.icon} color="#d35555" />
                    </div>
                  </li>
                );
              }) : <div>No stars in the database</div>}
            </ul>
          </div>
        </div>
      </section>
      {showForm && (
        <addStarForm addHandler={addArtist} cancelHandler={hideForm} />
      )}
    </>
  );
}
