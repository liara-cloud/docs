import React from "react";
import phpIcon from "@liara/platformicons/svg/php.svg";
import laravelIcon from "@liara/platformicons/svg/laravel.svg";
import nodeIcon from "@liara/platformicons/svg/nodejs.svg";
import reactIcon from "@liara/platformicons/svg/react.svg";
import vueIcon from "@liara/platformicons/svg/vue.svg";
import angularIcon from "@liara/platformicons/svg/angularjs.svg";
import staticIcon from "@liara/platformicons/svg/HTML5.svg";
import djangoIcon from "@liara/platformicons/svg/django.svg";
import flaskIcon from "@liara/platformicons/svg/flask.svg";
import dockerIcon from "@liara/platformicons/svg/docker.svg";
import netcoreIcon from "@liara/platformicons/svg/dotnet.svg";

const types = [
  { logo: nodeIcon, alt: "nodejs" },
  { logo: laravelIcon, alt: "laravel" },
  { logo: phpIcon, alt: "php" },
  { logo: djangoIcon, alt: "django" },
  { logo: flaskIcon, alt: "flask" },
  { logo: netcoreIcon, alt: "netcore" },
  { logo: reactIcon, alt: "react" },
  { logo: angularIcon, alt: "angularjs" },
  { logo: vueIcon, alt: "vue" },
  { logo: staticIcon, alt: "HTML5" },
  { logo: dockerIcon, alt: "docker" },
];

export default function ProjectIcon({ platform }) {
  const type = types.find(type => type.alt === platform);
  return <img className="page-icon" src={type.logo.src} alt={type.alt} />;
}
