var app = (function () {
  "use strict";
  function e() {}
  function t(e) {
    return e();
  }
  function n() {
    return Object.create(null);
  }
  function l(e) {
    e.forEach(t);
  }
  function s(e) {
    return "function" == typeof e;
  }
  function i(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let r, o;
  function c(e, t) {
    return r || (r = document.createElement("a")), (r.href = t), e === r.href;
  }
  function a(t, n, l) {
    t.$$.on_destroy.push(
      (function (t, ...n) {
        if (null == t) return e;
        const l = t.subscribe(...n);
        return l.unsubscribe ? () => l.unsubscribe() : l;
      })(n, l)
    );
  }
  function u(e, t, n, l) {
    if (e) {
      const s = d(e, t, n, l);
      return e[0](s);
    }
  }
  function d(e, t, n, l) {
    return e[1] && l
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](l(t)))
      : n.ctx;
  }
  function f(e, t, n, l) {
    if (e[2] && l) {
      const s = e[2](l(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let l = 0; l < n; l += 1) e[l] = t.dirty[l] | s[l];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  }
  function m(e, t, n, l, s, i) {
    if (s) {
      const r = d(t, n, l, i);
      e.p(r, s);
    }
  }
  function p(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t;
    }
    return -1;
  }
  function $(e, t) {
    e.appendChild(t);
  }
  function g(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function h(e) {
    e.parentNode.removeChild(e);
  }
  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function b(e) {
    return document.createElement(e);
  }
  function y(e) {
    return document.createTextNode(e);
  }
  function x() {
    return y(" ");
  }
  function w() {
    return y("");
  }
  function k(e, t, n, l) {
    return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
  }
  function A(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function j(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function C(e, t, n, l) {
    null === n
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, l ? "important" : "");
  }
  function S(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }
  function T(e) {
    o = e;
  }
  function E() {
    const e = (function () {
      if (!o)
        throw new Error("Function called outside component initialization");
      return o;
    })();
    return (t, n, { cancelable: l = !1 } = {}) => {
      const s = e.$$.callbacks[t];
      if (s) {
        const i = (function (
          e,
          t,
          { bubbles: n = !1, cancelable: l = !1 } = {}
        ) {
          const s = document.createEvent("CustomEvent");
          return s.initCustomEvent(e, n, l, t), s;
        })(t, n, { cancelable: l });
        return (
          s.slice().forEach((t) => {
            t.call(e, i);
          }),
          !i.defaultPrevented
        );
      }
      return !0;
    };
  }
  const B = [],
    _ = [],
    M = [],
    P = [],
    z = Promise.resolve();
  let I = !1;
  function H(e) {
    M.push(e);
  }
  const L = new Set();
  let D = 0;
  function q() {
    const e = o;
    do {
      for (; D < B.length; ) {
        const e = B[D];
        D++, T(e), N(e.$$);
      }
      for (T(null), B.length = 0, D = 0; _.length; ) _.pop()();
      for (let e = 0; e < M.length; e += 1) {
        const t = M[e];
        L.has(t) || (L.add(t), t());
      }
      M.length = 0;
    } while (B.length);
    for (; P.length; ) P.pop()();
    (I = !1), L.clear(), T(e);
  }
  function N(e) {
    if (null !== e.fragment) {
      e.update(), l(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(H);
    }
  }
  const W = new Set();
  let R;
  function O() {
    R = { r: 0, c: [], p: R };
  }
  function U() {
    R.r || l(R.c), (R = R.p);
  }
  function F(e, t) {
    e && e.i && (W.delete(e), e.i(t));
  }
  function K(e, t, n, l) {
    if (e && e.o) {
      if (W.has(e)) return;
      W.add(e),
        R.c.push(() => {
          W.delete(e), l && (n && e.d(1), l());
        }),
        e.o(t);
    }
  }
  function V(e, t) {
    e.d(1), t.delete(e.key);
  }
  function G(e, t) {
    K(e, 1, 1, () => {
      t.delete(e.key);
    });
  }
  function Y(e, t, n, l, s, i, r, o, c, a, u, d) {
    let f = e.length,
      m = i.length,
      p = f;
    const $ = {};
    for (; p--; ) $[e[p].key] = p;
    const g = [],
      h = new Map(),
      v = new Map();
    for (p = m; p--; ) {
      const e = d(s, i, p),
        o = n(e);
      let c = r.get(o);
      c ? l && c.p(e, t) : ((c = a(o, e)), c.c()),
        h.set(o, (g[p] = c)),
        o in $ && v.set(o, Math.abs(p - $[o]));
    }
    const b = new Set(),
      y = new Set();
    function x(e) {
      F(e, 1), e.m(o, u), r.set(e.key, e), (u = e.first), m--;
    }
    for (; f && m; ) {
      const t = g[m - 1],
        n = e[f - 1],
        l = t.key,
        s = n.key;
      t === n
        ? ((u = t.first), f--, m--)
        : h.has(s)
        ? !r.has(l) || b.has(l)
          ? x(t)
          : y.has(s)
          ? f--
          : v.get(l) > v.get(s)
          ? (y.add(l), x(t))
          : (b.add(s), f--)
        : (c(n, r), f--);
    }
    for (; f--; ) {
      const t = e[f];
      h.has(t.key) || c(t, r);
    }
    for (; m; ) x(g[m - 1]);
    return g;
  }
  function J(e) {
    e && e.c();
  }
  function Q(e, n, i, r) {
    const { fragment: o, on_mount: c, on_destroy: a, after_update: u } = e.$$;
    o && o.m(n, i),
      r ||
        H(() => {
          const n = c.map(t).filter(s);
          a ? a.push(...n) : l(n), (e.$$.on_mount = []);
        }),
      u.forEach(H);
  }
  function X(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (l(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Z(e, t) {
    -1 === e.$$.dirty[0] &&
      (B.push(e), I || ((I = !0), z.then(q)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function ee(t, s, i, r, c, a, u, d = [-1]) {
    const f = o;
    T(t);
    const m = (t.$$ = {
      fragment: null,
      ctx: null,
      props: a,
      update: e,
      not_equal: c,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(s.context || (f ? f.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: s.target || f.$$.root,
    });
    u && u(m.root);
    let p = !1;
    if (
      ((m.ctx = i
        ? i(t, s.props || {}, (e, n, ...l) => {
            const s = l.length ? l[0] : n;
            return (
              m.ctx &&
                c(m.ctx[e], (m.ctx[e] = s)) &&
                (!m.skip_bound && m.bound[e] && m.bound[e](s), p && Z(t, e)),
              n
            );
          })
        : []),
      m.update(),
      (p = !0),
      l(m.before_update),
      (m.fragment = !!r && r(m.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(s.target);
        m.fragment && m.fragment.l(e), e.forEach(h);
      } else m.fragment && m.fragment.c();
      s.intro && F(t.$$.fragment),
        Q(t, s.target, s.anchor, s.customElement),
        q();
    }
    T(f);
  }
  class te {
    $destroy() {
      X(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  function ne(t) {
    let n;
    return {
      c() {
        (n = b("div")),
          (n.innerHTML =
            '<ul class="box-area svelte-dxw7lp"><li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li></ul>'),
          A(n, "class", "animation-area svelte-dxw7lp");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  class le extends te {
    constructor(e) {
      super(), ee(this, e, null, ne, i, {});
    }
  }
  function se(e, t, n) {
    const l = e.slice();
    return (l[4] = t[n]), l;
  }
  function ie(e, t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d = t[4].pageTitle + "";
    function f() {
      return t[2](t[4]);
    }
    return {
      key: e,
      first: null,
      c() {
        (n = b("li")),
          (l = b("i")),
          (i = x()),
          (r = b("span")),
          (o = y(d)),
          (c = x()),
          A(
            l,
            "class",
            (s = "mdi mdi-24px " + t[4].icon + " text-color svelte-11href6")
          ),
          A(n, "class", "svelte-11href6"),
          S(n, "active", t[4].active),
          (this.first = n);
      },
      m(e, t) {
        g(e, n, t),
          $(n, l),
          $(n, i),
          $(n, r),
          $(r, o),
          $(n, c),
          a || ((u = k(n, "click", f)), (a = !0));
      },
      p(e, i) {
        (t = e),
          1 & i &&
            s !==
              (s =
                "mdi mdi-24px " + t[4].icon + " text-color svelte-11href6") &&
            A(l, "class", s),
          1 & i && d !== (d = t[4].pageTitle + "") && j(o, d),
          1 & i && S(n, "active", t[4].active);
      },
      d(e) {
        e && h(n), (a = !1), u();
      },
    };
  }
  function re(t) {
    let n,
      l,
      s = [],
      i = new Map(),
      r = t[0];
    const o = (e) => e[4].name;
    for (let e = 0; e < r.length; e += 1) {
      let n = se(t, r, e),
        l = o(n);
      i.set(l, (s[e] = ie(l, n)));
    }
    return {
      c() {
        (n = b("div")), (l = b("ul"));
        for (let e = 0; e < s.length; e += 1) s[e].c();
        A(l, "class", "uppercase svelte-11href6"),
          A(n, "class", "tabs svelte-11href6");
      },
      m(e, t) {
        g(e, n, t), $(n, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(l, null);
      },
      p(e, [t]) {
        3 & t && ((r = e[0]), (s = Y(s, t, o, 1, e, r, i, l, V, ie, null, se)));
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
        for (let e = 0; e < s.length; e += 1) s[e].d();
      },
    };
  }
  function oe(e, t, n) {
    let { items: l = [] } = t;
    const s = E(),
      i = (e) => {
        s("tabChange", e),
          document
            .getElementById("drawer-anchor")
            .scrollIntoView({ behavior: "smooth", block: "start" });
      };
    return (
      (e.$$set = (e) => {
        "items" in e && n(0, (l = e.items));
      }),
      [l, i, (e) => i(e.name)]
    );
  }
  class ce extends te {
    constructor(e) {
      super(), ee(this, e, oe, re, i, { items: 0 });
    }
  }
  const ae = [];
  var ue = {
      name: "about",
      pageTitle: "About",
      icon: "mdi-account-cowboy-hat",
      greeting: "Hello, I am Sheme Hamitaj.",
      description:
        "Computer Engineer experienced in Robotics, Computer Vision, Embedded Systems, Desktop, Mobile & Web Apps. Currently working as a Backend Lead Developer using PHP & Laravel. Previous work history includes many industries starting from Sports Reporting to Photography & Videography, Acting, Translation etc.",
      birthYear: "1996",
      residence: "Albania",
      freelance: "Unavailable",
      address: "Tirane, ALB",
      quote: "An ambitious man either wins or learns.",
      hobbies: [
        {
          title: "Chess",
          icon: "mdi-chess-knight",
          description:
            "My father taught me this flawless game when I was 4 years old and I have been playing ever since.",
        },
        {
          title: "Table Tennis",
          icon: "mdi-table-tennis",
          description:
            "A terrific game to play, keeps one's mind sharp and ready.",
        },
        {
          title: "Football",
          icon: "mdi-soccer",
          description:
            "Who would not enjoy a match with friends on a friday evening?",
        },
      ],
    },
    de = {
      name: "resume",
      pageTitle: "Resume",
      icon: "mdi-card-account-details",
      experience: {
        title: "Experience",
        icon: "mdi-tie",
        data: [
          {
            title: "Backend lead developer",
            start: "12/2022",
            end: "present",
            company: "circuly GmbH",
            description:
              "Working with an awesome international team to enable circular business models through SaaS.",
          },
          {
            title: "Full stack developer",
            start: "01/2021",
            end: "12/2022",
            company: "circuly GmbH",
            description:
              "Working with an awesome international team to enable circular business models through SaaS.",
          },
          {
            title: "Robotics Developer",
            start: "08/2019",
            end: "08/2020",
            company: "Kocaeli University",
            description:
              "Work with a diverse team of electric and electronic engineers to create and develop AMR with natural navigation.",
          },
        ],
      },
      education: {
        title: "Education",
        icon: "mdi-school",
        data: [
          {
            major: "Computer engineering",
            start: "09/2015",
            end: "07/2020",
            institute: "Kocaeli University",
            description:
              "Bachelor's Degree from Computer Engineering Department at Kocaeli University, Turkey.",
          },
          {
            major: "Turkish preparatory school ",
            start: "09/2014",
            end: "08/2015",
            institute: "Kocaeli University",
            description:
              "Attended Turkish Language course at the Language Center located inside Kocaeli University, Turkey.",
          },
        ],
      },
      certificatesAndAwards: {
        title: "Certificates/Awards",
        icon: "mdi-medal",
        data: [
          {
            title: "IELTS academic",
            date: "14/07/2020",
            issuedBy: "British Council",
            description:
              "English Proficiency C1 Certificate with a 7.65 out of 9.0 score. Test taken in Istanbul, Turkey.",
          },
          {
            title: "OBSS Code Master",
            date: "19/12/2019",
            issuedBy: "OBSS",
            description:
              "A hackathon held at Kocaeli University by OBSS. Awarded 3rd place with a bonus of 1000TRY.",
          },
        ],
      },
      academic: {
        title: "Academic",
        icon: "mdi-library-shelves",
        data: [
          {
            title: "A Survey of ROS Security",
            date: "10/07/2019",
            issuedBy: "IWW2019",
            description:
              "Published a conference paper at 10th International Conference on Image Processing, Wavelet and Applications.",
          },
        ],
      },
      skills: [
        {
          title: "Coding",
          barType: "line",
          icon: "mdi-console",
          items: [
            { title: "C/C++", level: 80 },
            { title: "Java/Android", level: 85 },
            { title: "Javascript", level: 92 },
            { title: "PHP", level: 87 },
          ],
        },
        {
          title: "Design",
          barType: "line",
          icon: "mdi-brush-variant",
          items: [
            { title: "Web Design", level: 85 },
            { title: "Photoshop", level: 90 },
            { title: "After Effects", level: 80 },
            { title: "Premiere", level: 75 },
          ],
        },
        {
          title: "Languages",
          barType: "dots",
          icon: "mdi-earth",
          items: [
            { title: "Albanian", level: 100 },
            { title: "English", level: 94 },
            { title: "Turkish", level: 89 },
            { title: "Italian", level: 62 },
          ],
        },
        {
          title: "Knowledge",
          barType: "dots",
          icon: "mdi-book-open-page-variant",
          items: [
            { title: "Mobile Apps", level: 94 },
            { title: "Desktop Apps", level: 91 },
            { title: "Web Apps", level: 97 },
            { title: "Embedded", level: 85 },
          ],
        },
      ],
    },
    fe = {
      name: "services",
      pageTitle: "Services",
      header: "Fast and Reliable",
      icon: "mdi-monitor-shimmer",
      footer: "Fast and Reliable.",
      products: [
        {
          title: "Mobile Apps",
          icon: "mdi-cellphone-cog",
          description:
            "Developing memorable and unique mobile Android and IOS apps.",
        },
        {
          title: "Desktop Apps",
          icon: "mdi-desktop-mac",
          description:
            "Delivering high-end and secure desktop apps for Windows/Linux OS.",
        },
        {
          title: "Web Apps",
          icon: "mdi-webpack",
          description:
            "Sleek and fully-responsive websites for all kinds of screens and devices.",
        },
        {
          title: "Graphic Design",
          icon: "mdi-pencil-ruler",
          description:
            "Turning ideas into perfect graphical contents for your business.",
        },
      ],
    },
    me = {
      name: "contact",
      pageTitle: "Contact",
      header: "Drop a Line",
      icon: "mdi-send",
      mapsIframe:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95871.48845589603!2d19.747783295014003!3d41.33096097063582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana!5e0!3m2!1sen!2s!4v1601648127003!5m2!1sen!2s"></iframe>',
      address: "Tirane, Albania",
      hours: "9AM - 5PM",
      email: "shen.i@live.com",
      tel: "+355 68 468 3347",
    };
  const pe = "Sheme Hamitaj | Personal Page",
    $e = [
      {
        name: "description",
        content: "Sheme Hamitaj is a Computer Engineer based in Albania.",
      },
      {
        name: "keywords",
        content:
          "sheme,hamitaj,personal,site,developer,software,web,desktop,mobile,fast,reliable,resume,tirana,albania,github,pages,shqiperi,faqe,personale,tirane,zhvillues,programues,programe,profesional,sherbim",
      },
    ],
    ge = (function (t, n = e) {
      let l;
      const s = new Set();
      function r(e) {
        if (i(t, e) && ((t = e), l)) {
          const e = !ae.length;
          for (const e of s) e[1](), ae.push(e, t);
          if (e) {
            for (let e = 0; e < ae.length; e += 2) ae[e][0](ae[e + 1]);
            ae.length = 0;
          }
        }
      }
      return {
        set: r,
        update: function (e) {
          r(e(t));
        },
        subscribe: function (i, o = e) {
          const c = [i, o];
          return (
            s.add(c),
            1 === s.size && (l = n(r) || e),
            i(t),
            () => {
              s.delete(c), 0 === s.size && (l(), (l = null));
            }
          );
        },
      };
    })([
      ...[ue, de, fe, me].map((e) => ({ active: "about" === e.name, ...e })),
    ]);
  function he(e) {
    let t, n, l;
    return (
      (n = new ce({ props: { items: e[0] } })),
      n.$on("tabChange", e[1]),
      {
        c() {
          (t = b("div")),
            J(n.$$.fragment),
            A(t, "class", "grid-item-header mt-2 svelte-y17zse");
        },
        m(e, s) {
          g(e, t, s), Q(n, t, null), (l = !0);
        },
        p(e, [t]) {
          const l = {};
          1 & t && (l.items = e[0]), n.$set(l);
        },
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          e && h(t), X(n);
        },
      }
    );
  }
  function ve(e, t, n) {
    let l;
    a(e, ge, (e) => n(0, (l = e)));
    return [
      l,
      (e) => {
        const t = e.detail;
        ge.update((e) => {
          let n = [...e];
          return (
            n.forEach((e) => {
              e.active = e.name === t;
            }),
            n
          );
        });
      },
    ];
  }
  class be extends te {
    constructor(e) {
      super(), ee(this, e, ve, he, i, {});
    }
  }
  var ye = {
    coverImage: "https://shemehamitaj.com/assets/images/banner.png",
    profileImage: "https://shemehamitaj.com/assets/images/profile.jpg",
    fullName: "Sheme Hamitaj",
    profession: "Computer Engineer",
    cv: {
      url: "https://shemehamitaj.com/assets/RESUME_Hamitaj.pdf",
      icon: "mdi-download",
    },
    email: { address: "shen.i@live.com", icon: "mdi-email-send" },
    links: [
      {
        title: "Github",
        url: "https://github.com/jajosheni",
        icon: "mdi-github",
      },
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/shemehamitaj",
        icon: "mdi-linkedin",
      },
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/dev?id=9083946006672030470",
        icon: "mdi-google-play",
      },
    ],
  };
  function xe(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), l;
  }
  function we(e) {
    let t, n, l, s, i;
    return {
      c() {
        (t = b("a")),
          (n = b("i")),
          (s = x()),
          A(
            n,
            "class",
            (l = "mdi mdi-24px " + e[1].icon + " text-color svelte-nrf3kx")
          ),
          A(t, "class", "mr-1 svelte-nrf3kx"),
          A(t, "href", (i = e[1].url)),
          A(t, "target", "_blank");
      },
      m(e, l) {
        g(e, t, l), $(t, n), $(t, s);
      },
      p(e, s) {
        1 & s &&
          l !==
            (l = "mdi mdi-24px " + e[1].icon + " text-color svelte-nrf3kx") &&
          A(n, "class", l),
          1 & s && i !== (i = e[1].url) && A(t, "href", i);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function ke(t) {
    let n,
      l = t[0],
      s = [];
    for (let e = 0; e < l.length; e += 1) s[e] = we(xe(t, l, e));
    return {
      c() {
        n = b("ul");
        for (let e = 0; e < s.length; e += 1) s[e].c();
        A(n, "class", "social-media mt-1 svelte-nrf3kx");
      },
      m(e, t) {
        g(e, n, t);
        for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
      },
      p(e, [t]) {
        if (1 & t) {
          let i;
          for (l = e[0], i = 0; i < l.length; i += 1) {
            const r = xe(e, l, i);
            s[i] ? s[i].p(r, t) : ((s[i] = we(r)), s[i].c(), s[i].m(n, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = l.length;
        }
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), v(s, e);
      },
    };
  }
  function Ae(e, t, n) {
    let { links: l = [] } = t;
    return (
      (e.$$set = (e) => {
        "links" in e && n(0, (l = e.links));
      }),
      [l]
    );
  }
  class je extends te {
    constructor(e) {
      super(), ee(this, e, Ae, ke, i, { links: 0 });
    }
  }
  function Ce(t) {
    let n, s, i, r, o, c, a, u, d, f, m, p, v, y, w, j;
    return {
      c() {
        (n = b("div")),
          (s = b("button")),
          (i = b("span")),
          (i.textContent = "CV"),
          (r = x()),
          (o = b("i")),
          (a = x()),
          (u = b("div")),
          (d = x()),
          (f = b("button")),
          (m = b("span")),
          (m.textContent = "e-mail"),
          (p = x()),
          (v = b("i")),
          A(
            o,
            "class",
            (c =
              "mdi mdi-18px ml-1 " + t[0].icon + " text-color svelte-1fap73r")
          ),
          A(s, "class", "btn download-cv uppercase svelte-1fap73r"),
          A(u, "class", "splitter svelte-1fap73r"),
          A(
            v,
            "class",
            (y =
              "mdi mdi-18px ml-1 " + t[1].icon + " text-color svelte-1fap73r")
          ),
          A(f, "class", "btn email-me uppercase svelte-1fap73r"),
          A(n, "class", "bottom-buttons svelte-1fap73r");
      },
      m(e, l) {
        g(e, n, l),
          $(n, s),
          $(s, i),
          $(s, r),
          $(s, o),
          $(n, a),
          $(n, u),
          $(n, d),
          $(n, f),
          $(f, m),
          $(f, p),
          $(f, v),
          w || ((j = [k(s, "click", t[2]), k(f, "click", t[3])]), (w = !0));
      },
      p(e, [t]) {
        1 & t &&
          c !==
            (c =
              "mdi mdi-18px ml-1 " +
              e[0].icon +
              " text-color svelte-1fap73r") &&
          A(o, "class", c),
          2 & t &&
            y !==
              (y =
                "mdi mdi-18px ml-1 " +
                e[1].icon +
                " text-color svelte-1fap73r") &&
            A(v, "class", y);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), (w = !1), l(j);
      },
    };
  }
  function Se(e, t, n) {
    let { cv: l = "" } = t,
      { email: s = "" } = t;
    return (
      (e.$$set = (e) => {
        "cv" in e && n(0, (l = e.cv)), "email" in e && n(1, (s = e.email));
      }),
      [
        l,
        s,
        () => window.location.assign(l.url),
        () => (window.location.href = `mailto:${s.address}?subject=Hello`),
      ]
    );
  }
  class Te extends te {
    constructor(e) {
      super(), ee(this, e, Se, Ce, i, { cv: 0, email: 1 });
    }
  }
  function Ee(t) {
    let n, l, s, i, r, o, a, u, d, f, m, p, v, y, w, k, j, C, S, T;
    return (
      (j = new je({ props: { links: ye.links } })),
      (S = new Te({ props: { cv: ye.cv, email: ye.email } })),
      {
        c() {
          (n = b("div")),
            (l = b("div")),
            (s = b("div")),
            (i = b("img")),
            (o = x()),
            (a = b("div")),
            (u = b("img")),
            (f = x()),
            (m = b("div")),
            (p = b("h1")),
            (p.textContent = `${ye.fullName}`),
            (v = x()),
            (y = b("div")),
            (w = b("span")),
            (w.textContent = `${ye.profession}`),
            (k = x()),
            J(j.$$.fragment),
            (C = x()),
            J(S.$$.fragment),
            A(i, "class", "banner svelte-1av93ij"),
            c(i.src, (r = ye.coverImage)) || A(i, "src", r),
            A(i, "alt", "banner"),
            A(s, "class", "banner-container svelte-1av93ij"),
            c(u.src, (d = ye.profileImage)) || A(u, "src", d),
            A(u, "alt", "profile pic"),
            A(u, "class", "profile-pic svelte-1av93ij"),
            A(a, "class", "profile-pic-container svelte-1av93ij"),
            A(p, "id", "full-name"),
            A(p, "class", "svelte-1av93ij"),
            A(m, "class", "full-name"),
            A(w, "class", "block primary-color"),
            A(w, "id", "profession"),
            A(y, "class", "subtitle svelte-1av93ij"),
            A(l, "class", "profile-content"),
            A(n, "class", "grid-item-profile svelte-1av93ij");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, s),
            $(s, i),
            $(l, o),
            $(l, a),
            $(a, u),
            $(l, f),
            $(l, m),
            $(m, p),
            $(l, v),
            $(l, y),
            $(y, w),
            $(l, k),
            Q(j, l, null),
            $(l, C),
            Q(S, l, null),
            (T = !0);
        },
        p: e,
        i(e) {
          T || (F(j.$$.fragment, e), F(S.$$.fragment, e), (T = !0));
        },
        o(e) {
          K(j.$$.fragment, e), K(S.$$.fragment, e), (T = !1);
        },
        d(e) {
          e && h(n), X(j), X(S);
        },
      }
    );
  }
  class Be extends te {
    constructor(e) {
      super(), ee(this, e, null, Ee, i, {});
    }
  }
  function _e(e) {
    let t,
      n = e[0].value + "";
    return {
      c() {
        t = y(n);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, l) {
        1 & l && n !== (n = e[0].value + "") && j(t, n);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Me(e) {
    let t,
      n,
      l,
      s = e[0].value + "";
    return {
      c() {
        (t = b("a")), (n = y(s)), A(t, "href", (l = "tel:" + e[0].value));
      },
      m(e, l) {
        g(e, t, l), $(t, n);
      },
      p(e, i) {
        1 & i && s !== (s = e[0].value + "") && j(n, s),
          1 & i && l !== (l = "tel:" + e[0].value) && A(t, "href", l);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Pe(e) {
    let t,
      n,
      l,
      s = e[0].value + "";
    return {
      c() {
        (t = b("a")),
          (n = y(s)),
          A(t, "class", "lowercase"),
          A(t, "href", (l = "mailto:" + e[0].value));
      },
      m(e, l) {
        g(e, t, l), $(t, n);
      },
      p(e, i) {
        1 & i && s !== (s = e[0].value + "") && j(n, s),
          1 & i && l !== (l = "mailto:" + e[0].value) && A(t, "href", l);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function ze(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c = t[0].name + "";
    function a(e, t) {
      return "email" === e[0].name ? Pe : "tel" === e[0].name ? Me : _e;
    }
    let u = a(t),
      d = u(t);
    return {
      c() {
        (n = b("div")),
          (l = b("span")),
          (s = y(c)),
          (i = y(":")),
          (r = x()),
          (o = b("span")),
          d.c(),
          A(l, "class", "mr-2"),
          A(o, "class", "right"),
          A(n, "class", "field svelte-j9849");
      },
      m(e, t) {
        g(e, n, t), $(n, l), $(l, s), $(l, i), $(n, r), $(n, o), d.m(o, null);
      },
      p(e, [t]) {
        1 & t && c !== (c = e[0].name + "") && j(s, c),
          u === (u = a(e)) && d
            ? d.p(e, t)
            : (d.d(1), (d = u(e)), d && (d.c(), d.m(o, null)));
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), d.d();
      },
    };
  }
  function Ie(e, t, n) {
    let { field: l = { name: "", value: "" } } = t;
    return (
      (e.$$set = (e) => {
        "field" in e && n(0, (l = e.field));
      }),
      [l]
    );
  }
  class He extends te {
    constructor(e) {
      super(), ee(this, e, Ie, ze, i, { field: 0 });
    }
  }
  function Le(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), (l[3] = n), l;
  }
  function De(e) {
    let t,
      n,
      l =
        e[3] % 2 == 0 &&
        (function (e) {
          let t, n, l, s, i, r;
          return (
            (n = new He({ props: { field: e[1] } })),
            (s = new He({ props: { field: e[0][e[3] + 1] } })),
            {
              c() {
                (t = b("div")),
                  J(n.$$.fragment),
                  (l = x()),
                  J(s.$$.fragment),
                  (i = x()),
                  A(t, "class", "field-group mr-1 svelte-1azyi27");
              },
              m(e, o) {
                g(e, t, o),
                  Q(n, t, null),
                  $(t, l),
                  Q(s, t, null),
                  $(t, i),
                  (r = !0);
              },
              p(e, t) {
                const l = {};
                1 & t && (l.field = e[1]), n.$set(l);
                const i = {};
                1 & t && (i.field = e[0][e[3] + 1]), s.$set(i);
              },
              i(e) {
                r || (F(n.$$.fragment, e), F(s.$$.fragment, e), (r = !0));
              },
              o(e) {
                K(n.$$.fragment, e), K(s.$$.fragment, e), (r = !1);
              },
              d(e) {
                e && h(t), X(n), X(s);
              },
            }
          );
        })(e);
    return {
      c() {
        l && l.c(), (t = w());
      },
      m(e, s) {
        l && l.m(e, s), g(e, t, s), (n = !0);
      },
      p(e, t) {
        e[3] % 2 == 0 && l.p(e, t);
      },
      i(e) {
        n || (F(l), (n = !0));
      },
      o(e) {
        K(l), (n = !1);
      },
      d(e) {
        l && l.d(e), e && h(t);
      },
    };
  }
  function qe(e) {
    let t,
      n,
      l = e[0],
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = De(Le(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
        A(t, "class", "fields uppercase svelte-1azyi27");
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, [n]) {
        if (1 & n) {
          let r;
          for (l = e[0], r = 0; r < l.length; r += 1) {
            const i = Le(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = De(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function Ne(e, t, n) {
    let { fields: l = [] } = t;
    return (
      (e.$$set = (e) => {
        "fields" in e && n(0, (l = e.fields));
      }),
      [l]
    );
  }
  class We extends te {
    constructor(e) {
      super(), ee(this, e, Ne, qe, i, { fields: 0 });
    }
  }
  function Re(t) {
    let n, l, s, i, r, o, c;
    return {
      c() {
        (n = b("div")),
          (l = b("span")),
          (l.textContent = '"'),
          (s = x()),
          (i = b("blockquote")),
          (r = y(t[0])),
          (o = x()),
          (c = b("span")),
          (c.textContent = '"'),
          A(l, "class", "left mt-1 primary-color svelte-sc5p3t"),
          C(l, "margin-left", "-10px"),
          A(c, "class", "right mt-3 mr-1 primary-color svelte-sc5p3t"),
          A(n, "class", "quote svelte-sc5p3t");
      },
      m(e, t) {
        g(e, n, t), $(n, l), $(n, s), $(n, i), $(i, r), $(n, o), $(n, c);
      },
      p(e, [t]) {
        1 & t && j(r, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function Oe(e, t, n) {
    let { quote: l = "" } = t;
    return (
      (e.$$set = (e) => {
        "quote" in e && n(0, (l = e.quote));
      }),
      [l]
    );
  }
  class Ue extends te {
    constructor(e) {
      super(), ee(this, e, Oe, Re, i, { quote: 0 });
    }
  }
  function Fe(e) {
    let t, n;
    const l = e[1].default,
      s = u(l, e, e[0], null);
    return {
      c() {
        (t = b("div")), s && s.c(), A(t, "class", "card svelte-uvh3go");
      },
      m(e, l) {
        g(e, t, l), s && s.m(t, null), (n = !0);
      },
      p(e, [t]) {
        s &&
          s.p &&
          (!n || 1 & t) &&
          m(s, l, e, e[0], n ? f(l, e[0], t, null) : p(e[0]), null);
      },
      i(e) {
        n || (F(s, e), (n = !0));
      },
      o(e) {
        K(s, e), (n = !1);
      },
      d(e) {
        e && h(t), s && s.d(e);
      },
    };
  }
  function Ke(e, t, n) {
    let { $$slots: l = {}, $$scope: s } = t;
    return (
      (e.$$set = (e) => {
        "$$scope" in e && n(0, (s = e.$$scope));
      }),
      [s, l]
    );
  }
  class Ve extends te {
    constructor(e) {
      super(), ee(this, e, Ke, Fe, i, {});
    }
  }
  function Ge(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o,
      c = e[0].title + "",
      a = e[0].description + "";
    return {
      c() {
        (t = b("div")),
          (n = b("i")),
          (s = x()),
          (i = y(c)),
          (r = y(" - ")),
          (o = y(a)),
          A(
            n,
            "class",
            (l =
              "mdi mdi-48px " +
              e[0].icon +
              " primary-color mr-1 svelte-1mkegbz")
          ),
          A(t, "class", "hobby-container svelte-1mkegbz");
      },
      m(e, l) {
        g(e, t, l), $(t, n), $(t, s), $(t, i), $(t, r), $(t, o);
      },
      p(e, t) {
        1 & t &&
          l !==
            (l =
              "mdi mdi-48px " +
              e[0].icon +
              " primary-color mr-1 svelte-1mkegbz") &&
          A(n, "class", l),
          1 & t && c !== (c = e[0].title + "") && j(i, c),
          1 & t && a !== (a = e[0].description + "") && j(o, a);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Ye(e) {
    let t, n;
    return (
      (t = new Ve({
        props: { $$slots: { default: [Ge] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, [n]) {
          const l = {};
          3 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Je(e, t, n) {
    let { hobby: l = { title: "", icon: "", description: "" } } = t;
    return (
      (e.$$set = (e) => {
        "hobby" in e && n(0, (l = e.hobby));
      }),
      [l]
    );
  }
  class Qe extends te {
    constructor(e) {
      super(), ee(this, e, Je, Ye, i, { hobby: 0 });
    }
  }
  function Xe(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), l;
  }
  function Ze(t) {
    let n, l, s, i;
    return (
      (l = new Qe({ props: { hobby: t[1] } })),
      {
        c() {
          (n = b("div")), J(l.$$.fragment), (s = x()), A(n, "class", "mb-1");
        },
        m(e, t) {
          g(e, n, t), Q(l, n, null), $(n, s), (i = !0);
        },
        p: e,
        i(e) {
          i || (F(l.$$.fragment, e), (i = !0));
        },
        o(e) {
          K(l.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && h(n), X(l);
        },
      }
    );
  }
  function et(e) {
    let t, n, l, s, i, r, o, c, a, u, d;
    (o = new We({ props: { fields: e[0] } })),
      (a = new Ue({ props: { quote: ue.quote } }));
    let f =
      !!ue.hobbies &&
      (function (e) {
        let t,
          n,
          l,
          s,
          i = ue.hobbies,
          r = [];
        for (let t = 0; t < i.length; t += 1) r[t] = Ze(Xe(e, i, t));
        const o = (e) =>
          K(r[e], 1, 1, () => {
            r[e] = null;
          });
        return {
          c() {
            (t = b("span")),
              (t.textContent = "Hobbies"),
              (n = x()),
              (l = b("div"));
            for (let e = 0; e < r.length; e += 1) r[e].c();
            A(t, "class", "block mt-3 bold mb-3");
          },
          m(e, i) {
            g(e, t, i), g(e, n, i), g(e, l, i);
            for (let e = 0; e < r.length; e += 1) r[e].m(l, null);
            s = !0;
          },
          p(e, t) {
            if (0 & t) {
              let n;
              for (i = ue.hobbies, n = 0; n < i.length; n += 1) {
                const s = Xe(e, i, n);
                r[n]
                  ? (r[n].p(s, t), F(r[n], 1))
                  : ((r[n] = Ze(s)), r[n].c(), F(r[n], 1), r[n].m(l, null));
              }
              for (O(), n = i.length; n < r.length; n += 1) o(n);
              U();
            }
          },
          i(e) {
            if (!s) {
              for (let e = 0; e < i.length; e += 1) F(r[e]);
              s = !0;
            }
          },
          o(e) {
            r = r.filter(Boolean);
            for (let e = 0; e < r.length; e += 1) K(r[e]);
            s = !1;
          },
          d(e) {
            e && h(t), e && h(n), e && h(l), v(r, e);
          },
        };
      })(e);
    return {
      c() {
        (t = b("div")),
          (n = b("span")),
          (n.textContent = `${ue.greeting}`),
          (l = x()),
          (s = b("p")),
          (s.textContent = `${ue.description}`),
          (i = x()),
          (r = b("div")),
          J(o.$$.fragment),
          (c = x()),
          J(a.$$.fragment),
          (u = x()),
          f && f.c(),
          A(n, "class", "block bold"),
          A(s, "class", "description mb-3 svelte-pm7kco"),
          A(r, "class", "mb-3"),
          A(t, "class", "about-container");
      },
      m(e, m) {
        g(e, t, m),
          $(t, n),
          $(t, l),
          $(t, s),
          $(t, i),
          $(t, r),
          Q(o, r, null),
          $(t, c),
          Q(a, t, null),
          $(t, u),
          f && f.m(t, null),
          (d = !0);
      },
      p(e, [t]) {
        ue.hobbies && f.p(e, t);
      },
      i(e) {
        d || (F(o.$$.fragment, e), F(a.$$.fragment, e), F(f), (d = !0));
      },
      o(e) {
        K(o.$$.fragment, e), K(a.$$.fragment, e), K(f), (d = !1);
      },
      d(e) {
        e && h(t), X(o), X(a), f && f.d();
      },
    };
  }
  function tt(e) {
    return [
      [
        { name: "age", value: new Date().getFullYear() - ue.birthYear || 2e3 },
        { name: "residence", value: ue.residence },
        { name: "freelance", value: ue.freelance },
        { name: "address", value: ue.address },
      ],
    ];
  }
  class nt extends te {
    constructor(e) {
      super(), ee(this, e, tt, et, i, {});
    }
  }
  function lt(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      d = e[0].title + "";
    const v = e[2].default,
      w = u(v, e, e[1], null);
    return {
      c() {
        (t = b("div")),
          (n = b("div")),
          (l = b("i")),
          (i = x()),
          (r = b("span")),
          (o = y(d)),
          (c = x()),
          w && w.c(),
          A(
            l,
            "class",
            (s =
              "mdi mdi-48px " + e[0].icon + " mr-1 primary-color svelte-prgd0z")
          ),
          A(r, "class", "uppercase"),
          A(n, "class", "section-title svelte-prgd0z");
      },
      m(e, s) {
        g(e, t, s),
          $(t, n),
          $(n, l),
          $(n, i),
          $(n, r),
          $(r, o),
          $(t, c),
          w && w.m(t, null),
          (a = !0);
      },
      p(e, [t]) {
        (!a ||
          (1 & t &&
            s !==
              (s =
                "mdi mdi-48px " +
                e[0].icon +
                " mr-1 primary-color svelte-prgd0z"))) &&
          A(l, "class", s),
          (!a || 1 & t) && d !== (d = e[0].title + "") && j(o, d),
          w &&
            w.p &&
            (!a || 2 & t) &&
            m(w, v, e, e[1], a ? f(v, e[1], t, null) : p(e[1]), null);
      },
      i(e) {
        a || (F(w, e), (a = !0));
      },
      o(e) {
        K(w, e), (a = !1);
      },
      d(e) {
        e && h(t), w && w.d(e);
      },
    };
  }
  function st(e, t, n) {
    let { $$slots: l = {}, $$scope: s } = t,
      { item: i = { title: "", icon: "" } } = t;
    return (
      (e.$$set = (e) => {
        "item" in e && n(0, (i = e.item)),
          "$$scope" in e && n(1, (s = e.$$scope));
      }),
      [i, s, l]
    );
  }
  class it extends te {
    constructor(e) {
      super(), ee(this, e, st, lt, i, { item: 0 });
    }
  }
  function rt(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d,
      f,
      m,
      p,
      v,
      w,
      k = t[0].start + "",
      C = t[0].end + "",
      S = t[0].title + "",
      T = t[0].company + "",
      E = t[0].description + "";
    return {
      c() {
        (n = b("div")),
          (l = b("div")),
          (s = b("span")),
          (i = y(k)),
          (r = y(" - ")),
          (o = y(C)),
          (c = x()),
          (a = b("span")),
          (u = y(S)),
          (d = x()),
          (f = b("span")),
          (m = y(T)),
          (p = x()),
          (v = b("div")),
          (w = y(E)),
          A(s, "class", "duration svelte-1p85ix5"),
          A(a, "class", "block uppercase"),
          A(f, "class", "block company svelte-1p85ix5"),
          A(v, "class", "description svelte-1p85ix5"),
          A(n, "class", "experience mt-2 mb-2 svelte-1p85ix5");
      },
      m(e, t) {
        g(e, n, t),
          $(n, l),
          $(l, s),
          $(s, i),
          $(s, r),
          $(s, o),
          $(n, c),
          $(n, a),
          $(a, u),
          $(n, d),
          $(n, f),
          $(f, m),
          $(n, p),
          $(n, v),
          $(v, w);
      },
      p(e, [t]) {
        1 & t && k !== (k = e[0].start + "") && j(i, k),
          1 & t && C !== (C = e[0].end + "") && j(o, C),
          1 & t && S !== (S = e[0].title + "") && j(u, S),
          1 & t && T !== (T = e[0].company + "") && j(m, T),
          1 & t && E !== (E = e[0].description + "") && j(w, E);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function ot(e, t, n) {
    let {
      experience: l = {
        title: "",
        start: "",
        end: "",
        company: "",
        description: "",
      },
    } = t;
    return (
      (e.$$set = (e) => {
        "experience" in e && n(0, (l = e.experience));
      }),
      [l]
    );
  }
  class ct extends te {
    constructor(e) {
      super(), ee(this, e, ot, rt, i, { experience: 0 });
    }
  }
  function at(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d,
      f,
      m,
      p,
      v,
      w,
      k = t[0].start + "",
      C = t[0].end + "",
      S = t[0].major + "",
      T = t[0].institute + "",
      E = t[0].description + "";
    return {
      c() {
        (n = b("div")),
          (l = b("div")),
          (s = b("span")),
          (i = y(k)),
          (r = y(" - ")),
          (o = y(C)),
          (c = x()),
          (a = b("span")),
          (u = y(S)),
          (d = x()),
          (f = b("span")),
          (m = y(T)),
          (p = x()),
          (v = b("div")),
          (w = y(E)),
          A(s, "class", "duration svelte-1ljglih"),
          A(a, "class", "block uppercase"),
          A(f, "class", "block institute svelte-1ljglih"),
          A(v, "class", "description svelte-1ljglih"),
          A(n, "class", "education mt-2 mb-2 svelte-1ljglih");
      },
      m(e, t) {
        g(e, n, t),
          $(n, l),
          $(l, s),
          $(s, i),
          $(s, r),
          $(s, o),
          $(n, c),
          $(n, a),
          $(a, u),
          $(n, d),
          $(n, f),
          $(f, m),
          $(n, p),
          $(n, v),
          $(v, w);
      },
      p(e, [t]) {
        1 & t && k !== (k = e[0].start + "") && j(i, k),
          1 & t && C !== (C = e[0].end + "") && j(o, C),
          1 & t && S !== (S = e[0].major + "") && j(u, S),
          1 & t && T !== (T = e[0].institute + "") && j(m, T),
          1 & t && E !== (E = e[0].description + "") && j(w, E);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function ut(e, t, n) {
    let {
      education: l = {
        major: "",
        start: "",
        end: "",
        institute: "",
        description: "",
      },
    } = t;
    return (
      (e.$$set = (e) => {
        "education" in e && n(0, (l = e.education));
      }),
      [l]
    );
  }
  class dt extends te {
    constructor(e) {
      super(), ee(this, e, ut, at, i, { education: 0 });
    }
  }
  function ft(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d,
      f,
      m,
      p,
      v = t[0].date + "",
      w = t[0].title + "",
      k = t[0].issuedBy + "",
      C = t[0].description + "";
    return {
      c() {
        (n = b("div")),
          (l = b("div")),
          (s = b("span")),
          (i = y(v)),
          (r = x()),
          (o = b("span")),
          (c = y(w)),
          (a = x()),
          (u = b("span")),
          (d = y(k)),
          (f = x()),
          (m = b("div")),
          (p = y(C)),
          A(s, "class", "duration svelte-u0g1dt"),
          A(o, "class", "block uppercase"),
          A(u, "class", "block issued-by svelte-u0g1dt"),
          A(m, "class", "description svelte-u0g1dt"),
          A(n, "class", "award mt-2 mb-2 svelte-u0g1dt");
      },
      m(e, t) {
        g(e, n, t),
          $(n, l),
          $(l, s),
          $(s, i),
          $(n, r),
          $(n, o),
          $(o, c),
          $(n, a),
          $(n, u),
          $(u, d),
          $(n, f),
          $(n, m),
          $(m, p);
      },
      p(e, [t]) {
        1 & t && v !== (v = e[0].date + "") && j(i, v),
          1 & t && w !== (w = e[0].title + "") && j(c, w),
          1 & t && k !== (k = e[0].issuedBy + "") && j(d, k),
          1 & t && C !== (C = e[0].description + "") && j(p, C);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function mt(e, t, n) {
    let { award: l = { title: "", date: "", issuedBy: "", description: "" } } =
      t;
    return (
      (e.$$set = (e) => {
        "award" in e && n(0, (l = e.award));
      }),
      [l]
    );
  }
  class pt extends te {
    constructor(e) {
      super(), ee(this, e, mt, ft, i, { award: 0 });
    }
  }
  function $t(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d,
      f,
      m,
      p,
      v = t[0].date + "",
      w = t[0].title + "",
      k = t[0].issuedBy + "",
      C = t[0].description + "";
    return {
      c() {
        (n = b("div")),
          (l = b("div")),
          (s = b("span")),
          (i = y(v)),
          (r = x()),
          (o = b("span")),
          (c = y(w)),
          (a = x()),
          (u = b("span")),
          (d = y(k)),
          (f = x()),
          (m = b("div")),
          (p = y(C)),
          A(s, "class", "duration svelte-zsmcjf"),
          A(o, "class", "block uppercase"),
          A(u, "class", "block issued-by svelte-zsmcjf"),
          A(m, "class", "description svelte-zsmcjf"),
          A(n, "class", "academic mt-2 mb-2 svelte-zsmcjf");
      },
      m(e, t) {
        g(e, n, t),
          $(n, l),
          $(l, s),
          $(s, i),
          $(n, r),
          $(n, o),
          $(o, c),
          $(n, a),
          $(n, u),
          $(u, d),
          $(n, f),
          $(n, m),
          $(m, p);
      },
      p(e, [t]) {
        1 & t && v !== (v = e[0].date + "") && j(i, v),
          1 & t && w !== (w = e[0].title + "") && j(c, w),
          1 & t && k !== (k = e[0].issuedBy + "") && j(d, k),
          1 & t && C !== (C = e[0].description + "") && j(p, C);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function gt(e, t, n) {
    let {
      academic: l = { title: "", date: "", issuedBy: "", description: "" },
    } = t;
    return (
      (e.$$set = (e) => {
        "academic" in e && n(0, (l = e.academic));
      }),
      [l]
    );
  }
  class ht extends te {
    constructor(e) {
      super(), ee(this, e, gt, $t, i, { academic: 0 });
    }
  }
  function vt(e, t, n) {
    const l = e.slice();
    return (l[3] = t[n]), (l[5] = n), l;
  }
  function bt(e) {
    let t,
      n,
      l = Array(20),
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = xt(vt(e, l, t));
    return {
      c() {
        (t = b("div")), (n = b("div"));
        for (let e = 0; e < s.length; e += 1) s[e].c();
        A(n, "class", "dots svelte-ugy53v"), A(t, "class", "mt-1");
      },
      m(e, l) {
        g(e, t, l), $(t, n);
        for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
      },
      p(e, t) {
        if (2 & t) {
          let i;
          for (l = Array(20), i = 0; i < l.length; i += 1) {
            const r = vt(e, l, i);
            s[i] ? s[i].p(r, t) : ((s[i] = xt(r)), s[i].c(), s[i].m(n, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = l.length;
        }
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function yt(e) {
    let t, n;
    return {
      c() {
        (t = b("div")),
          (n = b("div")),
          A(n, "class", "percentage svelte-ugy53v"),
          C(n, "width", e[2] + "%"),
          A(t, "class", "progress mt-1 svelte-ugy53v");
      },
      m(e, l) {
        g(e, t, l), $(t, n);
      },
      p(e, t) {
        4 & t && C(n, "width", e[2] + "%");
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function xt(e) {
    let t;
    return {
      c() {
        (t = b("div")),
          A(t, "class", "dot svelte-ugy53v"),
          S(t, "active", e[1] > 5 * e[5]);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, n) {
        2 & n && S(t, "active", e[1] > 5 * e[5]);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function wt(t) {
    let n;
    function l(e, t) {
      return "line" === e[0] ? yt : "dots" === e[0] ? bt : void 0;
    }
    let s = l(t),
      i = s && s(t);
    return {
      c() {
        i && i.c(), (n = w());
      },
      m(e, t) {
        i && i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = l(e)) && i
          ? i.p(e, t)
          : (i && i.d(1), (i = s && s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i && i.d(e), e && h(n);
      },
    };
  }
  function kt(e, t, n) {
    let l,
      { type: s = "line" } = t,
      { level: i = 0 } = t;
    return (
      (e.$$set = (e) => {
        "type" in e && n(0, (s = e.type)), "level" in e && n(1, (i = e.level));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty && n(2, (l = i < 0 || i > 100 ? 50 : i));
      }),
      [s, i, l]
    );
  }
  class At extends te {
    constructor(e) {
      super(), ee(this, e, kt, wt, i, { type: 0, level: 1 });
    }
  }
  function jt(e, t, n) {
    const l = e.slice();
    return (l[0] = t[n]), l;
  }
  function Ct(e, t, n) {
    const l = e.slice();
    return (l[3] = t[n]), l;
  }
  function St(e, t, n) {
    const l = e.slice();
    return (l[6] = t[n]), l;
  }
  function Tt(e, t, n) {
    const l = e.slice();
    return (l[9] = t[n]), l;
  }
  function Et(e, t, n) {
    const l = e.slice();
    return (l[12] = t[n]), l;
  }
  function Bt(e, t, n) {
    const l = e.slice();
    return (l[15] = t[n]), l;
  }
  function _t(t) {
    let n, l;
    return (
      (n = new ct({ props: { experience: t[15] } })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(e, t) {
          Q(n, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          X(n, e);
        },
      }
    );
  }
  function Mt(e) {
    let t,
      n,
      l = de.experience.data,
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = _t(Bt(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, n) {
        if (0 & n) {
          let r;
          for (l = de.experience.data, r = 0; r < l.length; r += 1) {
            const i = Bt(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = _t(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function Pt(e) {
    let t, n;
    return (
      (t = new it({
        props: {
          item: de.experience,
          $$slots: { default: [Mt] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, n) {
          const l = {};
          262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function zt(t) {
    let n, l;
    return (
      (n = new dt({ props: { education: t[12] } })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(e, t) {
          Q(n, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          X(n, e);
        },
      }
    );
  }
  function It(e) {
    let t,
      n,
      l = de.education.data,
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = zt(Et(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, n) {
        if (0 & n) {
          let r;
          for (l = de.education.data, r = 0; r < l.length; r += 1) {
            const i = Et(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = zt(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function Ht(e) {
    let t, n;
    return (
      (t = new it({
        props: {
          item: de.education,
          $$slots: { default: [It] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, n) {
          const l = {};
          262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Lt(t) {
    let n, l;
    return (
      (n = new pt({ props: { award: t[9] } })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(e, t) {
          Q(n, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          X(n, e);
        },
      }
    );
  }
  function Dt(e) {
    let t,
      n,
      l = de.certificatesAndAwards.data,
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = Lt(Tt(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, n) {
        if (0 & n) {
          let r;
          for (l = de.certificatesAndAwards.data, r = 0; r < l.length; r += 1) {
            const i = Tt(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = Lt(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function qt(e) {
    let t, n;
    return (
      (t = new it({
        props: {
          item: de.certificatesAndAwards,
          $$slots: { default: [Dt] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, n) {
          const l = {};
          262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Nt(t) {
    let n, l;
    return (
      (n = new ht({ props: { academic: t[6] } })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(e, t) {
          Q(n, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          X(n, e);
        },
      }
    );
  }
  function Wt(e) {
    let t,
      n,
      l = de.academic.data,
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = Nt(St(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, n) {
        if (0 & n) {
          let r;
          for (l = de.academic.data, r = 0; r < l.length; r += 1) {
            const i = St(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = Nt(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function Rt(e) {
    let t, n;
    return (
      (t = new it({
        props: {
          item: de.academic,
          $$slots: { default: [Wt] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, n) {
          const l = {};
          262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Ot(t) {
    let n,
      l,
      s,
      i,
      r,
      o,
      c,
      a = t[3].title + "";
    return (
      (r = new At({ props: { type: t[0].barType, level: t[3].level } })),
      {
        c() {
          (n = b("div")),
            (l = b("span")),
            (s = y(a)),
            (i = x()),
            J(r.$$.fragment),
            (o = x()),
            A(n, "class", "mt-2");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, s),
            $(n, i),
            Q(r, n, null),
            $(n, o),
            (c = !0);
        },
        p: e,
        i(e) {
          c || (F(r.$$.fragment, e), (c = !0));
        },
        o(e) {
          K(r.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && h(n), X(r);
        },
      }
    );
  }
  function Ut(e) {
    let t,
      n,
      l = e[0].items,
      s = [];
    for (let t = 0; t < l.length; t += 1) s[t] = Ot(Ct(e, l, t));
    const i = (e) =>
      K(s[e], 1, 1, () => {
        s[e] = null;
      });
    return {
      c() {
        t = b("div");
        for (let e = 0; e < s.length; e += 1) s[e].c();
      },
      m(e, l) {
        g(e, t, l);
        for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
        n = !0;
      },
      p(e, n) {
        if (0 & n) {
          let r;
          for (l = e[0].items, r = 0; r < l.length; r += 1) {
            const i = Ct(e, l, r);
            s[r]
              ? (s[r].p(i, n), F(s[r], 1))
              : ((s[r] = Ot(i)), s[r].c(), F(s[r], 1), s[r].m(t, null));
          }
          for (O(), r = l.length; r < s.length; r += 1) i(r);
          U();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < l.length; e += 1) F(s[e]);
          n = !0;
        }
      },
      o(e) {
        s = s.filter(Boolean);
        for (let e = 0; e < s.length; e += 1) K(s[e]);
        n = !1;
      },
      d(e) {
        e && h(t), v(s, e);
      },
    };
  }
  function Ft(e) {
    let t, n;
    return (
      (t = new it({
        props: { item: e[0], $$slots: { default: [Ut] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, n) {
          const l = {};
          262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Kt(e) {
    let t, n, l, s;
    return (
      (n = new Ve({
        props: { $$slots: { default: [Ft] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          (t = b("section")),
            J(n.$$.fragment),
            (l = x()),
            A(t, "class", "svelte-m6h895");
        },
        m(e, i) {
          g(e, t, i), Q(n, t, null), $(t, l), (s = !0);
        },
        p(e, t) {
          const l = {};
          262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
        },
        i(e) {
          s || (F(n.$$.fragment, e), (s = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && h(t), X(n);
        },
      }
    );
  }
  function Vt(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o =
        !!de.experience &&
        (function (e) {
          let t, n, l;
          return (
            (n = new Ve({
              props: { $$slots: { default: [Pt] }, $$scope: { ctx: e } },
            })),
            {
              c() {
                (t = b("section")),
                  J(n.$$.fragment),
                  A(t, "class", "svelte-m6h895");
              },
              m(e, s) {
                g(e, t, s), Q(n, t, null), (l = !0);
              },
              p(e, t) {
                const l = {};
                262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
              },
              i(e) {
                l || (F(n.$$.fragment, e), (l = !0));
              },
              o(e) {
                K(n.$$.fragment, e), (l = !1);
              },
              d(e) {
                e && h(t), X(n);
              },
            }
          );
        })(e),
      c =
        !!de.education &&
        (function (e) {
          let t, n, l;
          return (
            (n = new Ve({
              props: { $$slots: { default: [Ht] }, $$scope: { ctx: e } },
            })),
            {
              c() {
                (t = b("section")),
                  J(n.$$.fragment),
                  A(t, "class", "svelte-m6h895");
              },
              m(e, s) {
                g(e, t, s), Q(n, t, null), (l = !0);
              },
              p(e, t) {
                const l = {};
                262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
              },
              i(e) {
                l || (F(n.$$.fragment, e), (l = !0));
              },
              o(e) {
                K(n.$$.fragment, e), (l = !1);
              },
              d(e) {
                e && h(t), X(n);
              },
            }
          );
        })(e),
      a =
        !!de.certificatesAndAwards &&
        (function (e) {
          let t, n, l;
          return (
            (n = new Ve({
              props: { $$slots: { default: [qt] }, $$scope: { ctx: e } },
            })),
            {
              c() {
                (t = b("section")),
                  J(n.$$.fragment),
                  A(t, "class", "svelte-m6h895");
              },
              m(e, s) {
                g(e, t, s), Q(n, t, null), (l = !0);
              },
              p(e, t) {
                const l = {};
                262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
              },
              i(e) {
                l || (F(n.$$.fragment, e), (l = !0));
              },
              o(e) {
                K(n.$$.fragment, e), (l = !1);
              },
              d(e) {
                e && h(t), X(n);
              },
            }
          );
        })(e),
      u =
        !!de.academic &&
        (function (e) {
          let t, n, l;
          return (
            (n = new Ve({
              props: { $$slots: { default: [Rt] }, $$scope: { ctx: e } },
            })),
            {
              c() {
                (t = b("section")),
                  J(n.$$.fragment),
                  A(t, "class", "svelte-m6h895");
              },
              m(e, s) {
                g(e, t, s), Q(n, t, null), (l = !0);
              },
              p(e, t) {
                const l = {};
                262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
              },
              i(e) {
                l || (F(n.$$.fragment, e), (l = !0));
              },
              o(e) {
                K(n.$$.fragment, e), (l = !1);
              },
              d(e) {
                e && h(t), X(n);
              },
            }
          );
        })(e),
      d =
        !!de.skills &&
        (function (e) {
          let t,
            n,
            l,
            s,
            i = de.skills,
            r = [];
          for (let t = 0; t < i.length; t += 1) r[t] = Kt(jt(e, i, t));
          const o = (e) =>
            K(r[e], 1, 1, () => {
              r[e] = null;
            });
          return {
            c() {
              (t = b("span")), (t.textContent = "Skills"), (n = x());
              for (let e = 0; e < r.length; e += 1) r[e].c();
              (l = w()),
                A(t, "class", "block bold mt-2 mb-2 "),
                C(t, "width", "100%");
            },
            m(e, i) {
              g(e, t, i), g(e, n, i);
              for (let t = 0; t < r.length; t += 1) r[t].m(e, i);
              g(e, l, i), (s = !0);
            },
            p(e, t) {
              if (0 & t) {
                let n;
                for (i = de.skills, n = 0; n < i.length; n += 1) {
                  const s = jt(e, i, n);
                  r[n]
                    ? (r[n].p(s, t), F(r[n], 1))
                    : ((r[n] = Kt(s)),
                      r[n].c(),
                      F(r[n], 1),
                      r[n].m(l.parentNode, l));
                }
                for (O(), n = i.length; n < r.length; n += 1) o(n);
                U();
              }
            },
            i(e) {
              if (!s) {
                for (let e = 0; e < i.length; e += 1) F(r[e]);
                s = !0;
              }
            },
            o(e) {
              r = r.filter(Boolean);
              for (let e = 0; e < r.length; e += 1) K(r[e]);
              s = !1;
            },
            d(e) {
              e && h(t), e && h(n), v(r, e), e && h(l);
            },
          };
        })(e);
    return {
      c() {
        (t = b("div")),
          o && o.c(),
          (n = x()),
          c && c.c(),
          (l = x()),
          a && a.c(),
          (s = x()),
          u && u.c(),
          (i = x()),
          d && d.c(),
          A(t, "class", "resume-container svelte-m6h895");
      },
      m(e, f) {
        g(e, t, f),
          o && o.m(t, null),
          $(t, n),
          c && c.m(t, null),
          $(t, l),
          a && a.m(t, null),
          $(t, s),
          u && u.m(t, null),
          $(t, i),
          d && d.m(t, null),
          (r = !0);
      },
      p(e, [t]) {
        de.experience && o.p(e, t),
          de.education && c.p(e, t),
          de.certificatesAndAwards && a.p(e, t),
          de.academic && u.p(e, t),
          de.skills && d.p(e, t);
      },
      i(e) {
        r || (F(o), F(c), F(a), F(u), F(d), (r = !0));
      },
      o(e) {
        K(o), K(c), K(a), K(u), K(d), (r = !1);
      },
      d(e) {
        e && h(t), o && o.d(), c && c.d(), a && a.d(), u && u.d(), d && d.d();
      },
    };
  }
  class Gt extends te {
    constructor(e) {
      super(), ee(this, e, null, Vt, i, {});
    }
  }
  function Yt(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d = e[0].title + "",
      f = e[0].description + "";
    return {
      c() {
        (t = b("div")),
          (n = b("div")),
          (l = b("i")),
          (i = x()),
          (r = b("span")),
          (o = y(d)),
          (c = x()),
          (a = b("span")),
          (u = y(f)),
          A(
            l,
            "class",
            (s =
              "mdi mdi-48px " +
              e[0].icon +
              " mr-1 primary-color svelte-1685fw3")
          ),
          A(r, "class", "uppercase"),
          A(n, "class", "product-title mb-2 svelte-1685fw3"),
          A(t, "class", "container svelte-1685fw3");
      },
      m(e, s) {
        g(e, t, s),
          $(t, n),
          $(n, l),
          $(n, i),
          $(n, r),
          $(r, o),
          $(t, c),
          $(t, a),
          $(a, u);
      },
      p(e, t) {
        1 & t &&
          s !==
            (s =
              "mdi mdi-48px " +
              e[0].icon +
              " mr-1 primary-color svelte-1685fw3") &&
          A(l, "class", s),
          1 & t && d !== (d = e[0].title + "") && j(o, d),
          1 & t && f !== (f = e[0].description + "") && j(u, f);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Jt(e) {
    let t, n;
    return (
      (t = new Ve({
        props: { $$slots: { default: [Yt] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          J(t.$$.fragment);
        },
        m(e, l) {
          Q(t, e, l), (n = !0);
        },
        p(e, [n]) {
          const l = {};
          3 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          K(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          X(t, e);
        },
      }
    );
  }
  function Qt(e, t, n) {
    let { product: l = { title: "", icon: "", description: "" } } = t;
    return (
      (e.$$set = (e) => {
        "product" in e && n(0, (l = e.product));
      }),
      [l]
    );
  }
  class Xt extends te {
    constructor(e) {
      super(), ee(this, e, Qt, Jt, i, { product: 0 });
    }
  }
  function Zt(e, t, n) {
    const l = e.slice();
    return (l[0] = t[n]), l;
  }
  function en(t) {
    let n, l, s, i;
    return (
      (l = new Xt({ props: { product: t[0] } })),
      {
        c() {
          (n = b("div")),
            J(l.$$.fragment),
            (s = x()),
            A(n, "class", "product svelte-1buubc");
        },
        m(e, t) {
          g(e, n, t), Q(l, n, null), $(n, s), (i = !0);
        },
        p: e,
        i(e) {
          i || (F(l.$$.fragment, e), (i = !0));
        },
        o(e) {
          K(l.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && h(n), X(l);
        },
      }
    );
  }
  function tn(e) {
    let t,
      n,
      l,
      s,
      i = fe.products,
      r = [];
    for (let t = 0; t < i.length; t += 1) r[t] = en(Zt(e, i, t));
    const o = (e) =>
      K(r[e], 1, 1, () => {
        r[e] = null;
      });
    return {
      c() {
        (t = b("span")),
          (t.textContent = `${fe.header}`),
          (n = x()),
          (l = b("div"));
        for (let e = 0; e < r.length; e += 1) r[e].c();
        A(t, "class", "block bold mb-2"),
          A(l, "class", "services-container svelte-1buubc");
      },
      m(e, i) {
        g(e, t, i), g(e, n, i), g(e, l, i);
        for (let e = 0; e < r.length; e += 1) r[e].m(l, null);
        s = !0;
      },
      p(e, [t]) {
        if (0 & t) {
          let n;
          for (i = fe.products, n = 0; n < i.length; n += 1) {
            const s = Zt(e, i, n);
            r[n]
              ? (r[n].p(s, t), F(r[n], 1))
              : ((r[n] = en(s)), r[n].c(), F(r[n], 1), r[n].m(l, null));
          }
          for (O(), n = i.length; n < r.length; n += 1) o(n);
          U();
        }
      },
      i(e) {
        if (!s) {
          for (let e = 0; e < i.length; e += 1) F(r[e]);
          s = !0;
        }
      },
      o(e) {
        r = r.filter(Boolean);
        for (let e = 0; e < r.length; e += 1) K(r[e]);
        s = !1;
      },
      d(e) {
        e && h(t), e && h(n), e && h(l), v(r, e);
      },
    };
  }
  class nn extends te {
    constructor(e) {
      super(), ee(this, e, null, tn, i, {});
    }
  }
  function ln(t) {
    let n, l;
    return (
      (n = new We({ props: { fields: t[0] } })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(e, t) {
          Q(n, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (F(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          K(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          X(n, e);
        },
      }
    );
  }
  function sn(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o,
      c,
      a = me.mapsIframe + "";
    return (
      (o = new Ve({
        props: { $$slots: { default: [ln] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          (t = b("div")),
            (n = b("span")),
            (n.textContent = `${me.header}`),
            (l = x()),
            (s = b("div")),
            (i = x()),
            (r = b("div")),
            J(o.$$.fragment),
            A(n, "class", "block bold mb-2"),
            A(s, "class", "map mb-3"),
            A(r, "class", "mb-3"),
            A(t, "class", "contact-container");
        },
        m(e, u) {
          g(e, t, u),
            $(t, n),
            $(t, l),
            $(t, s),
            (s.innerHTML = a),
            $(t, i),
            $(t, r),
            Q(o, r, null),
            (c = !0);
        },
        p(e, [t]) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
        },
        i(e) {
          c || (F(o.$$.fragment, e), (c = !0));
        },
        o(e) {
          K(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && h(t), X(o);
        },
      }
    );
  }
  function rn(e) {
    return [
      [
        { name: "address", value: me.address },
        { name: "email", value: me.email },
        { name: "hours", value: me.hours },
        { name: "tel", value: me.tel },
      ],
    ];
  }
  class on extends te {
    constructor(e) {
      super(), ee(this, e, rn, sn, i, {});
    }
  }
  function cn(e, t, n) {
    const l = e.slice();
    return (l[2] = t[n]), l;
  }
  function an(e) {
    let t, n, l;
    var s = e[1][e[2].name];
    return (
      s && (t = new s({})),
      {
        c() {
          t && J(t.$$.fragment), (n = w());
        },
        m(e, s) {
          t && Q(t, e, s), g(e, n, s), (l = !0);
        },
        p(e, l) {
          if (s !== (s = e[1][e[2].name])) {
            if (t) {
              O();
              const e = t;
              K(e.$$.fragment, 1, 0, () => {
                X(e, 1);
              }),
                U();
            }
            s
              ? ((t = new s({})),
                J(t.$$.fragment),
                F(t.$$.fragment, 1),
                Q(t, n.parentNode, n))
              : (t = null);
          }
        },
        i(e) {
          l || (t && F(t.$$.fragment, e), (l = !0));
        },
        o(e) {
          t && K(t.$$.fragment, e), (l = !1);
        },
        d(e) {
          e && h(n), t && X(t, e);
        },
      }
    );
  }
  function un(e, t) {
    let n,
      l,
      s,
      i = t[2].active && an(t);
    return {
      key: e,
      first: null,
      c() {
        (n = w()), i && i.c(), (l = w()), (this.first = n);
      },
      m(e, t) {
        g(e, n, t), i && i.m(e, t), g(e, l, t), (s = !0);
      },
      p(e, n) {
        (t = e)[2].active
          ? i
            ? (i.p(t, n), 1 & n && F(i, 1))
            : ((i = an(t)), i.c(), F(i, 1), i.m(l.parentNode, l))
          : i &&
            (O(),
            K(i, 1, 1, () => {
              i = null;
            }),
            U());
      },
      i(e) {
        s || (F(i), (s = !0));
      },
      o(e) {
        K(i), (s = !1);
      },
      d(e) {
        e && h(n), i && i.d(e), e && h(l);
      },
    };
  }
  function dn(e) {
    let t,
      n,
      l,
      s,
      i = [],
      r = new Map(),
      o = e[0];
    const c = (e) => e[2].name;
    for (let t = 0; t < o.length; t += 1) {
      let n = cn(e, o, t),
        l = c(n);
      r.set(l, (i[t] = un(l, n)));
    }
    return {
      c() {
        (t = b("div")), (n = b("a")), (l = x());
        for (let e = 0; e < i.length; e += 1) i[e].c();
        A(n, "id", "drawer-anchor"),
          C(n, "display", "inline"),
          A(t, "class", "grid-item-drawer mb-1 mt-2 svelte-1ema7hz");
      },
      m(e, r) {
        g(e, t, r), $(t, n), $(t, l);
        for (let e = 0; e < i.length; e += 1) i[e].m(t, null);
        s = !0;
      },
      p(e, [n]) {
        3 & n &&
          ((o = e[0]),
          O(),
          (i = Y(i, n, c, 1, e, o, r, t, G, un, null, cn)),
          U());
      },
      i(e) {
        if (!s) {
          for (let e = 0; e < o.length; e += 1) F(i[e]);
          s = !0;
        }
      },
      o(e) {
        for (let e = 0; e < i.length; e += 1) K(i[e]);
        s = !1;
      },
      d(e) {
        e && h(t);
        for (let e = 0; e < i.length; e += 1) i[e].d();
      },
    };
  }
  function fn(e, t, n) {
    let l;
    a(e, ge, (e) => n(0, (l = e)));
    return [l, { about: nt, resume: Gt, services: nn, contact: on }];
  }
  class mn extends te {
    constructor(e) {
      super(), ee(this, e, fn, dn, i, {});
    }
  }
  function pn(t) {
    let n;
    return {
      c() {
        (n = b("div")),
          (n.innerHTML =
            '<a href="https://github.com/jajosheni/N95">N95 Template</a>'),
          A(n, "class", "template-footer svelte-dtlrep");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  class $n extends te {
    constructor(e) {
      super(), ee(this, e, null, pn, i, {});
    }
  }
  function gn(e, t, n) {
    const l = e.slice();
    return (l[0] = t[n]), l;
  }
  function hn(e, t) {
    let n;
    return {
      key: e,
      first: null,
      c() {
        (n = b("meta")),
          A(n, "name", t[0].name),
          A(n, "content", t[0].content),
          (this.first = n);
      },
      m(e, t) {
        g(e, n, t);
      },
      p(e, n) {
        t = e;
      },
      d(e) {
        e && h(n);
      },
    };
  }
  function vn(e) {
    let t,
      n,
      l,
      s,
      i,
      r,
      o,
      c,
      a,
      u,
      d,
      f,
      m,
      p,
      v,
      y,
      k = [],
      j = new Map();
    document.title = n = pe;
    let C = $e;
    const S = (e) => e[0].name;
    for (let t = 0; t < C.length; t += 1) {
      let n = gn(e, C, t),
        l = S(n);
      j.set(l, (k[t] = hn(l, n)));
    }
    return (
      (i = new le({})),
      (a = new be({})),
      (d = new Be({})),
      (m = new mn({})),
      (v = new $n({})),
      {
        c() {
          t = b("link");
          for (let e = 0; e < k.length; e += 1) k[e].c();
          (l = w()),
            (s = x()),
            J(i.$$.fragment),
            (r = x()),
            (o = b("main")),
            (c = b("div")),
            J(a.$$.fragment),
            (u = x()),
            J(d.$$.fragment),
            (f = x()),
            J(m.$$.fragment),
            (p = x()),
            J(v.$$.fragment),
            A(t, "rel", "icon"),
            A(t, "type", "image/png"),
            A(t, "href", "favicon.png"),
            A(c, "class", "container svelte-1hlajfk"),
            A(o, "class", "svelte-1hlajfk");
        },
        m(e, n) {
          $(document.head, t);
          for (let e = 0; e < k.length; e += 1) k[e].m(document.head, null);
          $(document.head, l),
            g(e, s, n),
            Q(i, e, n),
            g(e, r, n),
            g(e, o, n),
            $(o, c),
            Q(a, c, null),
            $(c, u),
            Q(d, c, null),
            $(c, f),
            Q(m, c, null),
            g(e, p, n),
            Q(v, e, n),
            (y = !0);
        },
        p(e, [t]) {
          (!y || 0 & t) && n !== (n = pe) && (document.title = n),
            0 & t &&
              ((C = $e),
              (k = Y(k, t, S, 1, e, C, j, l.parentNode, V, hn, l, gn)));
        },
        i(e) {
          y ||
            (F(i.$$.fragment, e),
            F(a.$$.fragment, e),
            F(d.$$.fragment, e),
            F(m.$$.fragment, e),
            F(v.$$.fragment, e),
            (y = !0));
        },
        o(e) {
          K(i.$$.fragment, e),
            K(a.$$.fragment, e),
            K(d.$$.fragment, e),
            K(m.$$.fragment, e),
            K(v.$$.fragment, e),
            (y = !1);
        },
        d(e) {
          h(t);
          for (let e = 0; e < k.length; e += 1) k[e].d();
          h(l),
            e && h(s),
            X(i, e),
            e && h(r),
            e && h(o),
            X(a),
            X(d),
            X(m),
            e && h(p),
            X(v, e);
        },
      }
    );
  }
  return new (class extends te {
    constructor(e) {
      super(), ee(this, e, null, vn, i, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
