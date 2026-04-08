import { renderToString } from "react-dom/server";
import { Link, NavLink, Outlet, RouterProvider, createMemoryRouter, useLocation, useParams } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
//#region src/components/layout/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "site-footer",
		children: /* @__PURE__ */ jsx("p", {
			className: "site-footer__copy",
			children: "© 2026 junn.dev"
		})
	});
}
//#endregion
//#region src/components/layout/Navigation.tsx
function Navigation() {
	return /* @__PURE__ */ jsx("nav", {
		className: "site-header__nav",
		children: /* @__PURE__ */ jsxs("ul", {
			className: "site-header__ul",
			children: [/* @__PURE__ */ jsx("li", {
				className: "site-header__list",
				children: /* @__PURE__ */ jsx(NavLink, {
					to: "/",
					className: "site-header__link",
					children: "Home"
				})
			}), /* @__PURE__ */ jsx("li", {
				className: "site-header__list",
				children: /* @__PURE__ */ jsx(NavLink, {
					to: "/notes",
					className: "site-header__link",
					children: "Notes"
				})
			})]
		})
	});
}
//#endregion
//#region src/components/layout/Header.tsx
function Header() {
	return /* @__PURE__ */ jsx("header", {
		className: "site-header",
		children: /* @__PURE__ */ jsxs("div", {
			className: "site-header__inner",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "site-header__logo",
				children: "junn.dev"
			}), /* @__PURE__ */ jsx(Navigation, {})]
		})
	});
}
//#endregion
//#region src/layouts/RootLayout.tsx
function RootLayout() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("main", {
			className: "site-main",
			children: /* @__PURE__ */ jsx(Outlet, {})
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region content/javascript/js-closure.md?raw
var js_closure_default = "---\r\ntitle: 클로저(Closure) 정리\r\ndescription: 자바스크립트 클로저 개념 이해\r\ndate: 2026-04-01\r\ncategory: javascript\r\nslug: js-closure\r\nthumbnail: /thumbnails/use-memo.png\r\n---\r\n\r\n## 클로저란?\r\n\r\n클로저는 함수가 선언될 당시의 외부 변수를 기억하는 개념이다.\r\n\r\n## 예시\r\n\r\n```js\r\nfunction outer() {\r\n  let count = 0;\r\n\r\n  return function inner() {\r\n    count++;\r\n    return count;\r\n  };\r\n}\r\n\r\nconst counter = outer();\r\nconsole.log(counter()); // 1\r\nconsole.log(counter()); // 2";
//#endregion
//#region content/nextjs/next-routing.md?raw
var next_routing_default = "---\r\ntitle: Next.js 라우팅 구조\r\ndescription: Next.js App Router 기반 라우팅 구조 이해\r\ndate: 2026-04-02\r\ncategory: nextjs\r\nslug: next-routing\r\nthumbnail: /thumbnails/use-memo.png\r\n---\r\n\r\n## App Router란?\r\n\r\nNext.js의 App Router는 파일 기반 라우팅 시스템이다.\r\n\r\n## 구조\r\n\r\n```txt\r\napp/\r\n  page.tsx        → /\r\n  blog/\r\n    page.tsx      → /blog\r\n```\r\n\r\n## 특징\r\n\r\n- 파일 기반 라우팅\r\n- 서버 컴포넌트 지원\r\n- 레이아웃 분리 가능\r\n\r\n## 정리\r\n\r\nApp Router는 기존보다 더 직관적인 구조를 제공한다.";
//#endregion
//#region content/react/use-memo.md?raw
var use_memo_default = "---\r\ntitle: useMemo 정리\r\ndescription: useMemo의 개념과 언제 사용하면 좋은지 정리한 글\r\ndate: 2026-04-01\r\ncategory: react\r\nslug: use-memo\r\nthumbnail: /thumbnails/use-memo.png\r\n---\r\n\r\n![browser rendering](/thumbnails/use-memo.png)\r\n\r\n## useMemo란?\r\n\r\nuseMemo는 계산 결과를 메모이제이션하는 React Hook이다.\r\n\r\n### 기본 문법\r\n\r\n```tsx\r\nconst memoizedValue = useMemo(() => {\r\n  return computeExpensiveValue(a, b);\r\n}, [a, b]);\r\n```\r\n\r\n### 정리\r\n\r\n무조건 사용하는 것이 아니라,\r\n계산 비용이 크거나 참조 안정성이 중요할 때 고려하는 것이 좋다.\r\n\r\n이 단계에서는 아직 이 파일을 앱에서 읽지 않아도 괜찮아.  \r\n일단 **파일 형식 자체를 먼저 정하는 것**이 중요해.\r\n\r\n## B. `mockNotes.ts` 데이터도 이 형식에 맞춰 의식적으로 유지하기\r\n\r\n예를 들면 지금 mock 데이터도 최대한 markdown 파일 구조랑 비슷하게 생각하면 좋아.\r\n\r\n```ts\r\n{\r\n  title,\r\n  description,\r\n  category,\r\n  date,\r\n  slug,\r\n  content\r\n}\r\n```\r\n\r\n---\r\n\r\n> 즉 나중에 markdown 파일을 읽어오면 결국 이 객체 모양으로 바뀌어 들어올 거라고 생각하면 돼.";
//#endregion
//#region content/typescript/ts-basic.md?raw
var ts_basic_default = "---\r\ntitle: TypeScript 기본 타입\r\ndescription: TypeScript의 기본 타입 정리\r\ndate: 2026-03-30\r\ncategory: typescript\r\nslug: ts-basic\r\nthumbnail: /thumbnails/use-memo.png\r\n---\r\n\r\n## TypeScript란?\r\n\r\nTypeScript는 JavaScript에 타입을 추가한 언어이다.\r\n\r\n## 기본 타입\r\n\r\n```ts\r\nlet name: string = \"Junn\";\r\nlet age: number = 30;\r\nlet isActive: boolean = true;\r\n```\r\n\r\n## 장점\r\n\r\n- 타입 안정성\r\n- 코드 가독성 향상\r\n- 유지보수 용이\r\n\r\n## 정리\r\n\r\nTypeScript는 규모가 커질수록 더 큰 장점을 가진다.";
//#endregion
//#region content/web/browser-rendering.md?raw
var browser_rendering_default = "---\r\ntitle: 브라우저 렌더링 과정\r\ndescription: 브라우저가 화면을 그리는 과정 정리\r\ndate: 2026-03-28\r\ncategory: web\r\nslug: browser-rendering\r\nthumbnail: /thumbnails/use-memo.png\r\n---\r\n\r\n## 렌더링 과정\r\n\r\n브라우저는 HTML, CSS를 파싱하여 화면을 그린다.\r\n\r\n## 흐름\r\n\r\n1. HTML 파싱 → DOM 생성\r\n2. CSS 파싱 → CSSOM 생성\r\n3. Render Tree 생성\r\n4. Layout\r\n5. Paint\r\n\r\n## 왜 중요한가?\r\n\r\n렌더링 과정을 이해하면 성능 최적화에 도움이 된다.\r\n\r\n## 정리\r\n\r\n렌더링 과정은 웹 성능의 핵심이다.";
//#endregion
//#region src/lib/notes.ts
var categories$3 = [
	"javascript",
	"typescript",
	"react",
	"nextjs",
	"web",
	"ai"
];
function isNoteCategory$2(value) {
	return categories$3.includes(value);
}
/**
* content 폴더의 모든 markdown 파일을 가져오는 부분
*  - "/content/--/-.md" : content 폴더 아래의 모든 markdown 파일을 가져옴
*  - query: "?raw" : 파일을 "문자열"로 가져옴
*  - import: "default" : default export 값만 가져옴
*  - eager: true : 런타임이 아니라 빌드 시점에 한 번에 로드
* 
* 예시
*      {
*        "/content/react/use-memo.md": "markdown 전체 문자열",
*        "/content/javascript/array-map.md": "markdown 전체 문자열"
*      }
*/
var noteFiles = /* @__PURE__ */ Object.assign({
	"/content/javascript/js-closure.md": js_closure_default,
	"/content/nextjs/next-routing.md": next_routing_default,
	"/content/react/use-memo.md": use_memo_default,
	"/content/typescript/ts-basic.md": ts_basic_default,
	"/content/web/browser-rendering.md": browser_rendering_default
});
/**
* frontmatter 한 줄을 파싱하는 함수
* 
* 예시
*      "title: useMemo 정리" → { key: "title", value: "useMemo 정리" }
*/
function parseFrontmatterLine(line) {
	const separatorIndex = line.indexOf(":");
	if (separatorIndex === -1) return null;
	return {
		key: line.slice(0, separatorIndex).trim(),
		value: line.slice(separatorIndex + 1).trim()
	};
}
/**
* markdown 문자열에서 frontmatter, 본문(content)을 분리하는 함수
*
* 예시
*      ---
*      title: ...
*      ---
*      ## 본문
* →
*      {
*        data: { title: "...", ... },
*        content: "## 본문..."
*      }
*/
function parseMarkdownFile(rawContent) {
	const trimmedContent = rawContent.trim();
	if (!trimmedContent.startsWith("---")) throw new Error("Frontmatter가 없는 markdown 파일입니다.");
	/**
	* "---" 기준으로 분리
	*
	* 예시
	*      [
	*        "",                      // 시작
	*        "\ntitle: ...",             // frontmatter
	*        "\n\n## 제목..."                // content
	*        "\n\n## 내용..."                // content
	*      ]
	*/
	const parts = trimmedContent.split("---");
	const frontmatterBlock = parts[1].trim();
	const content = parts.slice(2).join("---").trim();
	const data = {};
	frontmatterBlock.split("\n").forEach((line) => {
		const parsedLine = parseFrontmatterLine(line);
		if (!parsedLine) return;
		data[parsedLine.key] = parsedLine.value;
	});
	return {
		data,
		content
	};
}
function parseNoteFile(filePath, rawContent) {
	const { data, content } = parseMarkdownFile(rawContent);
	const title = data.title;
	const description = data.description;
	const date = data.date;
	const category = data.category;
	const slug = data.slug;
	const thumbnail = data.thumbnail;
	if (typeof title !== "string" || typeof description !== "string" || typeof date !== "string" || typeof category !== "string" || typeof slug !== "string" || typeof thumbnail !== "string") throw new Error(`Invalid frontmatter in file: ${filePath}`);
	if (!isNoteCategory$2(category)) throw new Error(`Invalid category in file: ${filePath}`);
	return {
		title,
		description,
		date,
		category,
		slug,
		thumbnail,
		content
	};
}
function getAllNoteDetails() {
	return Object.entries(noteFiles).map(([filePath, rawContent]) => parseNoteFile(filePath, rawContent)).sort((a, b) => b.date.localeCompare(a.date));
}
function getAllNotes() {
	return getAllNoteDetails().map(({ title, description, category, date, slug, thumbnail }) => ({
		title,
		description,
		category,
		date,
		slug,
		thumbnail
	}));
}
function getRecentNotes(limit = 5) {
	return getAllNotes().slice(0, limit);
}
function getNotesByCategory(category) {
	return getAllNotes().filter((note) => note.category === category);
}
function getNoteByCategoryAndSlug(category, slug) {
	return getAllNoteDetails().find((note) => note.category === category && note.slug === slug);
}
//#endregion
//#region src/components/common/PageMeta.tsx
var SITE_NAME$1 = "junn.dev";
var SITE_URL$1 = "https://junn.dev";
var DEFAULT_OG_IMAGE$1 = "/og-image.png";
function upsertMeta(selector, create, update) {
	let element = document.head.querySelector(selector);
	if (!element) {
		element = create();
		document.head.appendChild(element);
	}
	update(element);
}
function PageMeta({ title, description, path = "/", image = DEFAULT_OG_IMAGE$1, type = "website" }) {
	const fullTitle = title === SITE_NAME$1 ? SITE_NAME$1 : `${title} | ${SITE_NAME$1}`;
	const canonicalUrl = `${SITE_URL$1}${path}`;
	const imageUrl = `${SITE_URL$1}${image}`;
	useLayoutEffect(() => {
		document.title = fullTitle;
		upsertMeta("link[rel=\"canonical\"]", () => {
			const link = document.createElement("link");
			link.setAttribute("rel", "canonical");
			return link;
		}, (el) => {
			el.setAttribute("href", canonicalUrl);
		});
		const metaEntries = [
			[
				"meta[name=\"description\"]",
				"name",
				"description"
			],
			[
				"meta[name=\"theme-color\"]",
				"name",
				"theme-color"
			],
			[
				"meta[property=\"og:type\"]",
				"property",
				"og:type"
			],
			[
				"meta[property=\"og:title\"]",
				"property",
				"og:title"
			],
			[
				"meta[property=\"og:description\"]",
				"property",
				"og:description"
			],
			[
				"meta[property=\"og:url\"]",
				"property",
				"og:url"
			],
			[
				"meta[property=\"og:image\"]",
				"property",
				"og:image"
			],
			[
				"meta[property=\"og:locale\"]",
				"property",
				"og:locale"
			],
			[
				"meta[property=\"og:site_name\"]",
				"property",
				"og:site_name"
			],
			[
				"meta[name=\"twitter:card\"]",
				"name",
				"twitter:card"
			],
			[
				"meta[name=\"twitter:title\"]",
				"name",
				"twitter:title"
			],
			[
				"meta[name=\"twitter:description\"]",
				"name",
				"twitter:description"
			],
			[
				"meta[name=\"twitter:image\"]",
				"name",
				"twitter:image"
			]
		];
		const values = {
			description,
			"theme-color": "#242424",
			"og:type": type,
			"og:title": fullTitle,
			"og:description": description,
			"og:url": canonicalUrl,
			"og:image": imageUrl,
			"og:locale": "ko_KR",
			"og:site_name": SITE_NAME$1,
			"twitter:card": "summary_large_image",
			"twitter:title": fullTitle,
			"twitter:description": description,
			"twitter:image": imageUrl
		};
		for (const [selector, attrName, attrValue] of metaEntries) upsertMeta(selector, () => {
			const meta = document.createElement("meta");
			meta.setAttribute(attrName, attrValue);
			return meta;
		}, (el) => {
			el.setAttribute(attrName, attrValue);
			el.setAttribute("content", values[attrValue]);
		});
	}, [
		fullTitle,
		description,
		canonicalUrl,
		imageUrl,
		type
	]);
	return null;
}
//#endregion
//#region src/pages/HomePage.tsx
var categoryLabelMap$3 = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	react: "React",
	nextjs: "Next.js",
	web: "Web",
	ai: "AI"
};
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "junn.dev",
		description: "프론트엔드 개발자로 성장하기 위해 JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 기록합니다.",
		path: "/"
	}), /* @__PURE__ */ jsxs("section", {
		className: "home",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "sr-only",
				children: "Home"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "home__description",
				children: "이 블로그는 신입 개발자로서 성장하기 위해 학습한 내용을 정리하고 기록하는 공간입니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "home__description",
				children: "단순히 개념을 읽고 넘어가는 것이 아니라, 이해한 내용을 스스로 풀어내며 학습을 깊이 있게 쌓아가는 것을 목표로 하고 있습니다. 더디더라도 빠르게 소비되는 지식보다, 오래 남는 이해를 만드는 데에 집중하고 있습니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "home__description",
				children: "초기에는 JavaScript, TypeScript, React, Next.js 등 프론트엔드 중심의 내용을 다루지만, 점차 개발 전반에 대한 이해를 넓히며 백엔드, 인프라 등으로 학습 범위를 확장해 나갈 예정입니다. 또한 AI를 활용한 개발 방식과 프로젝트에 접목하는 방법에 대해서도 함께 고민하고 기록해 나가고자 합니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "home__description",
				children: "꾸준한 기록을 통해 저만의 개발 기준과 사고 과정을 만들어가는 것을 목표로 합니다."
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "home-notes",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "home-notes__title",
					children: "Recent Notes"
				}), /* @__PURE__ */ jsx("ul", {
					className: "home-notes__recent-list",
					children: getRecentNotes().map((note) => /* @__PURE__ */ jsx("li", {
						className: "home-notes__recent-item",
						children: /* @__PURE__ */ jsxs("div", {
							className: "home-notes__recent-inner",
							children: [/* @__PURE__ */ jsx(Link, {
								to: `/notes/${note.category}/${note.slug}`,
								className: "home-notes__recent-link",
								children: `[ ${categoryLabelMap$3[note.category]} ] ${note.title}`
							}), /* @__PURE__ */ jsx("time", {
								className: "home-notes__recent-date",
								dateTime: note.date,
								children: note.date
							})]
						})
					}, `${note.category}-${note.slug}`))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "home-links",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "home-links__title",
					children: "Link"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "home-links__list",
					children: [
						/* @__PURE__ */ jsx("li", {
							className: "home-links__item",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "https://www.notion.so/191931a2ff5e801f9867f5e3248f3210",
								target: "_blank",
								className: "home-links__link",
								children: [/* @__PURE__ */ jsx("span", {
									className: "home-links__icon",
									children: "📄"
								}), "이력서"]
							})
						}),
						/* @__PURE__ */ jsx("li", {
							className: "home-links__item",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "https://github.com/seungjunn100",
								target: "_blank",
								className: "home-links__link",
								children: [/* @__PURE__ */ jsx("span", {
									className: "home-links__icon",
									children: "🐙"
								}), "깃허브"]
							})
						}),
						/* @__PURE__ */ jsx("li", {
							className: "home-links__item",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "https://github.com/seungjunn100",
								target: "_blank",
								className: "home-links__link",
								children: [/* @__PURE__ */ jsx("span", {
									className: "home-links__icon",
									children: "✨"
								}), "포트폴리오"]
							})
						})
					]
				})]
			})
		]
	})] });
}
//#endregion
//#region src/components/notes/NoteFilter.tsx
var categoryLabelMap$2 = {
	all: "All",
	javascript: "JavaScript",
	typescript: "TypeScript",
	react: "React",
	nextjs: "Next.js",
	web: "Web",
	ai: "AI"
};
function NoteFilter({ selectedCategory, categories, onSelectCategory }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "note-filter__list",
		children: categories.map((category) => {
			const isSelected = selectedCategory === category;
			return /* @__PURE__ */ jsx("li", {
				className: "note-filter__item",
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					className: `note-filter__button ${isSelected ? "is-active" : ""}`,
					onClick: () => onSelectCategory(category),
					"aria-pressed": isSelected,
					children: categoryLabelMap$2[category]
				})
			}, category);
		})
	});
}
//#endregion
//#region src/components/notes/NoteCard.tsx
var categoryLabelMap$1 = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	react: "React",
	nextjs: "Next.js",
	web: "Web",
	ai: "AI"
};
function NoteCard({ note }) {
	return /* @__PURE__ */ jsxs("li", {
		className: "note-list__item",
		children: [/* @__PURE__ */ jsx(Link, {
			className: "note-list__link",
			to: `/notes/${note.category}/${note.slug}`,
			children: `[ ${categoryLabelMap$1[note.category]} ] ${note.title}`
		}), /* @__PURE__ */ jsx("time", {
			className: "note-list__date",
			dateTime: note.date,
			children: note.date
		})]
	});
}
//#endregion
//#region src/components/notes/NoteList.tsx
function NoteList({ notes }) {
	if (notes.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "note-list__empty",
		children: "해당 카테고리의 게시물이 없습니다."
	});
	return /* @__PURE__ */ jsx("ul", {
		className: "note-list",
		children: notes.map((note) => /* @__PURE__ */ jsx(NoteCard, { note }, `${note.category}-${note.slug}`))
	});
}
//#endregion
//#region src/pages/NotesPage.tsx
var categories$2 = [
	"all",
	"javascript",
	"typescript",
	"react",
	"nextjs",
	"web",
	"ai"
];
function NotesPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const filteredNotes = useMemo(() => {
		if (selectedCategory === "all") return getAllNotes();
		return getNotesByCategory(selectedCategory);
	}, [selectedCategory]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "Notes",
		description: "JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 정리한 노트 목록 페이지입니다.",
		path: "/notes"
	}), /* @__PURE__ */ jsxs("section", {
		className: "notes",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "sr-only",
				children: "Notes"
			}),
			/* @__PURE__ */ jsx(NoteFilter, {
				selectedCategory,
				categories: categories$2,
				onSelectCategory: setSelectedCategory
			}),
			/* @__PURE__ */ jsx(NoteList, { notes: filteredNotes })
		]
	})] });
}
//#endregion
//#region src/pages/NoteDetailPage.tsx
var categories$1 = [
	"javascript",
	"typescript",
	"react",
	"nextjs",
	"web",
	"ai"
];
var categoryLabelMap = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	react: "React",
	nextjs: "Next.js",
	web: "Web",
	ai: "AI"
};
function isNoteCategory$1(value) {
	return categories$1.includes(value);
}
function NoteDetailPage() {
	const { category, slug } = useParams();
	if (!category || !slug) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "잘못된 접근",
		description: "잘못된 경로로 접근한 페이지입니다.",
		path: "/notes"
	}), /* @__PURE__ */ jsxs("section", {
		className: "invalid-access",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "invalid-access__title",
			children: "잘못된 접근입니다."
		}), /* @__PURE__ */ jsx(Link, {
			to: "/notes",
			className: "back-link",
			children: "← 목록으로 돌아가기"
		})]
	})] });
	if (!isNoteCategory$1(category)) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "유효하지 않은 카테고리",
		description: "유효하지 않은 카테고리 경로입니다.",
		path: "/notes"
	}), /* @__PURE__ */ jsxs("section", {
		className: "invalid-category",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "invalid-category__title",
				children: "유효하지 않은 카테고리입니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "invalid-category__description",
				children: "입력한 주소가 잘못되었거나, 유효하지 않은 카테고리입니다."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/notes",
				className: "back-link",
				children: "← 목록으로 돌아가기"
			})
		]
	})] });
	const note = getNoteByCategoryAndSlug(category, slug);
	if (!note) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "존재하지 않은 노트",
		description: "요청한 게시글을 찾을 수 없습니다.",
		path: "/notes"
	}), /* @__PURE__ */ jsxs("section", {
		className: "note-empty",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "note-empty__title",
				children: "노트를 찾을 수 없습니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "note-empty__description",
				children: "입력한 주소가 잘못되었거나, 존재하지 않거나, 삭제된 글입니다."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/notes",
				className: "back-link",
				children: "← 목록으로 돌아가기"
			})
		]
	})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: note.title,
		description: note.description,
		path: `/notes/${note.category}/${note.slug}`,
		image: note.thumbnail,
		type: "article"
	}), /* @__PURE__ */ jsx("section", {
		className: "note-detail",
		children: /* @__PURE__ */ jsxs("article", {
			className: "note-detail__article",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "note-detail__header",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "note-detail__title",
						children: `[ ${categoryLabelMap[note.category]} ] ${note.title}`
					}), /* @__PURE__ */ jsx("time", {
						className: "note-detail__date",
						dateTime: note.date,
						children: note.date
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "markdown-body",
					children: /* @__PURE__ */ jsx(ReactMarkdown, {
						rehypePlugins: [rehypeHighlight],
						children: note.content
					})
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/notes",
					className: "back-link",
					children: "← 목록으로 돌아가기"
				})
			]
		})
	})] });
}
//#endregion
//#region src/pages/NotFoundPage.tsx
function NotFoundPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageMeta, {
		title: "404 Not Found",
		description: "요청한 페이지를 찾을 수 없습니다.",
		path: useLocation().pathname
	}), /* @__PURE__ */ jsxs("section", {
		className: "not-found",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "not-found__code",
				children: "404"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "not-found__title",
				children: "페이지를 찾을 수 없습니다."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "not-found__description",
				children: "입력한 주소가 잘못되었거나, 존재하지 않거나, 삭제되었거나, 이동된 페이지일 수 있습니다."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "not-found__links",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "back-link",
					children: "← Home"
				}), /* @__PURE__ */ jsx(Link, {
					to: "/notes",
					className: "back-link",
					children: "← Notes"
				})]
			})
		]
	})] });
}
//#endregion
//#region src/app/routes.tsx
var routes = [{
	path: "/",
	element: /* @__PURE__ */ jsx(RootLayout, {}),
	children: [
		{
			index: true,
			element: /* @__PURE__ */ jsx(HomePage, {})
		},
		{
			path: "notes",
			element: /* @__PURE__ */ jsx(NotesPage, {})
		},
		{
			path: "notes/:category/:slug",
			element: /* @__PURE__ */ jsx(NoteDetailPage, {})
		},
		{
			path: "*",
			element: /* @__PURE__ */ jsx(NotFoundPage, {})
		}
	]
}];
//#endregion
//#region src/lib/metadata.ts
var SITE_NAME = "junn.dev";
var SITE_URL = "https://junn.dev";
var DEFAULT_OG_IMAGE = "/og-image.png";
var categories = [
	"javascript",
	"typescript",
	"react",
	"nextjs",
	"web",
	"ai"
];
function isNoteCategory(value) {
	return categories.includes(value);
}
function getMetaByPath(path) {
	if (path === "/") return {
		title: SITE_NAME,
		description: "프론트엔드 개발자로 성장하기 위해 JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 기록합니다.",
		path: "/",
		image: DEFAULT_OG_IMAGE,
		type: "website"
	};
	if (path === "/notes") return {
		title: "Notes",
		description: "JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 노트를 모아둔 페이지입니다.",
		path: "/notes",
		image: DEFAULT_OG_IMAGE,
		type: "website"
	};
	const match = path.match(/^\/notes\/([^/]+)\/([^/]+)$/);
	if (match) {
		const category = match[1];
		const slug = match[2];
		if (!category || !slug) return {
			title: "페이지를 찾을 수 없습니다",
			description: "존재하지 않거나 이동된 페이지입니다.",
			path,
			image: DEFAULT_OG_IMAGE,
			type: "website"
		};
		if (isNoteCategory(category)) {
			const note = getNoteByCategoryAndSlug(category, slug);
			if (note) return {
				title: note.title,
				description: note.description,
				path,
				image: note.thumbnail ?? DEFAULT_OG_IMAGE,
				type: "article"
			};
		}
	}
	return {
		title: "페이지를 찾을 수 없습니다",
		description: "존재하지 않거나 이동된 페이지입니다.",
		path,
		image: DEFAULT_OG_IMAGE,
		type: "website"
	};
}
function renderHeadTags(meta) {
	const fullTitle = meta.title === SITE_NAME ? SITE_NAME : `${meta.title} | ${SITE_NAME}`;
	const canonicalUrl = `${SITE_URL}${meta.path}`;
	const imageUrl = `${SITE_URL}${meta.image}`;
	return `
  <title>${escapeHtml(fullTitle)}</title>
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <meta name="description" content="${escapeHtml(meta.description)}" />
  <meta name="theme-color" content="#242424" />

  <meta property="og:type" content="${escapeHtml(meta.type)}" />
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(meta.description)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:image" content="${escapeHtml(imageUrl)}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:site_name" content="${SITE_NAME}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
  `.trim();
}
function escapeHtml(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
//#endregion
//#region src/entry-server.tsx
function getPrerenderRoutes() {
	const staticRoutes = ["/", "/notes"];
	const noteRoutes = getAllNotes().map((note) => `/notes/${note.category}/${note.slug}`);
	return [...staticRoutes, ...noteRoutes];
}
function render(url) {
	return {
		appHtml: renderToString(/* @__PURE__ */ jsx(RouterProvider, { router: createMemoryRouter(routes, { initialEntries: [url] }) })),
		headTags: renderHeadTags(getMetaByPath(url))
	};
}
//#endregion
export { getPrerenderRoutes, render };
