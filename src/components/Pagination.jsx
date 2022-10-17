import styles from "./Pagination.module.sass";
import { Container, Button } from "react-bootstrap";

export function Pagination({data, handleClick}) {
  return (
    <Container className={styles.Pagination}>
      {data.previous && (
        <Button
          variant="warning"
          className="button"
          onClick={() => handleClick(data.previous)}
        >
          ⇠ Voltar
        </Button>
      )}
      <Button
        variant="warning"
        className="button"
        onClick={() => handleClick(data.next)}
      >
        Avançar ⇢
      </Button>
    </Container>
  );
}
