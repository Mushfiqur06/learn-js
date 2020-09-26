export default function input(props) {
  let inp = null;

  switch (props.type) {
    case "INPUT":
      inp = document.createElement("input");
      inp.type = "text";
      inp.placeholder = props.attr.placeholder;
      inp.className = props.attr.className;
      inp.required = props.attr.required;
      inp.name = props.attr.name;
      return inp;
    case "DROPDOWN":
      break;
    default:
      console.log("Please Select Option");
  }
}

//
