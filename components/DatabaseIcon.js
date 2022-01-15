import React from "react";

import mysqlIcon from "@liara/platformicons/svg/mysql.svg";
import mssqlIcon from "@liara/platformicons/svg/mssql.svg";
import redisIcon from "@liara/platformicons/svg/redis.svg";
import mongodbIcon from "@liara/platformicons/svg/mongodb.svg";
import mariadbIcon from "@liara/platformicons/svg/mariadb.svg";
import elasticIcon from "@liara/platformicons/svg/elastic.svg";
import rabbitmqIcon from "@liara/platformicons/svg/rabbitmq.svg";
import postgresIcon from "@liara/platformicons/svg/postgres.svg";
import arangodbIcon from "@liara/platformicons/svg/arangodb.svg";

const types = [
  { logo: mysqlIcon, alt: "mysql" },
  { logo: redisIcon, alt: "redis" },
  { logo: mssqlIcon, alt: "mssql" },
  { logo: mariadbIcon, alt: "mariadb" },
  { logo: mongodbIcon, alt: "mongodb" },
  { logo: elasticIcon, alt: "elastic" },
  { logo: postgresIcon, alt: "postgres" },
  { logo: rabbitmqIcon, alt: "rabbitmq" },
  { logo: arangodbIcon, alt: "arangodb" },
];

export default function DatabaseIcon({ database }) {
  const type = types.find(type => type.alt === database);
  return <img className="page-icon" src={type.logo.src} alt={type.alt} />;
}
