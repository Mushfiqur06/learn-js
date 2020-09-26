import { getID } from "./helper";
import Form from "./views/contactForm/contactForm";

const root = getID("root");

let forms = Form();

root.append(forms);
