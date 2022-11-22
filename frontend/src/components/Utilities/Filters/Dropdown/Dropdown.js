import { Select } from "./Dropdown.styled.js";

export default function Dropdown() {
  //const [categories, setCategories] = useState([])
  //const token = useSelector(state => state.auth.accessToken)

  /*FETCH RESTAURANTS INIT

 //useEffect(() => {

     // if (token === undefined) navigate('/')

    
     const url = "https://motion.propulsion-home.ch/backend/api/users/?limit=250&offset=1000"
     const config = {
         method: "GET",
         headers: new Headers({
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
         }),
         // body: JSON.stringify(jsObject)
     }
 
     fetch(url, config).then(
         response => response.json())
         // .then(
         //     data => setNotificationCount(data.count))
         .then(
             data => setCategories(data.results))
 }, [token]); */

  const categories = ["{to be implemented}"];

  return (
    <>
      <Select name="category" className="category">
        <option value="" selected disabled hidden>
          Select a category...
        </option>
        {categories.map((category, idx) => {
          return <option key={idx} value={category}>{category}</option>;
        })}
      </Select>
    </>
  );
}
