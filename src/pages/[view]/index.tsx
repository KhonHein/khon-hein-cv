import HomePage from '@/components/pages/HomePage'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';

import React from 'react'
import AboutPage from '@/components/pages/AboutPage';
import Exep from '@/components/pages/Exep';
import ServicePage from '@/components/pages/ServicePage';
import GitPorjectPage from '@/components/pages/GitPorjectPage';

const ViewPage = () => {
const router = useRouter();
const view = String(router.query.view);

  return (
      <Layout>
        
          {view==='/'&&<HomePage/>}
          {view==='about'&&<AboutPage/>}
          {view==='exep'&&<Exep/>}
          {view==='serv'&&<ServicePage/>}
          {view==='git'&&<GitPorjectPage/>}
      </Layout>
  )
}

export default ViewPage