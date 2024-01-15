import { Helmet } from 'react-helmet'
import Typography from '@mui/material/Typography'

import favicon from '../../../public/favicon-contact.png'

const ContactPage = () => (
    <>
        <Helmet
            title='Contact'
            meta={[{'name': 'description', 'content': 'Contact page description'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <Typography component='h1'>Contact Page</Typography>
    </>
)

export default ContactPage
