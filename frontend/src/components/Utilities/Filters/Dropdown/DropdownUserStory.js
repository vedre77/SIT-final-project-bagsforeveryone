import { Select } from "./Dropdown.styled.js";

export default function Dropdown() {

  const categories = ["edit", "delete"];

  return (
    <>
      <Select name="category" className="category">
        <option value="" selected disabled hidden>
          <button>Edit</button>
        </option>
        {categories.map((category, idx) => {
          return <option key={idx} value={category}>{category}</option>;
        })}
      </Select>
    </>
  );
}
