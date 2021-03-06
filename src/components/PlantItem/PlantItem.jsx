import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

// Custom Components
import HomeDropdown from '../Dropdown/HomeDropdown';
import CreateNewDropdownButton from '../Buttons/CreateNewDropdownButton';

function PlantItem({ plant, dropdownList }) {
  /*
      -------Display Order-------
      Kingdom: Plantae
      Phylum
      Class: Liliopsida
      Order: Liliales
      Family: Liliaceae
      Genus: Pine, Wattles, Milkvetch, Dandelion, etc.
      Species: Common water Hyacinth, Yellow star-thistle, Purple loosestrife, Kudzu, etc.
  */
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickGoToDetailView = (evt) => {
    console.log(evt.target.name);
    dispatch({
      type: 'GET_SINGLE_PLANT_DETAIL_VIEW',
      payload: {
        data: evt.target.name,
        onComplete: () => {
          history.push('/details');
        },
      },
    });
  };

  return (
    // Set breakpoints for multiple screen sizes
    // Refer to notes.md for breakpoints
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card>
        <CardActionArea>
          {plant.image.image_url ? (
            <img
              className="card-image"
              name={plant.image.slug}
              onClick={handleClickGoToDetailView}
              src={plant.image.image_url}
              alt={plant.primaryCommonName}
            />
          ) : (
            <img
              className="card-image"
              name={plant.image.slug}
              onClick={handleClickGoToDetailView}
              src={process.env.PUBLIC_URL + '/image_not_found.jpg'}
              alt={plant.primaryCommonName}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {plant.primaryCommonName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Scientific Name: {plant.scientificName} <br />
              Phylum: {plant.phylum} <br />
              Class: {plant.class} <br />
              Order: {plant.order} <br />
              Family: {plant.family} <br />
              Genus: {plant.genus} <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <HomeDropdown plant={plant} dropdownList={dropdownList} />
          <CreateNewDropdownButton />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PlantItem;
