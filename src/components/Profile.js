import { useContext } from "react";
import { UserContext } from "../userContext";
import { NoiseContext } from '../noiseContext';
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import Button from "@mui/joy/Button";

function Profile(){
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const noiseContext = useContext(NoiseContext);
    const { noiseData, setNoiseData } = noiseContext;

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
                <Typography level="body2">
                    Noise data lenght: {noiseData.length}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Profile;