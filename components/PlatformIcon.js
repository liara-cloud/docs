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

import ghostIcon from "@liara/platformicons/svg/ghost.svg";
import giteaIcon from "@liara/platformicons/svg/gitea.svg";
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

// Instructions

import goIcon from "@liara/platformicons/svg/go.svg";
import yiiIcon from "@liara/platformicons/svg/yii.svg";
import nestIcon from "@liara/platformicons/svg/nest.svg";
import nextIcon from "@liara/platformicons/svg/next.svg";
import nuxtIcon from "@liara/platformicons/svg/nuxt.svg";
import lumenIcon from "@liara/platformicons/svg/lumen.svg";
import gatsbyIcon from "@liara/platformicons/svg/gatsby.svg";
import strapiIcon from "@liara/platformicons/svg/strapi.svg";
import adonisIcon from "@liara/platformicons/svg/adonisjs.svg";

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
  { logo: ghostIcon, alt: "ghost" },
  { logo: giteaIcon, alt: "gitea" },
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
];

export default function PlatformIcon({ platform }) {
  const type = types.find(type => type.alt === platform);
  return <img className="page-icon" src={type.logo.src} alt={type.alt} />;
}
