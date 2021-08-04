const RoutePaths = {
    any: "*",
    empty: "/",
    auth: "/authorization",
    reg: "/registration",
    movies: "/movies",
    about: "/about",
    notFound: "/not-found",
};

const RoutePathsId = new Map([
    [RoutePaths.movies, "0"],
    [RoutePaths.about, "1"],
    [RoutePaths.notFound, "2"],
]);

export { RoutePaths, RoutePathsId };
