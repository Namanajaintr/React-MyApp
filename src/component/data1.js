import info from "./data";

function Persons() {
  return (
    <div>
      <h1>Persons Data</h1>
      <ul>
        {info.map((val, ind) => {
          return <li key={ind}>{val.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Persons;
