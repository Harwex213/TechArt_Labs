const Styles = {
    layout: {
        background: "#fff",
    },
    noteList: {
        height: "100%",
        transition: "all 0.2s",
    },
    noteListRow: {
        padding: "20px",
    },
    sider: {
        position: "fixed",
        zIndex: 1,
        right: "0",
        height: "100vh",
        borderLeft: "1px solid rgb(240, 242, 245)",
        padding: "10px 0 0 20px",
    },
    siderExpander: {
        display: "flex",
        position: "absolute",
        top: "calc(50% - 32px)",
        left: "-16px",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default Styles;
