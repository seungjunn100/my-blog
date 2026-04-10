import { renderToString } from "react-dom/server";
import { Link, NavLink, Outlet, RouterProvider, createMemoryRouter, useParams } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
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
//#region content/web/hosting.md?raw
var hosting_default = "---\r\ntitle: 호스팅(Hosting)이란 무엇인가\r\ndescription: 웹 호스팅의 개념과 역할, 그리고 다양한 호스팅 방식에 대한 정리\r\ndate: 2026-04-10\r\ncategory: web\r\nslug: hosting\r\nthumbnail: /thumbnails/hosting.png\r\n---\r\n\r\n![호스팅(Hosting)](/thumbnails/hosting.png)\r\n\r\n## 호스팅(Hosting)\r\n\r\n호스팅은 웹사이트 또는 애플리케이션을 인터넷에서 접근 가능하도록 서버에 저장하고 제공하는 서비스다.\r\n\r\n개발자가 만든 웹사이트는 기본적으로 로컬 컴퓨터에 존재하므로 외부에서 접근할 수 없고, 24시간 켜져 있지도 않다. 반면, 서버는 항상 켜져 있는 특징이 있다. 따라서 웹사이트를 서비스하려면 인터넷에 연결된 서버 컴퓨터에 파일들을 올려야 한다.\r\n\r\n즉, 사용자가 브라우저를 통해 요청을 보냈을 때 그 요청에 응답할 수 있는 파일이 위치한 곳이 서버이며, 이 서버 공간을 제공하는게 호스팅이다.\r\n\r\n### 호스팅의 핵심 역할\r\n\r\n호스팅은 단순히 파일을 저장하는 것이 아니라, 다음과 같은 역할을 수행한다.\r\n\r\n#### 파일 저장 및 제공\r\n\r\nHTML, CSS, JS, 이미지 파일 등을 저장하고 사용자가 브라우저에서 요청을 보내면 해당 파일을 반환한다.\r\n\r\n#### 서버 실행 환경 제공\r\n\r\n사용자의 요청(로그인, 검색 등)을 처리할 수 있는 컴퓨팅 엔진(CPU, 메모리 등)이 돌아가는 환경을 제공하여 프로그램이 실제로 동작하게 만든다.\r\n\r\n#### 데이터베이스 연결\r\n\r\n많은 서비스들은 사용자의 정보, 게시글 등 데이터를 다룬다. 호스팅은 이런 데이터들을 자체 제공하기도 하지만 데이터의 양이 방대해지면 호스팅 서버와 데이터베이스 서버를 분리해서 사용할 수도 있다. 이 데이터베이스와 프로그램이 원활하게 대화할 수 있도록 연결하고 관리한다.\r\n\r\n#### 네트워크 및 보안 처리\r\n\r\n호스팅 서비스는 아래와 같은 인프라 관리를 대신해준다.\r\n\r\n- 보안 통신 (HTTPS/SSL)\r\n  \r\n  데이터 전송 시 암호화를 적용하는 SSL 인증서 설정을 관리하여 사용자 정보를 안전하게 보호해준다.\r\n\r\n- 접근 제어 (방화벽)\r\n  \r\n  허가되지 않은 비정상적인 접근을 차단하여 서버 내부의 데이터를 안전하게 지켜준다.\r\n\r\n- 공격 방어 (DDoS 방어)\r\n  \r\n  서버를 마비시키기 위해 대량의 가짜 트래픽을 보내는 DDoS 공격을 감지하고 차단한다.\r\n\r\n- 데이터 흐름 관리 (트래픽 처리)\r\n  \r\n  사용자가 몰릴 때 데이터 전송이 원활하게 이루어지도록 네트워크 대역폭을 조절하고 최적화한다.\r\n\r\n### 호스팅 종류\r\n\r\n#### 웹호스팅 (공유 호스팅)\r\n\r\n여러 웹사이트가 하나의 서버 자원(컴퓨팅 엔진(CPU, 메모리 등))을 함께 사용하는 방식이다.\r\n\r\n- 장점 : 비용이 매우 저렴하고 초보자도 쉽게 사용할 수 있다.\r\n\r\n- 단점 : 다른 사이트의 트래픽 급증 시 내 사이트도 느려질 수 있다.\r\n\r\n- 적합한 경우 : 소규모 블로그, 개인 포트폴리오, 초기 프로젝트\r\n\r\n#### 전용 호스팅 (서버 호스팅)\r\n\r\n서버 전체를 단독으로 사용하는 방식이다.\r\n\r\n- 장점 : 성능과 보안이 안정적이며, 서버 설정을 자유롭게 구성할 수 있다.\r\n\r\n- 단점 : 비용이 상대적으로 높고 직접 유지보수를 해야 한다.\r\n\r\n- 적합한 경우 : 백엔드 서버 운영, 대규모 트래픽 서비스, 금융·의료 등 높은 보안 요구 서비스\r\n\r\n#### 클라우드 호스팅\r\n\r\n클라우드 호스팅은 여러 서버를 하나의 인프라처럼 사용하여 유연하게 확장 가능한 방식이다.\r\n\r\n- 장점 : 트래픽에 따라 자원을 유연하게 확장/축소 가능하다.\r\n\r\n- 단점 : 사용량에 따라 비용 예측이 어려울 수 있다.\r\n\r\n- 적합한 경우 : 트래픽 변동이 큰 서비스, 스타트업, 엔터프라이즈\r\n\r\n#### 서버리스 호스팅\r\n\r\n서버리스 호스팅이란 서버를 직접 관리하지 않고, 요청이 발생할 때만 함수 단위로 코드를 실행하는 호스팅 방식이다.\r\n\r\n- 장점 : 배포가 매우 간편하며, 서버 관리 및 설정 등 복잡한 인프라 지식 없이도 바로 서비스를 운영할 수 있다.\r\n\r\n- 단점 : 오랫동안 호출되지 않다가 다시 실행될 때 발생하는 약간의 지연 시간으로 인한 초기 지연이 발생할 수 있고, 실행 시간 제한 및 서버 환경에 대한 제어가 제한적이다.\r\n\r\n- 적합한 경우 : Next.js 같은 프레임워크 기반 서비스, 간단한 API 서버, 이벤트 기반 처리";
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
var noteFiles = /* @__PURE__ */ Object.assign({ "/content/web/hosting.md": hosting_default });
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
	return /* @__PURE__ */ jsxs("section", {
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
	});
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
	return /* @__PURE__ */ jsxs("section", {
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
	});
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
	if (!category || !slug) return /* @__PURE__ */ jsxs("section", {
		className: "invalid-access",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "invalid-access__title",
			children: "잘못된 접근입니다."
		}), /* @__PURE__ */ jsx(Link, {
			to: "/notes",
			className: "back-link",
			children: "← 목록으로 돌아가기"
		})]
	});
	if (!isNoteCategory$1(category)) return /* @__PURE__ */ jsxs("section", {
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
	});
	const note = getNoteByCategoryAndSlug(category, slug);
	if (!note) return /* @__PURE__ */ jsxs("section", {
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
	});
	return /* @__PURE__ */ jsx("section", {
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
	});
}
//#endregion
//#region src/pages/NotFoundPage.tsx
function NotFoundPage() {
	return /* @__PURE__ */ jsxs("section", {
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
	});
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
