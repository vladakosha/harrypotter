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
         await axios.post("http://localhost:5001/wizards", form);
         reloadWizards()
       } catch (error) {
         console.error("Error adding wizard:", error);
       }
     };

     return (
       <div>
         <form action="" onSubmit={handleSubmit}>
           <input
             type="text"
             placeholder="name"
             value={form.name}
             onChange={(e) => setForm({ ...form, name: e.target.value })}
           />
           <input
             type="text"
             placeholder="house"
             value={form.house}
             onChange={(e) => setForm({ ...form, house: e.target.value })}
           />
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