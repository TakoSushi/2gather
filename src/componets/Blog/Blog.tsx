import styles from './styles.module.css';

function Blog() {
  return (
    <section className={styles.blMain}>
      <h1 className={styles.blH1}>Header</h1>
      <p className={styles.blP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero
        dsgfdgsdf sfgsdfgs atque doloremque vero magni aperiam expedita
        architecto, facere, sint cum ipsam quo, vel cumque? Eum itaque rerum
        similique corrupti sapiente.
      </p>
      <p className={styles.blNum}>{58}</p>
      <img alt="cucumber" />
    </section>
  );
}

export default Blog;
