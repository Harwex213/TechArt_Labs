const RoutePaths = {
    any: "*",
    empty: "/",
    movies: "/notes",
    about: "/about",
    notFound: "/not-found",
};

const RoutePathsId = new Map([
    [RoutePaths.movies, "0"],
    [RoutePaths.about, "1"],
    [RoutePaths.notFound, "2"],
]);

export { RoutePaths, RoutePathsId };
