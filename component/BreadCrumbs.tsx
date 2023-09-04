import React from "react";
import Link from "next/link";
import Styles from "../styles/breadcrumbs.module.scss";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <div className={Styles.breadcrumbs}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul>
              {breadCrumbs?.map((breadCrumb, index) => (
                <li key={index}>
                  <Link href={breadCrumb.url}>{breadCrumb.name}</Link>
                  {breadCrumbs?.length - 1 !== index && (
                    <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
