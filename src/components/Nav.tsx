
import { navMenus } from '@/data/nav';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathName = String(router.query.view);

  return (
    <nav>
      {navMenus&&navMenus.map((item,index)=>
      <Link key={index} href={item.url} style={{
      }}
      className={`${pathName===item.url&&'link-active'||'link'}`}
      ><item.icon/></Link>)}
    </nav>
  )
}

export default Nav