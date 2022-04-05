import styles from "../styles/Home.module.css";
import Button from "../components/helpers/Button";
import DottedPart from "../components/helpers/DottedPart";
import Input from "../components/helpers/Input";
import Greeting from "../components/helpers/Greeting";
export default function Home() {
  return (
    <div>
      <Button text="Test" isPrimary={false}></Button>
      <DottedPart></DottedPart>
      <Input isTextArea={false} placeholder="Name"></Input>
      <Input isTextArea={true} placeholder="Message"></Input>
      <Greeting></Greeting>
    </div>
  );
}
