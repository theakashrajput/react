import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState(["traveling"]);

  const handleHobbiesChange = (value) => {
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((hobbie) => hobbie !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Two Way Binding in Input Field */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="username"
        />
        <br />
        <br />
        {/* Two Way Binding in Radio Buttons */}
        <label>
          <input
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            type="radio"
          />
          Male
        </label>
        <label>
          <input
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            type="radio"
          />
          Female
        </label>
        <br />
        <br />

        {/* Two Way Binding in Checkbox */}
        <label>
          <input
            checked={isChecked}
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          I agree to the terms and conditions
        </label>
        <br />
        <br />

        {/* Two Way Binding in Select Dropdown */}
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option disabled value="">
            Select City
          </option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="mumbai">Mumbai</option>
          <option value="Bhopal">Bhopal</option>
          <option value="hydrabad">Hydrabad</option>
          <option value="barmer">Barmer</option>
        </select>
        <br />
        <br />

        {/* Two Way Binding in Multiple Checkboxes */}
        <label>
          <input
            type="checkbox"
            value="reading"
            checked={hobbies.includes("reading")}
            onChange={(e) => handleHobbiesChange(e.target.value)}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="traveling"
            checked={hobbies.includes("traveling")}
            onChange={(e) => handleHobbiesChange(e.target.value)}
          />
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            value="coding"
            checked={hobbies.includes("coding")}
            onChange={(e) => handleHobbiesChange(e.target.value)}
          />
          Coding
        </label>
      </form>
      <h1>{name}</h1>
    </div>
  );
};

export default App;
