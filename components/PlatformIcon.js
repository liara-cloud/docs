import React, { Component } from "react";

import streamlitIcon from "./../public/static/platforms-glassicon/streamlit.svg";
import viteIcon from "./../public/static/platforms-glassicon/vite.svg";

// Apps

import vueIcon from "./../public/static/platforms-glassicon/vuejs.svg";
import phpIcon from "./../public/static/platforms-glassicon/php.svg";
import nodeIcon from "./../public/static/platforms-glassicon/nodejs.svg";
import reactIcon from "./../public/static/platforms-glassicon/react.svg";
import flaskIcon from "./../public/static/platforms-glassicon/flask.svg";
import staticIcon from "./../public/static/platforms-glassicon/static.svg";
import dockerIcon from "./../public/static/platforms-glassicon/docker.svg";
import djangoIcon from "./../public/static/platforms-glassicon/django.svg";
import netcoreIcon from "./../public/static/platforms-glassicon/dotnet.svg";
import laravelIcon from "./../public/static/platforms-glassicon/laravel.svg";
import angularIcon from "./../public/static/platforms-glassicon/angular.svg";

// One-click-apps

import odooIcon from "./../public/static/platforms-glassicon/odoo.svg";
import ghostIcon from "./../public/static/platforms-glassicon/ghost.svg";
import giteaIcon from "./../public/static/platforms-glassicon/gitea.svg";
import vscodeIcon from "./../public/static/platforms-glassicon/vscode.svg";
import chromeIcon from "./../public/static/platforms-glassicon/chrome.svg";
import kibanaIcon from "./../public/static/platforms-glassicon/kibana.svg";
import pusherIcon from "./../public/static/platforms/pusher.svg";
import grafanaIcon from "./../public/static/platforms-glassicon/grafana.svg";
import imgproxyIcon from "./../public/static/platforms-glassicon/imgproxy.svg";
import metabaseIcon from "./../public/static/platforms-glassicon/metabase.svg";
import nextcloudIcon from "./../public/static/platforms-glassicon/nextcloud.svg";
import wordpressIcon from "./../public/static/platforms-glassicon/wordpress.svg";
import prestashopIcon from "./../public/static/platforms-glassicon/prestashop.svg";
import mattermostIcon from "./../public/static/platforms-glassicon/mattermost.svg";
import rocketchatIcon from "./../public/static/platforms-glassicon/rocket.chat.svg";
import parseserverIcon from "./../public/static/platforms-glassicon/parse.svg";

// Instructions

import seqIcon from "./../public/static/platforms-glassicon/seq.svg";
import yiiIcon from "./../public/static/platforms-glassicon/yii.svg";
import hugoIcon from "./../public/static/platforms-glassicon/hugo.svg";
import nestIcon from "./../public/static/platforms-glassicon/nestjs.svg";
import remixIcon from "./../public/static/platforms-glassicon/remix.svg";
import nginxIcon from "./../public/static/platforms-glassicon/ngnix.svg";
import lumenIcon from "./../public/static/platforms/lumen.svg";
import celeryIcon from "./../public/static/platforms-glassicon/celery.svg";
import prismaIcon from "./../public/static/platforms-glassicon/prisma.svg";
import svelteIcon from "./../public/static/platforms-glassicon/svelte.svg";
import jekyllIcon from "./../public/static/platforms-glassicon/jekyll.svg";
import blitzjsIcon from "./../public/static/platforms-glassicon/blitzjs.svg";
import strapiIcon from "./../public/static/platforms-glassicon/strapi.svg";
import flutterIcon from "./../public/static/platforms-glassicon/flutter.svg";
import adonisIcon from "./../public/static/platforms-glassicon/adonisjs.svg";
import fastapiIcon from "./../public/static/platforms-glassicon/fastapi.svg";
import fastifyIcon from "./../public/static/platforms-glassicon/fastify.svg";
import eleventyIcon from "./../public/static/platforms-glassicon/eleventy.svg";
import gridsomeIcon from "./../public/static/platforms-glassicon/gridsome.svg";
import goIcon from "./../public/static/platforms-glassicon/golang.svg";
import nextIcon from "./../public/static/platforms-glassicon/nextjs.svg";
import nuxtIcon from "./../public/static/platforms-glassicon/nuxtjs.svg";
import soketiIcon from "./../public/static/platforms-glassicon/soketi.svg";
import pythonIcon from "./../public/static/platforms-glassicon/python.svg";
import gatsbyIcon from "./../public/static/platforms-glassicon/gatsby.svg";

// Databases

import mysqlIcon from "./../public/static/platforms-glassicon/mysql.svg";
import mssqlIcon from "./../public/static/platforms-glassicon/mssql.svg";
import arangodbIcon from "./../public/static/platforms-glassicon/arangodb.svg";
import redisIcon from "./../public/static/platforms-glassicon/redis.svg";
import mongodbIcon from "./../public/static/platforms-glassicon/mongodb.svg";
import mariadbIcon from "./../public/static/platforms-glassicon/mariadb.svg";
import elasticIcon from "./../public/static/platforms-glassicon/elastic.svg";
import rabbitmqIcon from "./../public/static/platforms-glassicon/rabbitmq.svg";
import postgresIcon from "./../public/static/platforms-glassicon/postgresql.svg";

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

  console.log(parseserverIcon);

  return (
    <img
      className="page-icon"
      src={type.logo.src}
      alt={type.alt}
      style={{
        pointerEvents: "none",
      }}
    />
  );
}
