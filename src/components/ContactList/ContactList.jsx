import { getSelectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { getSelectContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export const ContactList = () => {
  const contacts = useSelector(getSelectContacts);
  const filter = useSelector(getSelectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
