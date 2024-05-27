import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../contactsDum";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return { contact };
}

export default function Root() {
    const { contacts } = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {/* Client side routing allows our app to update the URL without requesting another document from the server. Instead, the app can immediately render new UI. Let's make it happen with <Link>. */}
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div >

            {/* We need to tell the root route where we want it to render its child routes. We do that with <Outlet>. */}
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}