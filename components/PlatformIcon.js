import React from "react";

// Apps

import vueIcon from "@liara/platformicons/svg/vue.svg";
import phpIcon from "@liara/platformicons/svg/php.svg";
import nodeIcon from "@liara/platformicons/svg/nodejs.svg";
import reactIcon from "@liara/platformicons/svg/react.svg";
import flaskIcon from "@liara/platformicons/svg/flask.svg";
import staticIcon from "@liara/platformicons/svg/HTML5.svg";
import dockerIcon from "@liara/platformicons/svg/docker.svg";
import djangoIcon from "@liara/platformicons/svg/django.svg";
import netcoreIcon from "@liara/platformicons/svg/dotnet.svg";
import laravelIcon from "@liara/platformicons/svg/laravel.svg";
import angularIcon from "@liara/platformicons/svg/angularjs.svg";

// One-click-apps

import odooIcon from "./odoo.svg";
import ghostIcon from "@liara/platformicons/svg/ghost.svg";
import giteaIcon from "@liara/platformicons/svg/gitea.svg";
import vscodeIcon from "@liara/platformicons/svg/vscode.svg";
import chromeIcon from "@liara/platformicons/svg/chrome.svg";
import kibanaIcon from "@liara/platformicons/svg/kibana.svg";
import pusherIcon from "@liara/platformicons/svg/pusher.svg";
import grafanaIcon from "@liara/platformicons/svg/grafana.svg";
import imgproxyIcon from "@liara/platformicons/svg/imgproxy.svg";
import metabaseIcon from "@liara/platformicons/svg/metabase.svg";
import nextcloudIcon from "@liara/platformicons/svg/nextcloud.svg";
import wordpressIcon from "@liara/platformicons/svg/wordpress.svg";
import prestashopIcon from "@liara/platformicons/svg/PrestaShop.svg";
import mattermostIcon from "@liara/platformicons/svg/mattermost.svg";
import rocketchatIcon from "@liara/platformicons/svg/rocketchat.svg";
import parseserverIcon from "@liara/platformicons/svg/parseserver.svg";

// Instructions

import hugoIcon from "./hugo.svg";
import jekyllIcon from "./jekyll.svg";
import svelteIcon from "./svelte.svg";
import eleventyIcon from "./eleventy.svg";
import goIcon from "@liara/platformicons/svg/go.svg";
// import seqIcon from "@liara/platformicons/svg/seq.svg";
import yiiIcon from "@liara/platformicons/svg/yii.svg";
import celeryIcon from "@liara/platformicons/svg/celery.svg";
import nestIcon from "@liara/platformicons/svg/nest.svg";
import nextIcon from "@liara/platformicons/svg/next.svg";
import nuxtIcon from "@liara/platformicons/svg/nuxt.svg";
import lumenIcon from "@liara/platformicons/svg/lumen.svg";
import gatsbyIcon from "@liara/platformicons/svg/gatsby.svg";
import strapiIcon from "@liara/platformicons/svg/strapi.svg";
import adonisIcon from "@liara/platformicons/svg/adonisjs.svg";
import gridsomeIcon from "./gridsome.svg";

// Databases
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
  // Apps
  { logo: phpIcon, alt: "php" },
  { logo: vueIcon, alt: "vue" },
  { logo: flaskIcon, alt: "flask" },
  { logo: nodeIcon, alt: "nodejs" },
  { logo: reactIcon, alt: "react" },
  { logo: staticIcon, alt: "HTML5" },
  { logo: dockerIcon, alt: "docker" },
  { logo: djangoIcon, alt: "django" },
  { logo: laravelIcon, alt: "laravel" },
  { logo: netcoreIcon, alt: "netcore" },
  { logo: angularIcon, alt: "angularjs" },
  // One-click-apps
  { logo: odooIcon, alt: "odoo" },
  { logo: ghostIcon, alt: "ghost" },
  { logo: giteaIcon, alt: "gitea" },
  { logo: vscodeIcon, alt: "vscode" },
  { logo: pusherIcon, alt: "pusher" },
  { logo: kibanaIcon, alt: "kibana" },
  { logo: chromeIcon, alt: "chrome" },
  { logo: grafanaIcon, alt: "grafana" },
  { logo: imgproxyIcon, alt: "imgproxy" },
  { logo: metabaseIcon, alt: "metabase" },
  { logo: nextcloudIcon, alt: "nextcloud" },
  { logo: wordpressIcon, alt: "wordpress" },
  { logo: prestashopIcon, alt: "prestashop" },
  { logo: mattermostIcon, alt: "mattermost" },
  { logo: rocketchatIcon, alt: "rocketchat" },
  { logo: parseserverIcon, alt: "parseserver" },
  // Instructions
  { logo: goIcon, alt: "go" },
  { logo: yiiIcon, alt: "yii" },
  { logo: nestIcon, alt: "nest" },
  { logo: nextIcon, alt: "next" },
  { logo: hugoIcon, alt: "hugo" },
  { logo: nuxtIcon, alt: "nuxt" },
  { logo: lumenIcon, alt: "lumen" },
  { logo: jekyllIcon, alt: "jekyll" },
  { logo: gatsbyIcon, alt: "gatsby" },
  { logo: svelteIcon, alt: "svelte" },
  { logo: gridsomeIcon, alt: "gridsome" },
  { logo: strapiIcon, alt: "strapi" },
  { logo: adonisIcon, alt: "adonisjs" },
  // { logo: seqIcon, alt: "seq" },
  { logo: celeryIcon, alt: "celery" },
  { logo: eleventyIcon, alt: "eleventy" },
  // Databases
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

export default function PlatformIcon({ platform }) {
  const type = types.find(type => type.alt === platform);
  return <img className="page-icon" src={type.logo.src} alt={type.alt} />;
}
