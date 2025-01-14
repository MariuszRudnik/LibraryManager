import {Navigation, Router} from "@toolpad/core/AppProvider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import {extendTheme, styled} from "@mui/material/styles";
import * as React from "react";

export  const NAVIGATION: Navigation = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "orders",
        title: "Orders",
        icon: <ShoppingCartIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    {
        segment: "reports",
        title: "Reports",
        icon: <BarChartIcon />,
        children: [
            {
                segment: "sales",
                title: "Sales",
                icon: <DescriptionIcon />,
            },
            {
                segment: "traffic",
                title: "Traffic",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: "integrations",
        title: "Integrations",
        icon: <LayersIcon />,
    },
];

export  const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: "class",
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
export function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

export  const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));