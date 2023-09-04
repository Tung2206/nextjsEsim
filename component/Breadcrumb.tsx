// components/Breadcrumb.js
import Link from 'next/link';

const BreadcrumbItem = ({ title, path }) => (
  <li>
    <Link href={path}>
      {title} 
    </Link>
  </li>
);

const Breadcrumb = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <BreadcrumbItem key={index} title={item.title} path={item.path} />
    ))}
  </ul>
);

export default Breadcrumb;
