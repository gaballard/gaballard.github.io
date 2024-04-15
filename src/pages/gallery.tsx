import { Box, Button, Heading, Image, Main, ResponsiveContext } from 'grommet';
import { useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TImageData } from 'src/types';
const background = require('../../public/images/1.5/background.jpeg');
const hypnoface = require('../../public/images/1.5/hypnoface.jpeg');
const iDidntLikeTheAnswer = require('../../public/images/1.5/i-didnt-like-the-answer.jpeg');
const robBoss = require('../../public/images/1.5/rob-boss.jpeg');
const noSmoking = require('../../public/images/1.5/no-smoking.jpeg');
const youCanSeeForMiles = require('../../public/images/1.5/you-can-see-for-miles.jpeg');
const tourism = require('../../public/images/1.5/tourism.jpeg');
const engageWithDelight = require('../../public/images/1.5/engage-your-olfactory.jpeg');
const augmentedReality = require('../../public/images/1.5/augmented-reality.jpeg');
const theCreator = require('../../public/images/xl/the-creator.jpeg');
const letsTakeATour = require('../../public/images/xl/lets-take-a-tour.jpeg');
const pleaseSendFeelings = require('../../public/images/xl/please-send-feelings.jpeg');
const youParentsDidDrugsToo = require('../../public/images/xl/your-parents-did-drugs-too.jpeg');
const iWishIUnderstoodThings = require('../../public/images/xl/i-wish-i-understood-things.jpeg');
const aNationIsGrieving = require('../../public/images/xl/a-nation-is-grieving.jpeg');
const coldComfort = require('../../public/images/xl/cold-comfort.jpeg');
const grayBaby = require('../../public/images/xl/gray-baby.jpeg');
const iCantGoBackInThere = require('../../public/images/xl/i-cant-go-back-in-there.jpeg');
const iHopeHeLikesMe = require('../../public/images/xl/i-hope-he-likes-me.jpeg');
const iThoughtTheyAlreadyRanThisTest = require('../../public/images/xl/i-thought-they-already-ran-this-test.jpeg');
const livingRoom = require('../../public/images/xl/living-room.jpeg');
const lostIn = require('../../public/images/xl/lost-in.jpeg');
const myGodHaveIWastedMyLife = require('../../public/images/xl/my-god-have-i-wasted-my-life.jpeg');
const sitStill = require('../../public/images/xl/sit-still.jpeg');
const theOrphanage = require('../../public/images/xl/the-orphanage.jpeg');
const theSimuvacBrothers = require('../../public/images/xl/the-simulac-brothers.jpeg');
const theScienceOfMath = require('../../public/images/1.5/the-science-of-math.jpeg');
const theSingularityAppears = require('../../public/images/xl/the-singularity-appears-or-egads.jpeg');
const theirLivesAreMyResponsibility = require('../../public/images/xl/their-lives-are-my-responsibility.jpeg');
const thereGoesTheNeighborhood = require('../../public/images/xl/there-goes-the-neighborhood.jpeg');
const tvc15OrIDidntWantToGoBack = require('../../public/images/xl/tvc15-or-i-didnt-want-to-go-back.jpeg');
const whenABodyMeetsABody = require('../../public/images/xl/when-a-body-meets-a-body.jpeg');
const whoAm = require('../../public/images/xl/who-am.jpeg');

