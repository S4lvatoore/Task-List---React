import { Form, useSubmit } from "react-router-dom";

function SearchForm({ query }) {
    const submit = useSubmit();

    return (
        <>
            <Form id="search-form" role="search">
                <input
                    id="q"
                    aria-label="Search tasks"
                    placeholder="Search"
                    type="search"
                    name="q"
                    defaultValue={query}
                    onChange={(event) => {
                        submit(event.currentTarget.form, {replace: true}); // Добавьте replace: true
                    }}
                />

                <div id="search-spinner" aria-hidden hidden={true}/>
                <div className="sr-only" aria-live="polite"></div>
            </Form>
        </>
    );
}

export default SearchForm;