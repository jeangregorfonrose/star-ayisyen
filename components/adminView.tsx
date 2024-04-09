import { Plus, SquarePen, Trash2 } from "lucide-react";
import styles from "@/styles/adminview.module.css";
import { useEffect, useState } from "react";
import { IResponse, IStar } from "@/utils/interfaces";

interface Iprops {
  cancelHandler: Function;
}

function AddStarForm(props: Iprops) {
  const [name, setName] = useState("");

  const addStar = async () => {
    try {
      // Create new star
      const star: IStar = {
        fname: "Unknown",
        lname: "Unknown",
        starName: name,
        otherNames: [],
        occupations: [],
        birthDate: new Date(0),
        birthPlace: {
          country: "Unknown",
          department: "Unknown",
          city: "Unknown",
        },
        deathDate: new Date(0),
        imageUrl: "",
        bio: "Unknown",
        awards: [],
        socials: [],
        createdDate: new Date(0),
        updatedDate: new Date(0),
      };

      // Assign starName
      star.starName = name;
    
      let res = await fetch("/api/star", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(star),
      });

      const response : IResponse = await res.json();

      if (!res.ok) throw new Error(response.message || "HTTP error");

      if(!response.success) throw new Error(response.message)

      // Star was added successfully
      alert("Star " +  name + " has been added!");
      setName("")
      props.cancelHandler()
      
    } catch (error: any) {
      console.log("Error: ", error);
    }
  };

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
            onClick={() => addStar()}
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
  }, [showForm]);

  const hideForm = () => {
    setShowForm(false);
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
        <AddStarForm cancelHandler={hideForm} />
      )}
    </>
  );
}
