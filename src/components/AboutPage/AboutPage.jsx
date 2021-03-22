// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function AboutPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundImage: `url("https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30")`,
      // backgroundRepeat: `no-repeat`,
      height: 'fixed',
      flexGrow: 1,
      marginTop: 100,
      marginLeft: 20,
      marginRight: 20,
    },
    paper: {
      background: 'radial-gradient(circle, #83a668, white)',
      height: '100%',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">About</Typography>
        </Grid>
        {/* First Image */}
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Paper className={classes.paper}>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic1.JPG'}
              alt="Bee on Flower"
            ></img>
          </Paper>
        </Grid>
        {/* Question #1 */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">What are native plants?</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Paper>
        </Grid>
        {/* Question #2 */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Why choose native plants?</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Paper>
        </Grid>
        {/* Second Image */}
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          {/* <Paper className={classes.paper}> */}
          <img
            className="about-image"
            src={process.env.PUBLIC_URL + '/pic2.JPG'}
            alt="Bee on Flower"
          ></img>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;
