import "./styles.css";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>setInterval in React</h1>
      <Counter limit={4} title={"Counter Title"} />
      <Counter limit={10} title={"Counter Title"} />
      <Counter limit={40} title={"Counter Title"} />
      <Counter limit={60} title={"Counter Title"} />
    </div>
  );
}
