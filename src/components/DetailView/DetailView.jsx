import { useSelector } from 'react-redux';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Carousel.css';

function DetailView() {
  const detailedPlant = useSelector((store) => store.plants.singlePlantReducer);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      height: 'fixed',
    },
  }));
  // Setup classes
  const classes = useStyles();

  console.log(detailedPlant);
  return (
    <div className={classes.root}>
      {' '}
      {/* spacing of Grid must be used on container */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card>
            <CardActionArea>
              {/* Image  */}
              {detailedPlant.image_url ? (
                <img
                  className="card-image"
                  name={detailedPlant.slug}
                  // onClick={handleClickGoToDetailView}
                  src={detailedPlant.image_url}
                  alt={detailedPlant.common_name}
                />
              ) : (
                // Default Image
                <img
                  className="card-image"
                  name={detailedPlant.slug}
                  // onClick={handleClickGoToDetailView}
                  src={process.env.PUBLIC_URL + '/sumac.jpg'}
                  alt={detailedPlant.common_name}
                />
              )}
              <CardContent>
                {/* Common Name */}
                <Typography gutterBottom variant="h5" component="h2">
                  {detailedPlant.common_name}
                </Typography>
                {/* Family Name */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Family: {detailedPlant.family_common_name}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {detailedPlant.main_species.growth.description
                    ? detailedPlant.main_species.growth.description
                    : 'unknown origin'}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to List
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Image Carousel */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <div className="carousel">hello</div>
        </Grid>

        {/* Details about Plant */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.specifications.average_height.cm -> cm */}
                Average height:{' '}
                {detailedPlant.main_species.specifications.average_height.cm
                  ? detailedPlant.main_species.specifications.average_height.cm
                  : 'unknown'}
              </Typography>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.specifications.maximum_height.cm -> cm */}
                Max height:{' '}
                {detailedPlant.main_species.specifications.maximum_height.cm
                  ? detailedPlant.main_species.specifications.maximum_height.cm
                  : 'unknown'}
              </Typography>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.duration -> perennial, etc. */}
                Duration:{' '}
                {detailedPlant.main_species.duration
                  ? detailedPlant.main_species.duration
                  : 'unknown'}
              </Typography>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.edible */}
                Edible: {detailedPlant.main_species.edible ? 'yes' : 'no'}
              </Typography>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.flower.color */}
                Flower Color:{' '}
                {detailedPlant.main_species.flower.color
                  ? detailedPlant.main_species.flower.color
                  : 'none'}
              </Typography>
              <Typography gutterBottom component="p">
                {/* detailedPlant.main_species.specifications.toxicity */}
                Toxic:{' '}
                {detailedPlant.main_species.specifications.toxicity
                  ? detailedPlant.main_species.specifications.toxicity
                  : 'unknown'}
              </Typography>

              <Typography gutterBottom component="p">
                {/* {detailedPlant.main_species.sources.map((source) => {
                  return source;
                })} */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailView;
