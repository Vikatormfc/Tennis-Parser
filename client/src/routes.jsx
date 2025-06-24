
import Root from '@/components/Root';
import DashboardPage, { loader as dashboardLoader } from "@/pages/DashboardPage";
import RankingPage, { loader as rankingLoader } from "@/pages/RankingPage";
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "rankings",
                Component: RankingPage,
                loader: rankingLoader,
            },
            {
                path: "players/:slug?",
                Component: DashboardPage,
                loader: dashboardLoader,
            },
        ],
    },
]);