import { Helmet } from 'react-helmet'
import Typography from '@mui/material/Typography'

import favicon from '../../../public/favicon-about.png'

const AboutPage = () => (
    <>
        <Helmet
            title='About'
            meta={[{'name': 'description', 'content': 'About page description'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Typography component='h1'>About Page</Typography>
    </>
)

export default AboutPage