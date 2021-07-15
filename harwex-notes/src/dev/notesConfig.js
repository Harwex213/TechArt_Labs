import notesExample from "./notes";

const InitMyNotesPageDev = () => {
    if (!localStorage.getItem("notes")) {
        localStorage.setItem("notes", JSON.stringify(notesExample));
    }
};

export { InitMyNotesPageDev };
