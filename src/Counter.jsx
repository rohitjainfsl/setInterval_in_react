import { useEffect, useState } from "react";

export default function Counter({ limit, title }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      if (count === limit) clearInterval(interval);
      else setCount(count + 1);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <>
      <h3>{title}</h3>
      <p>{count}</p>
    </>
  );
}
