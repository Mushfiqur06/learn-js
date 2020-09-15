import { create } from "./helper";

export function generateLi(book) {
  const li = create("li", { class: "list-group-item", id: book.id });
  const p = create("p");
  p.innerText = book.name;
  li.append(p);

  let span = create("span", { class: "price" });
  span.innerText = `${book.price} tk`;
  li.append(span);

  return li;
}
