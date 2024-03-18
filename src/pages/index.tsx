
import { Inter } from "next/font/google";
;
import Layout from "@/components/Layout";

import { useRouter } from "next/router";
import HomePage from "@/components/pages/HomePage";

const Home = () => {
return (

      <Layout>
          <HomePage/>
      </Layout>

)
}

export default Home
