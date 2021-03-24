import React from 'react';
import { useDispatch } from 'react-redux';

// Sweetalert
import swal from 'sweetalert';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function GardenItem({ plant, dropdownSelection }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 20,
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  // Event handlers
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeletePlant = (evt) => {
    if (!evt.currentTarget.value) {
      return;
    }
    swal({
      title: 'Are you sure?',
      text: `Once deleted, you will not get back your plant, but you can always add new ones.`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch({
          type: 'DELETE_PLANT',
          payload: {
            id: plant.id,
            sectionId: dropdownSelection,
          },
        });
        swal('Your plant is now gone!', {
          icon: 'success',
        });
      } else {
        swal('Your lovely native plant is safe!');
      }
    });
  };

  // Classes for styling
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className={classes.root}>
        <CardHeader
          title={plant.plant.main_species.common_name}
          subheader={plant.plant.family_common_name}
        />

        <CardMedia
          className={classes.media}
          image={
            plant.plant.image_url
              ? plant.plant.image_url
              : process.env.PUBLIC_URL + '/image_not_found.jpg'
          }
          title={plant.plant.main_species.common_name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {plant.plant.main_species.scientific_name} <br />
            Found:{' '}
            {plant.plant.observations ? plant.plant.observations : 'U.S.A.'}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            value={plant.id}
            onClick={handleDeletePlant}
            aria-label="delete plant from garden"
          >
            <DeleteIcon
              style={{
                color: '#e74c3c',
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descriptive Info</Typography>
            {/* // plant.plant.main_species.distribution.native -> list of native states
            // plant.plant.main_species.foliage.color, leaf_retention -> autumn leaf color */}
            <Typography variant="body2" color="textSecondary" component="p">
              Foliage Color:{' '}
              {plant.plant.main_species.foliage.color
                ? plant.plant.main_species.foliage.color
                : 'None'}{' '}
              <br />
              Leaf Retention:{' '}
              {plant.plant.main_species.foliage.leaf_retention ? 'Yes' : 'No'}
              <br />
              Flowering:{' '}
              {plant.plant.main_species.flower.conspicuous ? 'Yes' : 'No'}
              <br />
              Fruits or Seeds:{' '}
              {plant.plant.main_species.fruit_or_seed.conspicuous
                ? 'Yes'
                : 'No'}
            </Typography>
            <Typography
              paragraph
              style={{
                marginTop: 10,
              }}
            >
              Specifications
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Average Height:{' '}
              {plant.plant.main_species.specifications.average_height.cm
                ? plant.plant.main_species.specifications.average_height.cm +
                  ' cm'
                : 'Unknown'}{' '}
              <br />
              Growth Form:{' '}
              {plant.plant.main_species.specifications.growth_form
                ? plant.plant.main_species.specifications.growth_form
                : 'Single Crown'}
              <br />
              Growth Rate:{' '}
              {plant.plant.main_species.specifications.growth_rate
                ? plant.plant.main_species.specifications.growth_rate
                : 'Rapid'}
              <br />
              Toxicity:{' '}
              {plant.plant.main_species.specifications.toxicity
                ? plant.plant.main_species.specifications.toxicity
                : 'None'}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default GardenItem;
