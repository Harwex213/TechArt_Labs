import notesExample from "./notes";

const devCheckMyNotes = () => {
    if (!localStorage.getItem("notes")) {
        localStorage.setItem("notes", JSON.stringify(notesExample));
    }
};

export { devCheckMyNotes };
