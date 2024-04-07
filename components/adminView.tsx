import { Plus, SquarePen, Trash2 } from "lucide-react";
import styles from "@/styles/adminview.module.css";
import { useState } from "react";

interface Iprops {
  cancelHandler: Function;
  addHandler: Function;
}

function AddArtistForm(props: Iprops) {
  const [name, setName] = useState("");

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
  const [showForm, setShowForm] = useState(false);

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
              <li className={styles.star}>
                <div className={styles.info}>
                  <div className={styles.pic}></div>
                  <h3>Name</h3>
                </div>

                <div className={styles.actions}>
                  <SquarePen className={styles.icon} color="#55d38b" />
                  <Trash2 className={styles.icon} color="#d35555" />
                </div>
              </li>
              <li className={styles.star}>
                <div className={styles.info}>
                  <div className={styles.pic}></div>
                  <h3>Name</h3>
                </div>

                <div className={styles.actions}>
                  <SquarePen className={styles.icon} color="#55d38b" />
                  <Trash2 className={styles.icon} color="#d35555" />
                </div>
              </li>
              <li className={styles.star}>
                <div className={styles.info}>
                  <div className={styles.pic}></div>
                  <h3>Name</h3>
                </div>

                <div className={styles.actions}>
                  <SquarePen className={styles.icon} color="#55d38b" />
                  <Trash2 className={styles.icon} color="#d35555" />
                </div>
              </li>
              <li className={styles.star}>
                <div className={styles.info}>
                  <div className={styles.pic}></div>
                  <h3>Name</h3>
                </div>

                <div className={styles.actions}>
                  <SquarePen className={styles.icon} color="#55d38b" />
                  <Trash2 className={styles.icon} color="#d35555" />
                </div>
              </li>
              <li className={styles.star}>
                <div className={styles.info}>
                  <div className={styles.pic}></div>
                  <h3>Name</h3>
                </div>

                <div className={styles.actions}>
                  <SquarePen className={styles.icon} color="#55d38b" />
                  <Trash2 className={styles.icon} color="#d35555" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {showForm && <AddArtistForm addHandler={addArtist} cancelHandler={hideForm} />}
    </>
  );
}
