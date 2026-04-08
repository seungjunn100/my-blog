import { useLayoutEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

type MetaKey =
  | "description"
  | "theme-color"
  | "og:type"
  | "og:title"
  | "og:description"
  | "og:url"
  | "og:image"
  | "og:locale"
  | "og:site_name"
  | "twitter:card"
  | "twitter:title"
  | "twitter:description"
  | "twitter:image";

const SITE_NAME = "junn.dev";
const SITE_URL = "https://junn.dev";
const DEFAULT_OG_IMAGE = "/og-image.png";

function upsertMeta(
  selector: string,
  create: () => HTMLMetaElement | HTMLLinkElement,
  update: (element: HTMLMetaElement | HTMLLinkElement) => void
) {
  let element = document.head.querySelector(selector) as
    | HTMLMetaElement
    | HTMLLinkElement
    | null;

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  update(element);
}

export function PageMeta({ title, description, path = "/", image = DEFAULT_OG_IMAGE, type = "website" }: PageMetaProps) {
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;

  useLayoutEffect(() => {
    document.title = fullTitle;

    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        return link;
      },
      (el) => {
        el.setAttribute("href", canonicalUrl);
      }
    );

    const metaEntries: Array<[string, "name" | "property", MetaKey]> = [
      ['meta[name="description"]', "name", "description"],
      ['meta[name="theme-color"]', "name", "theme-color"],
      ['meta[property="og:type"]', "property", "og:type"],
      ['meta[property="og:title"]', "property", "og:title"],
      ['meta[property="og:description"]', "property", "og:description"],
      ['meta[property="og:url"]', "property", "og:url"],
      ['meta[property="og:image"]', "property", "og:image"],
      ['meta[property="og:locale"]', "property", "og:locale"],
      ['meta[property="og:site_name"]', "property", "og:site_name"],
      ['meta[name="twitter:card"]', "name", "twitter:card"],
      ['meta[name="twitter:title"]', "name", "twitter:title"],
      ['meta[name="twitter:description"]', "name", "twitter:description"],
      ['meta[name="twitter:image"]', "name", "twitter:image"],
    ];

    const values: Record<MetaKey, string> = {
      description,
      "theme-color": "#242424",
      "og:type": type,
      "og:title": fullTitle,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:image": imageUrl,
      "og:locale": "ko_KR",
      "og:site_name": SITE_NAME,
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": imageUrl,
    };

    for (const [selector, attrName, attrValue] of metaEntries) {
      upsertMeta(
        selector,
        () => {
          const meta = document.createElement("meta");
          meta.setAttribute(attrName, attrValue);
          return meta;
        },
        (el) => {
          el.setAttribute(attrName, attrValue);
          el.setAttribute("content", values[attrValue]);
        }
      );
    }
  }, [fullTitle, description, canonicalUrl, imageUrl, type]);

  return null;
}