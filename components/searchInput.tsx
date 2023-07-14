import { ChangeEvent, useState } from 'react';
import styles from '../styles/searchInput.module.css';

// to be deleted
type result = {
  name: string,
  titles: string[],
  profileImg: string
};

const searchResults: result[] = [
  {
    name: "John Doe",
    titles: ["Actor", "Artist", "Entrepreneur"],
    profileImg: "../../public/mikaben.jpg",
  },
];

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [results, setResults] = useState<result[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      // TODO: to delete
      console.log(e.target.value);

      setSearchTerm(e.target.value);
      e.target.value == "" ? setResults([]) : setResults(searchResults);
    };

    // TODO: Fix input radius issue
    return (
      <div id={styles.searchContainer}>
        <input
          id={styles.searchInput}
          type="text"
          placeholder="Antre non moun nan wap chehce a"
          value={searchTerm}
          onChange={(e) => handleInputChange(e)}
        />

        {results.length != 0 && (
          <ul id={styles.searchResults}>
            {results.map((result: result) => {
              // Get info from result
              const name = result.name;
              const titles = result.titles;
              const image = result.profileImg;

              return (
                <li key={name}>
                  <div
                    className={styles.profilePic}
                    style={{ backgroundImage: `url('${image}')` }}
                  ></div>
                  <div className={styles.resultDesc}>
                    <p className={styles.resultName}>{name}</p>
                    <p className={styles.resultTitle}>
                      {titles.toString().replaceAll(",", " - ")}
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