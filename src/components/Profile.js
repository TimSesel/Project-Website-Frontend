import { useContext } from "react";
import { UserContext } from "../userContext";
import { NoiseContext } from '../noiseContext';
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardContent from "@mui/joy/CardContent";
import DecibelChart from "./DecibelChart";
import RadiusChart from "./RadiusChart";
import PieChart from "./PieChart";

function Profile(){
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const noiseContext = useContext(NoiseContext);
    const { noiseData} = noiseContext;

    // Filter the noise data for the current user
    const userNoiseData = noiseData.flatMap(noise => noise.data.filter(data => data.userId === user._id));
    console.log(userNoiseData);
    return (
        <Card>
            <Typography level="h3">
                Profile
            </Typography>
            <CardContent>
                <Typography level="body2">
                    Username: {user.username}
                </Typography>
                <Typography level="body2">
                    Email: {user.email}
                </Typography>
                {/*}
                <Typography level="body2">
                    Noise data lenght: {noiseData.length}
                </Typography>
                {*/}
                {userNoiseData.length > 0 ? (
                    <Card>
                        <Box sx={{pl:'15%', pr:'15%'}}><DecibelChart data={userNoiseData} /></Box>
                        <Box sx={{pl:'15%', pr:'15%'}}><RadiusChart data={userNoiseData} /></Box>
                        <Box sx={{pl:'25%', pr:'25%'}}><PieChart data={userNoiseData} /></Box>
                    </Card>
                ) : (
                    <Typography level="body2">No noise data available for this user.</Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default Profile;