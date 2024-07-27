import React, { Component } from "react";

import streamlitIcon from "@liara/platformicons/glass/png/streamlit.png";
import viteIcon from "@liara/platformicons/glass/png/vite.png";

// Apps

import vueIcon from "@liara/platformicons/glass/png/vuejs.png";
import phpIcon from "@liara/platformicons/glass/png/php.png";
import nodeIcon from "@liara/platformicons/glass/png/nodejs.png";
import reactIcon from "@liara/platformicons/glass/png/react.png";
import flaskIcon from "@liara/platformicons/glass/png/flask.png";
import staticIcon from "@liara/platformicons/glass/png/static.png";
import dockerIcon from "@liara/platformicons/glass/png/docker.png";
import djangoIcon from "@liara/platformicons/glass/png/django.png";
import netcoreIcon from "@liara/platformicons/glass/png/dotnet.png";
import laravelIcon from "@liara/platformicons/glass/png/laravel.png";
import angularIcon from "@liara/platformicons/glass/png/angular.png";

// One-click-apps

import matomoIcon from "@liara/platformicons/glass/png/matomo.png";
import unleashIcon from "@liara/platformicons/glass/png/unleash.png";
import n8nIcon from "@liara/platformicons/glass/png/n8n.png";
import odooIcon from "@liara/platformicons/glass/png/odoo.png";
// import pusherIcon from "./../public/static/platforms/pusher.svg";
import ghostIcon from "@liara/platformicons/glass/png/ghost.png";
import giteaIcon from "@liara/platformicons/glass/png/gitea.png";
import vscodeIcon from "@liara/platformicons/glass/png/vscode.png";
import chromeIcon from "@liara/platformicons/glass/png/chrome.png";
import kibanaIcon from "@liara/platformicons/glass/png/kibana.png";
import grafanaIcon from "@liara/platformicons/glass/png/grafana.png";
import imgproxyIcon from "@liara/platformicons/glass/png/imgproxy.png";
import metabaseIcon from "@liara/platformicons/glass/png/metabase.png";
import parseserverIcon from "@liara/platformicons/glass/png/parse.png";
import nextcloudIcon from "@liara/platformicons/glass/png/nextcloud.png";
import wordpressIcon from "@liara/platformicons/glass/png/wordpress.png";
import pocketbaseIcon from "@liara/platformicons/glass/png/pocketbase.png";
import prestashopIcon from "@liara/platformicons/glass/png/prestashop.png";
import mattermostIcon from "@liara/platformicons/glass/png/mattermost.png";
import rocketchatIcon from "@liara/platformicons/glass/png/rocket.chat.png";
import uptimekumaIcon from "@liara/platformicons/glass/png/kuma.png";
// import ackeeIcon from "../public/static/platforms/ackee.png";
import appsmithIcon from "@liara/platformicons/glass/png/appsmith.png";
import varnishIcon from "@liara/platformicons/glass/png/varnish.png";
import apacheanswerIcon from "@liara/platformicons/glass/png/apache.png";
import nocodbIcon from "@liara/platformicons/glass/png/nocodb.png";
import chromaIcon from "@liara/platformicons/glass/png/chroma.png";
import meilisearchIcon from "@liara/platformicons/glass/png/mailisearch.png";

