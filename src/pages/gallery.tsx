import { Box, Footer, Header, Heading, Image, Main, Text } from 'grommet';
import { Link } from 'react-router-dom';
const background = require('../../public/images/1.5/background.jpeg');
const image1 = require('../../public/images/xl/lets take tour.jpeg');
const image2 = require('../../public/images/1.5/download.jpeg');
const image3 = require('../../public/images/1.5/download 2.jpeg');
const image4 = require('../../public/images/1.5/download 3.jpeg');
const image5 = require('../../public/images/1.5/download 4.jpeg');
const image6 = require('../../public/images/1.5/download 5.jpeg');
const image7 = require('../../public/images/1.5/download 6.jpeg');
const image8 = require('../../public/images/1.5/download 7.jpeg');
const image9 = require('../../public/images/1.5/download 8.jpeg');
const image10 = require('../../public/images/1.5/download (1).jpeg');

export const Gallery: React.FC = () => {
  return (
    <Main
      align="center"
      pad={{ horizontal: 'medium', vertical: 'large' }}
      gap="large"
      background={`url('${background}')`}
      style={{ backgroundRepeat: 'repeat', backgroundSize: '15%' }}
    >
      <Box>
        <Heading color="white">
          Horrors of AI
          <br />
          <marquee>
            <i>The Future Is Lonely & Terrible</i>
          </marquee>
        </Heading>
      </Box>

      <Box direction="row" gap="large">
        <Box elevation="large" background="white" pad="small">
          <Link to={image10}>
            <Image src={image10} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
        <Box elevation="large" background="white" pad="small">
          <Link to={image1}>
            <Image src={image1} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion XL</Box>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box elevation="large" background="white" pad="small">
          <Link to={image2}>
            <Image src={image2} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
        <Box elevation="large" background="white" pad="small">
          <Link to={image3}>
            <Image src={image3} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box elevation="large" background="white" pad="small">
          <Link to={image4}>
            <Image src={image4} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
        <Box elevation="large" background="white" pad="small">
          <Link to={image5}>
            <Image src={image5} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box elevation="large" background="white" pad="small">
          <Link to={image6}>
            <Image src={image6} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
        <Box elevation="large" background="white" pad="small">
          <Link to={image7}>
            <Image src={image7} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box elevation="large" background="white" pad="small">
          <Link to={image8}>
            <Image src={image8} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
        <Box elevation="large" background="white" pad="small">
          <Link to={image9}>
            <Image src={image9} height="500px" width="500px" />
          </Link>
          <Box pad="xsmall">Stable Diffusion 1.5</Box>
        </Box>
      </Box>
    </Main>
  );
};
