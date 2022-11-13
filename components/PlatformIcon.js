import React from "react";

import streamlitIcon from "./streamlit.svg";
import viteIcon from "./vite.svg";

// Apps

import vueIcon from "./../public/static/platforms/vue.svg";
import phpIcon from "./../public/static/platforms/php.svg";
import nodeIcon from "./../public/static/platforms/nodejs.svg";
import reactIcon from "./../public/static/platforms/react.svg";
import flaskIcon from "./../public/static/platforms/flask.svg";
import staticIcon from "./../public/static/platforms/static.svg";
import dockerIcon from "./../public/static/platforms/docker.svg";
import djangoIcon from "./../public/static/platforms/django.svg";
import netcoreIcon from "./../public/static/platforms/dotnet.svg";
import laravelIcon from "./../public/static/platforms/laravel.svg";
import angularIcon from "./../public/static/platforms/angular.svg";

// One-click-apps

import odooIcon from "./../public/static/platforms/odoo.svg";
import ghostIcon from "./../public/static/platforms/ghost.svg";
import giteaIcon from "./../public/static/platforms/gitea.svg";
import vscodeIcon from "./../public/static/platforms/vscode.svg";
import chromeIcon from "./../public/static/platforms/chrome.svg";
import kibanaIcon from "./../public/static/platforms/kibana.svg";
import pusherIcon from "./../public/static/platforms/pusher.svg";
import grafanaIcon from "./../public/static/platforms/grafana.svg";
import imgproxyIcon from "./../public/static/platforms/imgproxy.svg";
import metabaseIcon from "./../public/static/platforms/metabase.svg";
import nextcloudIcon from "./../public/static/platforms/nextcloud.svg";
import wordpressIcon from "./../public/static/platforms/wordpress.svg";
import prestashopIcon from "./../public/static/platforms/prestashop.svg";
import mattermostIcon from "./../public/static/platforms/mattermost.svg";
import rocketchatIcon from "./../public/static/platforms/rocket-chat.svg";
import parseserverIcon from "./../public/static/platforms/parse.svg";

// Instructions

import seqIcon from "./../public/static/platforms/seq.svg";
import yiiIcon from "./../public/static/platforms/yii.svg";
import hugoIcon from "./../public/static/platforms/hugo.svg";
import nestIcon from "./../public/static/platforms/nestjs.svg";
import remixIcon from "./../public/static/platforms/remix.svg";
import nginxIcon from "./../public/static/platforms/nginix.svg";
import lumenIcon from "./../public/static/platforms/lumen.svg";
import celeryIcon from "./../public/static/platforms/celery.svg";
import prismaIcon from "./../public/static/platforms/prisma.svg";
import svelteIcon from "./../public/static/platforms/svalte.svg";
import jekyllIcon from "./../public/static/platforms/jekyll.svg";
import blitzjsIcon from "./../public/static/platforms/blitzjs.svg";
import strapiIcon from "./../public/static/platforms/strapi.svg";
import flutterIcon from "./../public/static/platforms/flutter.svg";
import adonisIcon from "./../public/static/platforms/adonisjs.svg";
import fastapiIcon from "./../public/static/platforms/fastapi.svg";
import fastifyIcon from "./../public/static/platforms/fastify.svg";
import eleventyIcon from "./../public/static/platforms/eleventy.svg";
import gridsomeIcon from "./../public/static/platforms/gridsome.svg";
import goIcon from "./../public/static/platforms/go.svg";
import nextIcon from "./../public/static/platforms/nextjs.svg";
import nuxtIcon from "./../public/static/platforms/nuxtjs.svg";
import soketiIcon from "./../public/static/platforms/soketi.svg";
import pythonIcon from "./../public/static/platforms/python.svg";
import gatsbyIcon from "./../public/static/platforms/gatsby.svg";

// Databases

import mysqlIcon from "./../public/static/platforms/mysql.svg";
import mssqlIcon from "./../public/static/platforms/sqlserver.svg";
import arangodbIcon from "./../public/static/platforms/arangodb.svg";
import redisIcon from "./../public/static/platforms/redis.svg";
import mongodbIcon from "./../public/static/platforms/mongodb.svg";
import mariadbIcon from "./../public/static/platforms/mariadb.svg";
import elasticIcon from "./../public/static/platforms/elastic.svg";
import rabbitmqIcon from "./../public/static/platforms/rabbitmq.svg";
import postgresIcon from "./../public/static/platforms/postgresql.svg";

// CI/CD

import githubIcon from "@liara/platformicons/svg/github.svg";
import gitlabIcon from "@liara/platformicons/svg/gitlab.svg";

const types = [
  { logo: streamlitIcon, alt: "streamlit" },
  { logo: viteIcon, alt: "vite" },
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
  { logo: seqIcon, alt: "seq" },
  { logo: soketiIcon, alt: "soketi" },
  { logo: yiiIcon, alt: "yii" },
  { logo: nestIcon, alt: "nest" },
  { logo: nextIcon, alt: "next" },
  { logo: hugoIcon, alt: "hugo" },
  { logo: nuxtIcon, alt: "nuxt" },
  { logo: nginxIcon, alt: "nginx" },
  { logo: lumenIcon, alt: "lumen" },
  { logo: remixIcon, alt: "remix" },
  { logo: pythonIcon, alt: "python" },
  { logo: prismaIcon, alt: "prisma" },
  { logo: jekyllIcon, alt: "jekyll" },
  { logo: gatsbyIcon, alt: "gatsby" },
  { logo: svelteIcon, alt: "svelte" },
  { logo: blitzjsIcon, alt: "blitz" },
  { logo: strapiIcon, alt: "strapi" },
  { logo: celeryIcon, alt: "celery" },
  { logo: adonisIcon, alt: "adonisjs" },
  { logo: fastapiIcon, alt: "fastapi" },
  { logo: fastifyIcon, alt: "fastify" },
  { logo: flutterIcon, alt: "flutter" },
  { logo: gridsomeIcon, alt: "gridsome" },
  { logo: gridsomeIcon, alt: "gridsome" },
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
  // CI/CD
  { logo: githubIcon, alt: "github" },
  { logo: gitlabIcon, alt: "gitlab" },
];

export default function PlatformIcon({ platform }) {
  const type = types.find(type => type.alt === platform);
  return (
    <img
      className="page-icon"
      src={type.logo.src}
      alt={type.alt}
      style={{ pointerEvents: "none" }}
    />
  );
}
