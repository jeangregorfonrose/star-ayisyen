import { ChangeEvent, useEffect, useState } from "react";
import styles from "../styles/searchInput.module.css";
import { IStar } from "@/utils/interfaces";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<IStar[]>([]);

  useEffect(() => {
    // If search term  is empty, don't fetch
    if (searchTerm === "") return;

    fetch(`/api/search/${searchTerm}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResults(response.data);
      });
  }, [searchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  // TODO: Fix input radius issue
  return (
    <div id={styles.searchContainer}>
      <input
        id={styles.searchInput}
        type="text"
        placeholder="Antre non star wap chehce a"
        value={searchTerm}
        onChange={(e) => handleInputChange(e)}
      />

      {results.length != 0 && (
        <ul id={styles.searchResults}>
          {results.map((star: IStar) => {
            // Get info from result
            const starName = star.starName;
            const occupations = star.occupations;
            const image = star.imageUrl;

            return (
              <li key={star.starName}>
                <div
                  className={styles.profilePic}
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className={styles.resultDesc}>
                  <p className={styles.resultName}>{starName}</p>
                  <p className={styles.resultTitle}>
                    {occupations.toString().replaceAll(",", " - ")}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
