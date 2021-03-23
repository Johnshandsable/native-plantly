import React from 'react';
import { useDispatch } from 'react-redux';

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

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const handleDeletePlant = (evt) => {
    console.log('currentTarget', evt.currentTarget.value);
    dispatch({
      type: 'DELETE_PLANT',
      payload: {
        id: plant.id,
        sectionId: dropdownSelection,
        // onComplete: () => {
        //   refreshPage();
        // },
      },
    });
  };

  // Local state
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className={classes.root}>
        <Button
          style={{
            color: '#e74c3c',
          }}
          endIcon={<DeleteIcon />}
          value={plant.id}
          onClick={handleDeletePlant}
        >
          Delete
        </Button>
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
            <Typography paragraph>Specifications</Typography>
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
