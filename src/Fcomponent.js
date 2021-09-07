// rfc komanda sozdaet funksionalniy komponent

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
}

export default function Fcomponent(props) {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox checked={checked} />
    </div>
  );
}
