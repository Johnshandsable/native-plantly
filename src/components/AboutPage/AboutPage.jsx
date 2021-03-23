// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MicNoneTwoTone } from '@material-ui/icons';

function AboutPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 'fixed',
      flexGrow: 1,
      marginTop: 150,
      marginLeft: 20,
      marginRight: 20,
    },
    paper: {
      height: '100%',
      margin: 0,
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
          <Paper className={classes.paper}>
            <Typography
              color="primary"
              style={{
                marginBottom: 20,
                paddingBottom: 5,
                borderBottom: '2px solid #34495e',
              }}
              variant="h4"
            >
              What are native plants?
            </Typography>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic1.JPG'}
              alt="Bee on Flower"
            ></img>

            <Typography
              style={{
                color: '#34495e',
                textAlign: 'left',
                paddingTop: 10,
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 10,
                borderTop: '2px solid #34495e',
                borderBottom: '2px solid #34495e',
              }}
            >
              <Typography>
                With regard to North America, native plants are those which
                exist in a geographical location prior to European settlement.
                This means the plants were naturally there without being
                introduced into an area by humans, or from a plant that was.
              </Typography>
              <br />
              <Typography>
                A plant in its native range evolved to be in that environment.
                Evolution is a slow process, and thus the plant evolved over
                hundreds or thousands of years with the other plants, animals,
                and insects in that ecosystem. Therefore they provide huge
                ecological benefit, but are also kept in check by other species,
                whether it is other plants or other life forms.
              </Typography>
            </Typography>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic6.JPG'}
              alt="Bee on Flower"
            ></img>
            <Typography
              variant="h5"
              style={{
                color: '#34495e',
                textAlign: 'left',
                paddingTop: 10,
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 10,
                borderTop: '2px solid #34495e',
              }}
            >
              Providers of Health
            </Typography>
            <Typography
              style={{
                color: '#34495e',
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: '2px solid #34495e',
              }}
            >
              <Typography>
                Native plants require less fertilizer, mowing, and promote the
                elimination of herbicides and pesticides. This cuts down on
                emissions and the deposition of chemicals into our environment.
                With their extremely long roots, they also help reduce the
                runoff that may contain these chemicals. The water is then
                slowed and filtered, which helps prevent erosion, but also
                cleans the water and returns it back into the ground. Same with
                carbon. Plants take in carbon dioxide from the atmosphere and
                then deposit it back into the ground where it should be.
                Healthier air. Healthier water. Healthier soils.
              </Typography>
              <br />
              <Typography>
                {' '}
                Gardening provides its own benefits in the form of mental and
                physical health, too. Since gardening requires manual labor and
                exercise to establish and maintain, we are able to stay
                physically active. However, gardening, and especially gardening
                that utilizes native plants, also boosts mood and gives people a
                sense of restoring and helping the environment/planet.
              </Typography>{' '}
            </Typography>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic5.JPG'}
              alt="Sunflower"
            ></img>
            <Typography
              style={{
                color: '#34495e',
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                paddingTop: 10,
                borderTop: '2px solid #34495e',
              }}
            >
              A very special thanks goes to Kristin List for writing this page
              on why native plants are important. Additional thanks goes to the
              Cullen Cohort for whose help I relied on to make this project.
            </Typography>
          </Paper>
        </Grid>
        {/* End of Left Section */}
        {/* Right Section */}
        <Grid xs={12} sm={8} md={9} lg={9} xl={9}>
          <Paper className={classes.paper}>
            <Typography
              color="primary"
              variant="h4"
              style={{
                marginBottom: 20,
                paddingBottom: 5,
                borderBottom: '2px solid #34495e',
              }}
            >
              Why native plants?
            </Typography>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic4.JPG'}
              alt="Bee on Flower"
            ></img>
            <Typography
              style={{
                color: '#34495e',
                borderTop: '2px solid #34495e',
                textAlign: 'left',
                marginTop: 20,
                paddingTop: 10,
              }}
              variant="h5"
            >
              Providers of Life
            </Typography>

            <Typography
              style={{
                color: '#34495e',
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: '2px solid #34495e',
              }}
            >
              <Typography>
                Since native plants evolved with the organisms in their
                ecosystems, they provide more food, shelter, and benefit than
                non-natives. Many insects require a very specific plant to eat
                and reproduce. If that plant is not present, they cannot
                complete their life cycle. Think of the Monarch caterpillar
                requiring milkweed plants. Sure, Monarch butterflies can get
                nectar from many plants, but due to their evolution, the
                caterpillars cannot eat other plants except milkweed. Without
                milkweeds, there would be no Monarch butterflies.{' '}
              </Typography>
              <br />
              <Typography>
                {' '}
                In relation to nectar, native plants provide more of it, and in
                a form that provides the best nutrition for those feeding off of
                it. This is also true for insects or animals that eat parts of
                the plant itself, including berries or nuts. Exotic or
                introduced plants may provide nectar, berries, or other edible
                content, but they are not as nutritionally complete as those
                provided by native plants.{' '}
              </Typography>{' '}
              <br />
              <Typography>
                As foundational food sources, native plants help support insects
                and animals, which then also support other insects and other
                animals. Birds, for example, require many insects to raise their
                young. If there are less insects because they can’t survive
                without their native plant resources, there will be less birds.
                Humans also suffer, because we lose the pollinators essential
                for our crops. Without pollinators, we would lose a third of our
                food supply.
              </Typography>
            </Typography>
            <img
              className="about-image"
              src={process.env.PUBLIC_URL + '/pic2.JPG'}
              alt="Bee on Flower"
            ></img>
            <Typography
              style={{
                color: '#34495e',
                borderTop: '2px solid #34495e',
                textAlign: 'left',
                marginTop: 20,
                paddingTop: 10,
              }}
              variant="h5"
            >
              Providers of Beauty
            </Typography>

            <Typography
              style={{
                color: '#34495e',
                textAlign: 'left',
                marginTop: 20,
              }}
            >
              <Typography>
                Native plants are beautiful. Unfortunately, many are stigmatized
                because they have “weed” in the name, or are associated with
                “uncultivated” design. They can go against our social
                expectations or pressures of keeping a vibrantly green,
                weed-free, non-native grass lawn that provides no ecological
                benefit. Or, they simply aren’t available in nurseries or garden
                centers, so people buy the landscaping plants familiar to them
                that are often actually invasive and detrimental to our
                ecosystems.
              </Typography>
              <br />
              <Typography>
                However, native plants don’t have to be tall, weedy, or wild
                looking in your gardens. By selection and design, native plants
                can create a formal-looking, beautiful landscape that provides
                an immense contribution to our habitats. Or not. You can also
                create cottage-garden styled landscapes or prairies that have a
                more untamed appearance. Native plants come in a huge variety of
                forms, colors, and designs; and can make a garden or landscape
                that gives a beautiful display year-round while providing so
                much more than just aesthetics in whatever style suits your
                garden.
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        {/* End of Right Section */}
      </Grid>
    </div>
  );
}

export default AboutPage;
