const RoutePathsId = new Map([
    ["/notes", "0"],
    ["/shared-notes", "1"],
    ["/about", "2"],
    ["/not-found", "3"],
]);

const RoutePaths = {
    any: "*",
    empty: "/",
    notes: "/notes",
    sharedNotes: "/notes",
    about: "/about",
    notFound: "/not-found",
};

export { RoutePaths, RoutePathsId };
