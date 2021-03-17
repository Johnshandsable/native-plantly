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

  /*
  detailedPlant.main_species
  ----------------------------------------------
  author: "Hogg ex Sweet"
  ​​
  bibliography: "Brit. Fl. Gard. 2: t. 175 (1826)"
  ​​
  common_name: "Largeflower tickseed"
  ​​
  common_names: Object { en: (8) […], zh: (1) […], fr: (2) […], … }
  ​​
  distribution: Object { native: (33) […], introduced: (16) […] }
  ​​
  distributions: Object { native: (33) […], introduced: (16) […] }
  ​​
  duration: null
  ​​
  edible: false
  ​​
  edible_part: null
  ​​
  family: "Asteraceae"
  ​​
  family_common_name: "Aster family"
  ​​
  flower: Object { color: null, conspicuous: null }
  ​​
  foliage: Object { texture: null, color: null, leaf_retention: null }
  ​​
  fruit_or_seed: Object { conspicuous: null, color: null, shape: null, … }
  ​​
  genus: "Coreopsis"
  ​​
  genus_id: 976
  ​​
  growth: Object { description: null, sowing: null, days_to_harvest: null, … }
  ​​
  id: 123147
  ​​
  image_url: "https://bs.plantnet.org/image/o/46e86ad3b79dc3285ce57809bd7c82a1c5011a9b"
  ​​
  images: Object { flower: (2) […], fruit: (1) […], leaf: (2) […], … }
  ​​
  links: Object { self: "/api/v1/species/coreopsis-grandiflora", plant: "/api/v1/plants/coreopsis-grandiflora", genus: "/api/v1/genus/coreopsis" }
  ​​
  observations: "E. Canada to U.S.A."
  ​​
  rank: "species"
  ​​
  scientific_name: "Coreopsis grandiflora"
  ​​
  slug: "coreopsis-grandiflora"
  ​​
  sources: Array(8) [ {…}, {…}, {…}, … ]
  ​​
  specifications: Object { ligneous_type: null, growth_form: null, growth_habit: "Forb/herb", … }
  ​​
  status: "accepted"
  ​​
  synonyms: Array(13) [ {…}, {…}, {…}, … ]
  ​​
  vegetable: false
  ​​
  year: 1826
  */

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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailView;
