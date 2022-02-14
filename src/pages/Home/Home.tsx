import { Button, Select } from "antd";

import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

const { Option } = Select;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div>Smash or Pass</div>
      <div>
        Version
        <Select defaultValue="pokemon" style={{ width: 120 }}>
          <Option value="pokemon">Pokémon</Option>
        </Select>
      </div>
      <Button
        onClick={() => {
          navigate(`/smash`);
        }}
        type="primary">
        Start
      </Button>
    </div>
  );
}
