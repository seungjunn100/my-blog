import { useEffect } from "react";
import { useLocation } from "react-router";
import { getMetaByPath } from "../../lib/metadata";

const SITE_NAME = "junn.dev";
const SITE_URL = "https://junn.dev";

function upsertMetaByName(name: string, content: string) {
  let element = document.head.querySelector(
    `meta[name="${name}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let element = document.head.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function RouteMetaSync() {
  const location = useLocation();

  useEffect(() => {
    const meta = getMetaByPath(location.pathname);

    const fullTitle =
      meta.title === SITE_NAME ? SITE_NAME : `${meta.title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${meta.path}`;
    const imageUrl = `${SITE_URL}${meta.image}`;

    document.title = fullTitle;

    upsertCanonical(canonicalUrl);

    upsertMetaByName("description", meta.description);
    upsertMetaByName("theme-color", "#242424");

    upsertMetaByProperty("og:type", meta.type);
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", imageUrl);
    upsertMetaByProperty("og:locale", "ko_KR");
    upsertMetaByProperty("og:site_name", SITE_NAME);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByName("twitter:image", imageUrl);
  }, [location.pathname]);

  return null;
}