import seqIcon from "@liara/platformicons/glass/png/seq.png";
import yiiIcon from "@liara/platformicons/glass/png/yii.png";
import hugoIcon from "@liara/platformicons/glass/png/Hugo.png";
import nestIcon from "@liara/platformicons/glass/png/nestjs.png";
import remixIcon from "@liara/platformicons/glass/png/remix.png";
import nginxIcon from "@liara/platformicons/glass/png/ngnix.png";
// import lumenIcon from "@liara/platformicons/glass/png/l";
import celeryIcon from "@liara/platformicons/glass/png/celery.png";
import prismaIcon from "@liara/platformicons/glass/png/prisma.png";
import svelteIcon from "@liara/platformicons/glass/png/svelte.png";
import jekyllIcon from "@liara/platformicons/glass/png/jekyll.png";
import blitzjsIcon from "@liara/platformicons/glass/png/blitzjs.png";
import strapiIcon from "@liara/platformicons/glass/png/strapi.png";
import flutterIcon from "@liara/platformicons/glass/png/flutter.png";
import adonisIcon from "@liara/platformicons/glass/png/adonisjs.png";
import fastapiIcon from "@liara/platformicons/glass/png/fastapi.png";
import fastifyIcon from "@liara/platformicons/glass/png/fastify.png";
import eleventyIcon from "@liara/platformicons/glass/png/Eleventy.png";
import gridsomeIcon from "@liara/platformicons/glass/png/gridsome.png";
import goIcon from "@liara/platformicons/glass/png/golang.png";
import nextIcon from "@liara/platformicons/glass/png/nextjs.png";
import nuxtIcon from "@liara/platformicons/glass/png/nuxtjs.png";
import soketiIcon from "@liara/platformicons/glass/png/soketi.png";
import pythonIcon from "@liara/platformicons/glass/png/python.png";
import gatsbyIcon from "@liara/platformicons/glass/png/gatsby.png";

// Databases

import mysqlIcon from "@liara/platformicons/glass/png/mysql.png";
import mssqlIcon from "@liara/platformicons/glass/png/mssql.png";
import arangodbIcon from "@liara/platformicons/glass/png/arangodb.png";
import redisIcon from "@liara/platformicons/glass/png/redis.png";
import mongodbIcon from "@liara/platformicons/glass/png/mongodb.png";
import mariadbIcon from "@liara/platformicons/glass/png/mariadb.png";
import elasticIcon from "@liara/platformicons/glass/png/elastic.png";
import rabbitmqIcon from "@liara/platformicons/glass/png/rabbitmq.png";
import postgresIcon from "@liara/platformicons/glass/png/postgresql.png";
import sqliteIcon from "@liara/platformicons/glass/png/sqlite.png";

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
  { logo: n8nIcon, alt: "n8n" },
  { logo: odooIcon, alt: "odoo" },
  { logo: ghostIcon, alt: "ghost" },
  { logo: giteaIcon, alt: "gitea" },
  { logo: vscodeIcon, alt: "vscode" },
//   { logo: pusherIcon, alt: "pusher" },
  { logo: kibanaIcon, alt: "kibana" },
  { logo: chromeIcon, alt: "chrome" },
  { logo: grafanaIcon, alt: "grafana" },
  { logo: imgproxyIcon, alt: "imgproxy" },
  { logo: metabaseIcon, alt: "metabase" },
  { logo: nextcloudIcon, alt: "nextcloud" },
  { logo: wordpressIcon, alt: "wordpress" },
  { logo: pocketbaseIcon, alt: "pocketbase" },
  { logo: prestashopIcon, alt: "prestashop" },
  { logo: mattermostIcon, alt: "mattermost" },
  { logo: rocketchatIcon, alt: "rocketchat" },
  { logo: parseserverIcon, alt: "parseserver" },
  { logo: matomoIcon, alt: "matomo" },
  { logo: unleashIcon, alt: "unleash" },
  { logo: uptimekumaIcon, alt: "uptimekuma" },
//   { logo: ackeeIcon, alt: "ackee" },
  { logo: appsmithIcon, alt: "appsmith" },
  { logo: varnishIcon, alt: "varnish" },
  { logo: apacheanswerIcon, alt: "apacheanswer" },
  { logo: nocodbIcon, alt: "nocodb" },
  { logo: chromaIcon, alt: "chroma" },
  { logo: meilisearchIcon, alt: "meilisearch" },

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
//   { logo: lumenIcon, alt: "lumen" },
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
  { logo: sqliteIcon, alt: "sqlite" },
  // CI/CD
  { logo: githubIcon, alt: "github" },
  { logo: gitlabIcon, alt: "gitlab" }
];

export default function PlatformIcon({ platform, style = {} }) {
  const type = types.find(type => type.alt === platform);

  return (
    <img
      className="page-icon"
      src={type.logo.src}
      alt={type.alt}
      style={{
        ...style,
        pointerEvents: "none"
      }}
    />
  );
}
