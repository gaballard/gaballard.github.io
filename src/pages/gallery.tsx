import { Box, Button, Heading, Image, Main } from 'grommet';
import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TImageData } from 'src/types';
const background = require('../../public/images/1.5/background.jpeg');
const hypnoface = require('../../public/images/1.5/hypnoface.jpeg');
const iDidntLikeTheAnswer = require('../../public/images/1.5/i-didnt-like-the-answer.jpeg');
const robBoss = require('../../public/images/1.5/rob-boss.jpeg');
const noSmoking = require('../../public/images/1.5/no-smoking.jpeg');
const youCanSeeForMiles = require('../../public/images/1.5/you-can-see-for-miles.jpeg');
const tourism = require('../../public/images/1.5/tourism.jpeg');
const engageYourOlfactory = require('../../public/images/1.5/engage-your-olfactory.jpeg');
const augmentedReality = require('../../public/images/1.5/augmented-reality.jpeg');
const theCreator = require('../../public/images/xl/the-creator.jpeg');
const letsTakeATour = require('../../public/images/xl/lets-take-a-tour.jpeg');
const pleaseSendFeelings = require('../../public/images/xl/please-send-feelings.jpeg');
const youParentsDidDrugsToo = require('../../public/images/xl/your-parents-did-drugs-too.jpeg');
const iWishIUnderstoodThings = require('../../public/images/xl/i-wish-i-understood-things.jpeg');

export const Gallery: React.FC = () => {
  const imageSize = useRef('500px');
  const images = useRef<TImageData[]>([
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
      caption: 'In the Internet of the Future Pt. 1',
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
      name: 'engageYourOlfactory',
      image_url: 'engage-your-olfactory.jpeg',
      model_name: 'Stable Diffusion',
      model_version: '1.5',
      caption: 'Engage With Delight',
      positive_prompt:
        'a person asking themselves "who am i and what am I doing here?" as a 3d model as a 1960s photograph',
      negative_prompt: '',
      image: engageYourOlfactory,
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

  const imageList = useMemo(() => {
    const response: React.ReactNode[] = [];

    for (let i = 0, il = images.current.length; i < il; i += 2) {
      response.push(
        <Box direction="row" gap="large" align="center">
          {images.current[i].image && (
            <Box
              elevation="large"
              background="white"
              pad={{ horizontal: 'small', top: 'small' }}
            >
              {images.current[i].link_url && (
                <Link
                  to={`../../public/images/${images.current[i].model_version}/${images.current[i].image_url}`}
                >
                  <Image
                    src={images.current[i].image}
                    height={imageSize.current}
                    width={imageSize.current}
                  />
                </Link>
              )}
              {!images.current[i].link_url && (
                <Image
                  src={images.current[i].image}
                  height={imageSize.current}
                  width={imageSize.current}
                />
              )}
              <Button
                plain
                tip={`${images.current[i].positive_prompt} (${images.current[i].model_name} ${images.current[i].model_version})`}
              >
                <Box pad="1rem">{images.current[i].caption}</Box>
              </Button>
            </Box>
          )}
          {images.current[i + 1]?.image && (
            <Box
              elevation="large"
              background="white"
              pad={{ horizontal: 'small', top: 'small' }}
            >
              {images.current[i + 1].link_url && (
                <Link
                  to={`../../public/images/${
                    images.current[i + 1].model_version
                  }/${images.current[i + 1].image_url}`}
                >
                  <Image
                    src={images.current[i + 1].image}
                    height={imageSize.current}
                    width={imageSize.current}
                  />
                </Link>
              )}
              {!images.current[i + 1].link_url && (
                <Image
                  src={images.current[i + 1].image}
                  height={imageSize.current}
                  width={imageSize.current}
                />
              )}

              <Button
                plain
                tip={`${images.current[i + 1].positive_prompt} (${
                  images.current[i + 1].model_name
                } ${images.current[i + 1].model_version})`}
              >
                <Box pad="1rem">{images.current[i + 1].caption}</Box>
              </Button>
            </Box>
          )}
        </Box>
      );
    }

    return response;
  }, [images.current]);

  return (
    <Main
      align="center"
      pad={{ horizontal: 'medium', vertical: 'large' }}
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
            <i>Is Lonely & Terrible</i>
          </marquee>
        </Heading>
      </Box>

      {imageList}
    </Main>
  );
};
