import { useState } from "react";
import { Target } from "../module/module";

export const Form = () => {

    const[form,setForm]=useState({name: ''});

    let container = {}
    let rgb = ""
        const handleNameChange = ({target}:Target) => {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}));
        }

        if (parseInt(form.name.slice(1,), 16) && form.name.length == 7) {
            container = {
                width: "100vw",
                height: "100vh",
                background: form.name
            }

            rgb = `rgb(${parseInt(form.name.slice(1, 3), 16)},${parseInt(form.name.slice(3, 5), 16)},${parseInt(form.name.slice(5, 7), 16)})`    
        
          } else {
            rgb = 'Ошибка'
          }



        return (
            <div style={container} className="color">
                <form>
                    <input
                        id="name" name="name"
                        value={form.name}
                        onChange={handleNameChange}/>
                    <input id="rgb" name="rgb"
                        value={rgb}
                        onChange={handleNameChange} />
                </form>
            </div>
  )
}
