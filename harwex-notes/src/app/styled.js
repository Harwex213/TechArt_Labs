const AppStyle = {
    app: {
        background: "#fff",
    },
    app__header: {
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "#fff",
        borderBottom: "2px solid rgb(240, 242, 245)",
    },
    app__content: {
        height: "calc(100vh - 64px)",
        marginTop: "64px",
    },
    app__navbar: {
        position: "fixed",
        zIndex: 1,
        left: "0",
        height: "100vh",
        borderRight: "1px solid rgb(240, 242, 245)",
    },
    navbar_expanderButton: {
        display: "flex",
        position: "absolute",
        top: "calc(50% - 32px)",
        right: "-16px",
        justifyContent: "center",
        alignItems: "center",
    },
    navbar__content: { borderRight: "none" },
    app__page: { transition: "all 0.2s" },
    app__page_marginLeftSmall: { marginLeft: "50px" },
    app__page_marginLeftLarge: { marginLeft: "200px" },
};

export default AppStyle;
