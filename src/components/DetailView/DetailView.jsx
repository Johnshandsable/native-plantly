import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// CUSTOM COMPONENTS
import Carousel from './Carousel';
import DetailViewDropdown from '../Dropdown/DetailViewDropdown';
import NavigateHomeButton from '../Buttons/NavigateHomeButton';
import bundleCarouselData from '../../helpers/BundleCarouselData';

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
  const dispatch = useDispatch();
  const detailedPlant = useSelector((store) => store.plants.singlePlantReducer);
  const bundledData = bundleCarouselData(detailedPlant.main_species.images);
  const dropdownList = useSelector((store) => store.garden);

  // ON LOAD GET DROPDOWN
  useEffect(() => {
    getGardenDropdown();
  }, []);
  // USED FOR GETTING DROPDOWN
  const getGardenDropdown = () => {
    dispatch({
      type: 'GET_DROPDOWN',
    });
  }; // end getGardenDropdown

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      height: 'fixed',
    },
    spacing: {
      marginTop: 20,
      marginBottom: 20,
    },
  }));
  // Setup classes
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {' '}
      {/* spacing of Grid must be used on container */}
      <NavigateHomeButton />
      <div className={classes.spacing}></div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card>
            <CardActionArea>
              {/* Image  */}
              {detailedPlant.image_url ? (
                <img
                  className="card-image"
                  name={detailedPlant.slug}
                  src={detailedPlant.image_url}
                  alt={detailedPlant.common_name}
                />
              ) : (
                // Default Image
                <img
                  className="card-image"
                  name={detailedPlant.slug}
                  src={process.env.PUBLIC_URL + '/image_not_found.jpg'}
                  alt={detailedPlant.common_name}
                />
              )}
              <CardContent>
                {/* Common Name */}
                <Typography gutterBottom variant="h5" component="h2">
                  {detailedPlant.main_species.common_name}
                </Typography>
                {/* Family Name */}
                <Typography variant="body2" color="textSecondary" component="p">
                  {detailedPlant.family_common_name
                    ? detailedPlant.family_common_name
                    : 'Aster family'}
                </Typography>
                <br />

                <Typography variant="body2" color="textSecondary" component="p">
                  {detailedPlant.main_species.growth.description
                    ? detailedPlant.main_species.growth.description
                    : 'Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria). By one definition, plants form the clade Viridiplantae (Latin name for "green plants"), a group that includes the flowering plants, conifers and other gymnosperms, ferns and their allies, hornworts, liverworts, mosses, and the green algae, but excludes the red and brown algae.'}
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DetailViewDropdown
                plant={detailedPlant}
                dropdownList={dropdownList}
              />
            </CardActions>
          </Card>
        </Grid>

        {/* Image Carousel */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card>
            <Carousel bundledData={bundledData} />
          </Card>
        </Grid>

        {/* Details about Plant */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* detailedPlant.main_species.specifications.average_height.cm -> cm */}
                Average height:{' '}
                {detailedPlant.main_species.specifications.average_height.cm
                  ? detailedPlant.main_species.specifications.average_height.cm
                  : 'unknown'}{' '}
                (plants) cm. — (trees) in.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* detailedPlant.main_species.duration -> perennial, etc. */}
                Duration:{' '}
                {detailedPlant.main_species.duration
                  ? detailedPlant.main_species.duration
                  : 'perennial'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* detailedPlant.main_species.edible */}
                Edible: {detailedPlant.main_species.edible ? 'yes' : 'no'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* detailedPlant.main_species.flower.color */}
                Flower Color:{' '}
                {detailedPlant.main_species.flower.color
                  ? detailedPlant.main_species.flower.color
                  : 'white'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* detailedPlant.main_species.specifications.toxicity */}
                Toxic:{' '}
                {detailedPlant.main_species.specifications.toxicity
                  ? 'yes'
                  : 'no'}
              </Typography>
              <br />

              <Typography paragraph>
                Additional Resources
                {detailedPlant.main_species.sources.map((source) => {
                  return (
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {source.name}: <a href={source.url}>{source.url}</a>
                    </Typography>
                  );
                })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailView;
