import React from 'react'

import { Route, Routes  } from 'react-router-dom'
import Home from './Home';
import Error from '../.././_utils/Error';
import Radar from './Radar';
import Services from './Services';
import Layout from './Layout';

const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/radar/:blockchain/:id" element={<Radar />} />

                <Route path="*" element={<Error />} />

            </Route>
        </Routes>
    )
}

export default PublicRoute
