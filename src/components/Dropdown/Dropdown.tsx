import "./dropdown.scss";
import { Option, Options } from "../Options/Options";
import { Dispatch } from "react";

interface IProps {
  option: Option;
  setTrigger: Dispatch<boolean>;
  trigger: boolean;
}

export default function Dropdown(props: IProps) {
  function toggle(id: number) {
    let idx = Options.findIndex((i) => i.id === id);
    Options[idx].selected = !Options[idx].selected;
    props.setTrigger(!props.trigger);
  }
  return (
    <div className="list-item flex gap10 row">
      <div>
        <span
          onClick={() => toggle(props.option.id)}
          className={props.option.selected ? "green" : "blue"}
        >
          {" "}
          {props.option.selected ? "Deselect \u2713 " : "Select \u002B "}
        </span>
        Person: {props.option.first_name} {props.option.last_name}, gender:{" "}
        {props.option.gender}, age: {props.option.age},
      </div>
    </div>
  );
}
