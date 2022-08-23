import "./app.scss";
// importing options data and type
import { Option, Options } from "./components/Options/Options";
import Header from "./components/Header/Header";
// reusable component to display dropdown
import Dropdown from "./components/Dropdown/Dropdown";
import { useEffect, useState } from "react";

export default function App() {
  // setting dropdown list toggler
  const [showOptions, setShowOptions] = useState(false);
  // setting trigger for components rerender
  const [trigger, setTrigger] = useState(false);
  // setting array of selected options
  const [selection, setSelection] = useState(Options);
  // filtering options array to selections array
  useEffect(() => {
    const filtered = Options.filter((x) => x.selected === true);
    setSelection(filtered);
  }, [trigger]);

  return (
    <div className="app-container gap10">
      <Header />
      <div className="flex row gap10 flex-even">
        <div className="container flex col gap10">
          <div className="flex row">
            <div className="title">Display options</div>
            <div
              // toggling dropdown list
              onClick={() => setShowOptions(!showOptions)}
              className="arrow-down pointer"
            >
              <sub>&#9660;</sub>
            </div>
          </div>
{/* entire options list */}
          {showOptions &&
            Options.map((option) => {
              return (
                <div key={option.id}>
                  <Dropdown
                    option={option}
                    setTrigger={setTrigger}
                    trigger={trigger}
                  />
                </div>
              );
            })}
        </div>
        <div className="container">
          <div className="title">Selected options:</div>
          <div className="flex flex-even col">
{/* selected options list */}
            {selection &&
              selection.map((option: Option) => {
                return (
                  <div key={option.id}>
                    <Dropdown
                      option={option}
                      setTrigger={setTrigger}
                      trigger={trigger}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
