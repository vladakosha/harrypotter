import { useState } from "react";
import axios from 'axios'

const NewWizard = ({reloadWizards}) => {
    const [form, setForm] = useState({
      name: "",
      house: "",
      patronus: ""
    });

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         await axios.post(
           "https://harrypotter-backend-mc4w.vercel.app/wizards",
           form
         );
         reloadWizards()
       } catch (error) {
         console.error("Error adding wizard:", error);
       }
     };

     return (
       <div
         style={{ display: "flex", justifyContent: "center", padding: "15px" }}
       >
         <form
           action=""
           onSubmit={handleSubmit}
           style={{
             display: "flex",
             flexDirection: "column",
             width: "200px",
             height: "150px",
             justifyContent: "space-between",
           }}
         >
           <input
             type="text"
             placeholder="name"
             value={form.name}
             onChange={(e) => setForm({ ...form, name: e.target.value })}
           />
           <select
             value={form.house}
             onChange={(e) => setForm({ ...form, house: e.target.value })}
           >
             <option value="">Select a house</option>
             <option value="Gryffindor">Gryffindor</option>
             <option value="Slytherin">Slytherin</option>
             <option value="Ravenclaw">Ravenclaw</option>
             <option value="Hufflepuff">Hufflepuff</option>
           </select>
           <input
             type="text"
             placeholder="patronus"
             value={form.patronus}
             onChange={(e) => setForm({ ...form, patronus: e.target.value })}
           />
           <button type="submit">Add Wizard</button>
         </form>
       </div>
     );
}

export default NewWizard