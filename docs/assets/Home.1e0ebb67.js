import { s as u } from "./simple-icons.e1482deb.js";
import { _ as g } from "./index.4ebe8fdc.js";
import {
	e as $,
	o as v,
	m as d,
	q as o,
	t as r,
	j as a,
	g as M,
} from "./@vue.430f3dd9.js";
import { _ as I } from "./s01k.4d66f110.js";
import "./vue-vendor.e1ffa826.js";
const w = {
		title: "Column1",
		emits: ["hoverIn", "hoverOut"],
		data() {
			return {
				i: {
					linkedin: u.Get("linkedin").svg,
					github: u.Get("github").svg,
					leetcode: u.Get("leetcode").svg,
					mail: u.Get("maildotru").svg,
				},
			};
		},
	},
	k = { class: "column" },
	b = { class: "center" },
	O = { class: "socials" },
	y = ["innerHTML"],
	H = ["innerHTML"],
	T = ["innerHTML"],
	C = ["innerHTML"];
function j(n, e, s, f, l, m) {
	const i = $("router-link");
	return (
		v(),
		d("div", k, [
			o("div", b, [
				e[43] || (e[43] = o("h1", null, "Hi, I'm Japsimar Soin", -1)),
				e[44] || (e[44] = o("br", null, null, -1)),
				o("p", null, [
					e[23] || (e[23] = r(" I am a Software Engineer at ")),
					o(
						"a",
						{
							href: "http://plane.so/",
							onMouseenter: e[0] || (e[0] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[1] || (e[1] = (t) => n.$emit("hoverOut")),
						},
						"Plane",
						32
					),
					e[24] ||
						(e[24] = r(
							" since graduating from NIT Srinagar, with a Bachelor of Technology in Information Technology."
						)),
					e[25] || (e[25] = o("br", null, null, -1)),
					e[26] || (e[26] = o("br", null, null, -1)),
					e[27] ||
						(e[27] = r(
							" I have experience in Full-Stack development, Generative AIs, and DevOps, with contributions to open-source projects. "
						)),
					e[28] || (e[28] = o("br", null, null, -1)),
					e[29] || (e[29] = o("br", null, null, -1)),
					e[30] ||
						(e[30] = r(" Passionate about engineering software, I work with ")),
					o(
						"a",
						{
							href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
							onMouseenter: e[2] || (e[2] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[3] || (e[3] = (t) => n.$emit("hoverOut")),
						},
						"JavaScript, ",
						32
					),
					o(
						"a",
						{
							href: "https://nextjs.org/",
							onMouseenter: e[4] || (e[4] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[5] || (e[5] = (t) => n.$emit("hoverOut")),
						},
						"Next.js",
						32
					),
					e[31] || (e[31] = r(", ")),
					o(
						"a",
						{
							href: "https://mobx.js.org/README.html",
							onMouseenter: e[6] || (e[6] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[7] || (e[7] = (t) => n.$emit("hoverOut")),
						},
						"Mobx",
						32
					),
					e[32] || (e[32] = r(", and ")),
					o(
						"a",
						{
							href: "https://www.docker.com/ ",
							onMouseenter: e[8] || (e[8] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[9] || (e[9] = (t) => n.$emit("hoverOut")),
						},
						"cloud technologies",
						32
					),
					e[33] || (e[33] = r(" .")),
					e[34] || (e[34] = o("br", null, null, -1)),
					e[35] || (e[35] = o("br", null, null, -1)),
					e[36] ||
						(e[36] = r(
							" Aside from web development, I'm a Java-loving \u2764\uFE0F LeetCode monkey who enjoys reading non-fiction books in his free time. "
						)),
					e[37] || (e[37] = o("br", null, null, -1)),
					e[38] || (e[38] = r()),
					e[39] || (e[39] = o("br", null, null, -1)),
					e[40] ||
						(e[40] = r(" While you're here, feel free to check out my ")),
					a(
						i,
						{
							to: "/projects",
							onMouseenter: e[10] || (e[10] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[11] || (e[11] = (t) => n.$emit("hoverOut")),
							class: "special-link",
						},
						{ default: M(() => e[22] || (e[22] = [r("projects")])), _: 1 }
					),
					e[41] || (e[41] = r(" or ")),
					o(
						"a",
						{
							href: "https://www.linkedin.com/in/japsimar-soin/",
							onMouseenter: e[12] || (e[12] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[13] || (e[13] = (t) => n.$emit("hoverOut")),
							class: "special-link",
						},
						"get in touch",
						32
					),
					e[42] || (e[42] = r(". ")),
				]),
				o("div", O, [
					o(
						"a",
						{
							innerHTML: l.i.linkedin,
							href: "https://www.linkedin.com/in/japsimar-soin/",
							onMouseenter: e[14] || (e[14] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[15] || (e[15] = (t) => n.$emit("hoverOut")),
						},
						null,
						40,
						y
					),
					o(
						"a",
						{
							innerHTML: l.i.github,
							href: "https://github.com/japsimar-soin",
							onMouseenter: e[16] || (e[16] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[17] || (e[17] = (t) => n.$emit("hoverOut")),
						},
						null,
						40,
						H
					),
					o(
						"a",
						{
							innerHTML: l.i.leetcode,
							href: "https://leetcode.com/u/japsimar_soin/",
							onMouseenter: e[18] || (e[18] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[19] || (e[19] = (t) => n.$emit("hoverOut")),
						},
						null,
						40,
						T
					),
					o(
						"a",
						{
							innerHTML: l.i.mail,
							href: "mailto:japsimarsoin2003@gmail.com",
							onMouseenter: e[20] || (e[20] = (t) => n.$emit("hoverIn")),
							onMouseleave: e[21] || (e[21] = (t) => n.$emit("hoverOut")),
						},
						null,
						40,
						C
					),
				]),
			]),
		])
	);
}
var L = g(w, [
		["render", j],
		["__scopeId", "data-v-67fa133a"],
	]),
	S = "/me.jpg";
const B = {
		title: "Column2",
		emits: ["hoverIn", "hoverOut"],
		methods: {
			g(n) {
				window.open(n);
			},
			changeTheme() {
				const n = window.localStorage.getItem("t"),
					e = document.querySelector("html");
				let s;
				n
					? n == "light"
						? (s = "dark")
						: n == "dark" && (s = "light")
					: e.classList.contains("dark")
					? (s = "light")
					: (s = "dark"),
					window.localStorage.setItem("t", s),
					e.classList.remove("dark"),
					e.classList.add(s);
			},
		},
	},
	G = { class: "column" };
function N(n, e, s, f, l, m) {
	return (
		v(),
		d("div", G, [
			(v(),
			d(
				"svg",
				{
					role: "icon",
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg",
					"aria-labelledby": "color-scheme-dark",
					class: "change-theme",
					onMouseenter: e[0] || (e[0] = (i) => n.$emit("hoverIn")),
					onMouseleave: e[1] || (e[1] = (i) => n.$emit("hoverOut")),
					onClick:
						e[2] || (e[2] = (...i) => m.changeTheme && m.changeTheme(...i)),
				},
				e[3] ||
					(e[3] = [
						o(
							"path",
							{
								d: "M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z",
							},
							null,
							-1
						),
					]),
				32
			)),
			e[4] ||
				(e[4] = o(
					"div",
					{ class: "image-container" },
					[
						o("img", { src: I, class: "rotating-image" }),
						o("img", {
							src: S,
							class: "avatar",
							style: { transform: "scale(1.5)" },
						}),
					],
					-1
				)),
		])
	);
}
var E = g(B, [
	["render", N],
	["__scopeId", "data-v-4c7b5482"],
]);
const J = {
		title: "Home",
		emits: ["hoverIn", "hoverOut"],
		components: { Column1: L, Column2: E },
	},
	z = { class: "primary-grid" };
function A(n, e, s, f, l, m) {
	const i = $("Column2"),
		t = $("Column1");
	return (
		v(),
		d("div", z, [
			a(i, {
				onHoverIn: e[0] || (e[0] = (p) => n.$emit("hoverIn")),
				onHoverOut: e[1] || (e[1] = (p) => n.$emit("hoverOut")),
			}),
			a(t, {
				onHoverIn: e[2] || (e[2] = (p) => n.$emit("hoverIn")),
				onHoverOut: e[3] || (e[3] = (p) => n.$emit("hoverOut")),
			}),
		])
	);
}
var F = g(J, [["render", A]]);
export { F as default };
