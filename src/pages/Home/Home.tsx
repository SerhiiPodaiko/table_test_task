import { Helmet } from 'react-helmet'

import AttendanceTable from '@/components/AttendanceTable/AttendanceTable'
import favicon from '../../../public/favicon-home.png'

const HomePage = () => (
    <>
        <Helmet
            title='Home | '
            meta={[{'name': 'description', 'content': 'Home page description. Attending classes'}]}
            link={[
                {'rel': 'icon', 'href': favicon},
                {'rel': 'icon', 'sizes': '32x32', 'href': favicon}
            ]}
        />
        <AttendanceTable />
    </>
)

export default HomePage