import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// This is adapted from examples on https://mui.com/material-ui/react-card/
// this component is going to take some props
// let's say that the props have the following fields:
// name
// imageSource
// classYear
// major
// I've used destructuring to show the props we are expecting
export default function PersonCard({ name, classYear, major }) {
  return (
    <>
      <Box my={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class Year: {classYear}
            </Typography>
            <Typography variant="body2">Major: {major}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