export const Gallery: React.FC = () => {
  const imageSize = useRef('500px');
  const images = useRef<TImageData[]>([
    {
      name: 'livingRoom',
      image_url: '',
      link_url: '../../public/images/xl/living-room.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'Living Space 001',
      positive_prompt:
        'empty loneliness in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: livingRoom,
    },
    {
      name: 'myGodHaveIWastedMyLife',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'My God, Have I Wasted My Life?',
      positive_prompt:
        'a person is lost in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: myGodHaveIWastedMyLife,
    },
    {
      name: 'iHopeHeLikesMe',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'I Hope He Likes Me',
      positive_prompt:
        'empty loneliness in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: iHopeHeLikesMe,
    },
    {
      name: 'iCantGoBackInThere',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: "I Can't Go Back",
      positive_prompt:
        'a person is feeling empty loneliness in the internet of the future as a 3d model as a 1980s photograph',
      negative_prompt: '',
      image: iCantGoBackInThere,
    },
    {
      name: 'aNationIsGrieving',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'A Nation is Grieving',
      positive_prompt:
        'empty loneliness in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: aNationIsGrieving,
    },
    {
      name: 'theirLivesAreMyResponsibility',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'Their Lives Are My Responsibility',
      positive_prompt:
        'a person is lonely in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: theirLivesAreMyResponsibility,
    },
    {
      name: 'theScienceOfMath',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'The Science of Math',
      positive_prompt:
        'a person is in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: theScienceOfMath,
    },
    {
      name: 'whenABodyMeetsABody',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'When A Body Meets A Body',
      positive_prompt:
        'a person is feeling empty in the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: whenABodyMeetsABody,
    },
    {
      name: 'iDidntLikeTheAnswer',
      image_url: 'i-didnt-like-the-answer.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: "I Didn't Like the Answer",
      positive_prompt:
        'a person asking themselves "who am i and what am I doing here?" as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: iDidntLikeTheAnswer,
    },
    {
      name: 'whoAm',
      image_url: '',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'Who Am...',
      positive_prompt:
        'a person asking themselves "who am i?" as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: whoAm,
    },
    {
      name: 'theCreator',
      image_url: 'the-creator.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'The Creator',
      positive_prompt:
        'a person is in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: theCreator,
    },
    {
      name: 'hypnoface',
      image_url: 'hypnoface.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'The Face of the Future',
      positive_prompt: 'a human in the internet of the future as a 3d model',
      image: hypnoface,
    },
    {
      name: 'letsTakeATour',
      image_url: 'lets-take-a-tour.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: "Let's Take A Tour / We Can't Wait To Show You",
      positive_prompt:
        'a person is in the internet of the future as a 3d model as a 1960s photograph',
      image: letsTakeATour,
    },
    {
      name: 'pleaseSendFeelings',
      image_url: 'please-send-feelings.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'Please Send Feelings',
      positive_prompt:
        'a person is lonely in the internet of the future as a 3d model as a 1960s photograph',
      image: pleaseSendFeelings,
    },
    {
      name: 'youCanSeeForMiles',
      image_url: 'you-can-see-for-miles.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'You Can See For Miles',
      positive_prompt:
        'simulacra and simulacrum as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: youCanSeeForMiles,
    },
    {
      name: 'youParentsDidDrugsToo',
      image_url: 'your-parents-did-drugs-too.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'Your Parents Did Drugs Too',
      positive_prompt:
        'a person is lonely in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: youParentsDidDrugsToo,
    },
    {
      name: 'tourism',
      image_url: 'tourism.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'Amber Tourism',
      positive_prompt:
        'a person is in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: tourism,
    },
    {
      name: 'engageWithDelight',
      image_url: 'engage-your-olfactory.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'Engage With Delight',
      positive_prompt:
        'a person asking themselves "who am i and what am I doing here?" as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: engageWithDelight,
    },
    {
      name: 'augmentedReality',
      image_url: 'augmented-reality.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'Augmented Reality',
      positive_prompt:
        'a person is in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: augmentedReality,
    },
    {
      name: 'iWishIUnderstoodThings',
      image_url: 'i-wish-i-understood-things.jpeg',
      model_name: 'Stable Diffusion',
      model_version: 'XL',
      caption: 'I Wish I Understood Things',
      positive_prompt:
        'a person is lost in the internet of the future as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: iWishIUnderstoodThings,
    },
    {
      name: 'robBoss',
      image_url: 'rob-boss.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'Rob Boss',
      positive_prompt:
        'a person is feeling lonely in the internet of the future as a 3d model as a 1980s photograph',
      negative_prompt: '',
      image: robBoss,
    },
    {
      name: 'noSmoking',
      image_url: 'no-smoking.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'No Smoking',
      positive_prompt:
        'a person asking themselves "who am i and what am I doing here?" as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: noSmoking,
    },
  ]);

  const screenSize = useContext(ResponsiveContext);

  const isMobile = useMemo(
    () => screenSize === ('small' || 'xsmall'),
    [screenSize]
  );

  const imageList = useMemo(() => {
    const response: React.ReactNode[] = [];

    for (let i = 0, il = images.current.length; i < il; i += 2) {
      response.push(
        <Box
          direction="row"
          pad={{ horizontal: '10rem' }}
          gap="5rem"
          align="center"
          fill="horizontal"
          justify="center"
        >
          {images.current[i].image && (
            <Box
              width="50%"
              elevation="large"
              background="white"
              pad={{ horizontal: 'medium', top: 'medium' }}
            >
              <Link to={images.current[i].image}>
                <Box>
                  <Image src={images.current[i].image} />
                </Box>
              </Link>
              <Button
                plain
                tip={`${images.current[i].positive_prompt} (${images.current[i].model_name} ${images.current[i].model_version})`}
              >
                <Box pad="1rem">{images.current[i].caption}</Box>
              </Button>
            </Box>
          )}
          {images.current[i + 1]?.image ? (
            <Box
              width="50%"
              elevation="large"
              background="white"
              pad={{ horizontal: 'medium', top: 'medium' }}
            >
              <Link to={images.current[i + 1].image}>
                <Box>
                  <Image src={images.current[i + 1].image} />
                </Box>
              </Link>
              <Button
                plain
                tip={`${images.current[i + 1].positive_prompt} (${
                  images.current[i + 1].model_name
                } ${images.current[i + 1].model_version})`}
              >
                <Box pad="1rem">{images.current[i + 1].caption}</Box>
              </Button>
            </Box>
          ) : (
            <Box width="50%" />
          )}
        </Box>
      );
    }

    return response;
  }, [images.current]);

  return (
    <Main
      align="center"
      // pad={{ horizontal: 'medium', vertical: 'large' }}
      pad={{ vertical: 'large' }}
      gap="medium"
      background={`url('${background}')`}
      style={{
        backgroundRepeat: 'repeat',
        backgroundSize: '15%',
        backgroundPositionY: 'top',
      }}
    >
      <Box>
        <Heading color="yellow">
          The Future
          <br />
          <marquee>
            <i>Is Strange & Lonely</i>
          </marquee>
        </Heading>
      </Box>

      {imageList}
    </Main>
  );
};
