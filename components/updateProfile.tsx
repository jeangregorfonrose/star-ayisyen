import { IStar } from "@/utils/interfaces";
import { useState } from "react";
import styles from "@/styles/updateProfile.module.css";
import { PlusSquareIcon } from "lucide-react";
import { occupations } from "@/utils/constants";

interface Iprops {
  star: IStar;
}

export default function UpdateProfile(props: Readonly<Iprops>) {
  const [originalStar] = useState<IStar>(props.star);
  const [star, setStar] = useState<IStar>(props.star);
  const [otherName, setOtherName] = useState<string>("");
  const [otherOccupation, setOtherOccupation] = useState<string>("");

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setStar((values) => ({ ...values, [name]: value }));
  };

  const handleOtherNameChange = (event: any) => {
    const value = event.target.value;

    setOtherName(value);
  };

  const handleOtherOccupationChange = (event: any) => {
    const value = event.target.value;

    setOtherOccupation(value);
  };

  const addOtherName = () => {
    if (otherName != "") {
      // copy otherNames array
      const names: string[] = [...star.otherNames];

      // add new name
      names.push(otherName);

      // add new otherNames array to star object
      setStar((values) => ({ ...values, otherNames: names }));
      setOtherName("");
    }
  };

  const addOtherOccupation = () => {
    if (otherOccupation != "") {
      // copy occupations array
      const occupations: string[] = [...star.occupations];

      // add new occupation
      occupations.push(otherOccupation);

      // add new otherNames array to star object
      setStar((values) => ({ ...values, occupations: occupations }));
      setOtherOccupation("");
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/star", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(star),
      });

      const response = await res.json();

      if(response.success) alert("Profile updated successfully");
      else alert("Error updating profile");
    } catch (error) {
      console.log(`Error! ${error}`);
    }
  };

  return (
    <>
      <section id={styles.updateSection}>
        <div className="content" id={styles.editCont}>
          <h1 id={styles.welcome}>
            Welcome {originalStar.starName}, here you can update your star
            profile
          </h1>

          <form id={styles.updateForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="fname" className={styles.inputLabel}>
              First Name:<br></br>
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="text"
                name="fname"
                value={star.fname}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="lname" className={styles.inputLabel}>
              Last Name:<br></br>
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="text"
                name="lname"
                value={star.lname}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="starName" className={styles.inputLabel}>
              Star Name:<br></br>
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="text"
                name="starName"
                value={star.starName}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="otherNames" className={styles.inputLabel}>
              Other Names:<br></br>
              {star.otherNames.map((name) => {
                return name;
              })}
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="text"
                name="otherNames"
                onChange={handleOtherNameChange}
                value={otherName}
              />
              <button onClick={addOtherName} className="button">
                <PlusSquareIcon />
                Add other name
              </button>
              <br></br>
            </label>

            <label htmlFor="occupations" className={styles.inputLabel}>
              Occupations:<br></br>
              {star.occupations.map((occupation) => {
                return occupation;
              })}
              <select
                className={`${styles.input} ${styles.inputEdit}`}
                name="occupations"
                onChange={handleOtherOccupationChange}
                value={otherOccupation}
              >
                <option value="">Select occupation to add</option>
                {occupations.map((occupation) => (
                  <option key={occupation} value={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
              <button onClick={addOtherOccupation} className="button">
                <PlusSquareIcon />
                Add other occupation
              </button>
              <br></br>
            </label>

            <label htmlFor="birthDate" className={styles.inputLabel}>
              Birthdate:<br></br>
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="date"
                name="birthDate"
                value={star.birthDate.toString()}
                onChange={handleChange}
              />
            </label>

            {/* <fieldset>
              <legend>BirthPlace:</legend>

              <label htmlFor="country" className={styles.inputLabel}>
                Country:<br></br>
                <input
                  className={`${styles.input} ${styles.inputEdit}`}
                  type="select"
                  name="country"
                  value={star.birthPlace.country}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="country" className={styles.inputLabel}>
                Department or State:<br></br>
                <input
                  className={`${styles.input} ${styles.inputEdit}`}
                  type="select"
                  name="country"
                  value={star.birthPlace.department}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="city" className={styles.inputLabel}>
                City:<br></br>
                <input
                  className={`${styles.input} ${styles.inputEdit}`}
                  type="select"
                  name="city"
                  value={star.birthPlace.city}
                  onChange={handleChange}
                />
              </label>
            </fieldset>

            <label htmlFor="awards" className={styles.inputLabel}>
              Awards:<br></br>
              <input
                className={`${styles.input} ${styles.inputEdit}`}
                type="text"
                name="awards"
                value={star.deathDate!.toString()}
                onChange={handleChange}
              />
            </label>

            <label
              htmlFor="bio"
              className={`${styles.input} ${styles.inputEdit}`}
            >
              Bio:<br></br>
              <textarea name="bio" id="bio" rows={4}></textarea>
            </label> */}
          </form>
        </div>
      </section>
      <div id={styles.actions}>
        <div className="content" id={styles.cont}>
          <button className="button">Cancel</button>
          <button className="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
