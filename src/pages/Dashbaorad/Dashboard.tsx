import {PageContainer} from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import {DashboardLayout} from "@toolpad/core/DashboardLayout";


interface DashboardProps {
    children: React.ReactNode;
}

function Dashboard({children}: DashboardProps) {
    return (
        <>
            <DashboardLayout>
                <PageContainer>
                    <Grid container spacing={1}>
                        {children}

                    </Grid>
                </PageContainer>
            </DashboardLayout></>
    );
}

export default Dashboard;