import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Features from "../pages/Features";
import PrivacyAndSafty from "../pages/PrivacyAndSafty";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Features />,
            },
            {
                path: "privacyandsafty",
                element: <PrivacyAndSafty />,
            },
            {
                path: "registration",
                element: <Registration />
            },
            {
                path: "*",
                element: <h2>Error - 404</h2>,
            },
        ],
    },
]);

export default router;
