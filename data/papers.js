// ============================================================
// Paper data — edit this array to add/remove/reorder papers.
//
// Fields:
//   authors:  [{ name: "...", url: "..." (optional) }, ...]
//             Shown in alphabetical order by surname (last word of the name).
//             For multi-word surnames add surname: "Del Prato".
//   year:     number (publication / working-paper year)
//   title:    string
//   pdf:      URL string (optional — shown as the first "PDF" button)
//   links:    [{ label: "SSRN", url: "..." }, ...] (optional — extra buttons;
//             an entry with an empty url is skipped and logged in the console)
//   status:   short text shown as a tag, e.g. "R&R, Journal" (optional)
//   note:     HTML string shown below the authors (optional)
//   abstract: plain-text string (optional — omit for WIP/dormant without abstracts)
//   category: "wp" (working papers) | "wip" (work in progress) | "dormant"
// ============================================================

var papers = [

  // ---- Working Papers ----

  {
    authors: [
      { name: "Edoardo Acabbi", url: "https://eacabbi.github.io" },
      { name: "Andrea Alati" },
      { name: "Luca Mazzone", url: "https://lucamazzone.github.io" },
      { name: "Marta Morazzoni", url: "https://martamorazzoni.weebly.com/" }
    ],
    year: 2026,
    title: "Sorting into Entrepreneurial Teams",
    pdf: "https://andrealati.github.io/docs/wp/AAMM_team.pdf",
    links: [
      { label: "SSRN", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5138383" },
      { label: "CEPR DP21393", url: "https://cepr.org/publications/dp21393" }
    ],
    abstract: "This paper studies how entrepreneurs sort into teams and how team entrepreneurship affects the equilibrium distribution of firms. Leveraging employer-employee administrative records matched with privately-held firms\u2019 balance sheet data for Portugal, we show that firms of entrepreneurial teams have higher sales, productivity and survival rates than those owned by single entrepreneurs. We then exploit information on individuals\u2019 careers before opening a firm to establish that there is a strong degree of sorting in entrepreneurial teams along observed and unobserved heterogeneity. A novel theory of career choices and team formation rationalizes why similarity in entrepreneurs\u2019 overall talent and dissimilarity in their specialization lead to better firm outcomes, providing insights into the micro-foundations of firm growth.",
    category: "wp"
  },

  {
    authors: [
      { name: "Edoardo Acabbi", url: "https://eacabbi.github.io" },
      { name: "Andrea Alati" },
      { name: "Luca Mazzone", url: "https://lucamazzone.github.io" }
    ],
    year: 2026,
    title: "The Collapse of Human Capital Ladders in Recessions",
    pdf: "https://andrealati.github.io/docs/wp/human_capital_ladders_aam.pdf",
    status: "R&R (2nd round), American Economic Review",
    links: [
      { label: "SSRN", url: "" },   // TODO: real URL (was a "..." placeholder)
      { label: "BoE WP", url: "" }  // TODO: real URL (was a "..." placeholder)
    ],
    note: 'Previously circulated as <i>“Human Capital Ladders, Cyclical Sorting, and Hysteresis”</i>',
    abstract: "Using administrative data, we document that workers acquire more human capital at more productive firms. Recessions distort workers-firm sorting, flatten the job ladder and impact human capital accumulation, as workers match on average to worse firms. To quantify the aggregate relevance of these effects, we build a directed search model with aggregate risk and worker-firm heterogeneity, in which human capital accumulation depends on firm quality. We estimate the model and show that recessions have persistent negative effects on the productivity of worker-firm matches, with distortions in sorting and human capital accumulation accounting for approximately 30% of cumulative output losses.",
    category: "wp"
  },

  {
    authors: [
      { name: "Andrea Alati" },
      { name: "Johannes Fischer", url: "https://sites.google.com/view/johannesjfischer" },
      { name: "Maren Froemel" },
      { name: "Ozgen Ozturk", url: "https://www.ozgenozturk.com" }
    ],
    year: 2024,
    title: "Firms\u2019 Sales Expectations and Marginal Propensity to Invest",
    pdf: "https://andrealati.github.io/docs/wp/MPI_AFFO.pdf",
    links: [
      { label: "BoE WP", url: "https://www.bankofengland.co.uk/working-paper/2024/firms-sales-expectations-and-marginal-propensity-to-invest" }
    ],
    abstract: "How do firms adjust their investment in response to sales shocks and what determines the response? Using a unique firm\u2011level survey, we propose a novel approach to estimate UK firms\u2019 marginal propensity to invest (MPI) out of additional income: the forecast error of their sales growth expectations. Investment responds significantly to these sales surprises, with a 1 percentage point unexpected growth in sales translating into a 0.31 percentage point increase in capital expenditure. Firms that are more attentive to the state of the economy are more responsive, consistent with sales growth surprises providing firms with information about their demand. Sales growth surprises also cause firms to increase their prices, supporting this interpretation. We do not find evidence that these results are driven by financial frictions, uncertainty, or productivity shocks.",
    category: "wp"
  },

  {
    authors: [
      { name: "Edoardo Acabbi", url: "https://eacabbi.github.io" },
      { name: "Andrea Alati" }
    ],
    year: 2025,
    title: "Defusing leverage: liquidity management and labor contracts",
    status: "New version",
    links: [
      { label: "SSRN", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4698308" },
      { label: "BoE WP", url: "https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2023/defusing-leverage-liquidity-management-and-labor-contracts.pdf" }
    ],
    abstract: "We test whether firms use flexible contracts to limit the effects of labor-induced operating leverage. Using Italian administrative data, we show that greater reliance on temporary contracts dampens the sensitivity of cash-flow and profit volatility to shocks, especially among high-labor-share firms. Exploiting a staggered liberalization of temporary contracts, we show that the rise in adoption led to decreasing labor compensation, and\u2014among firms with initially rigid labor costs\u2014 to an increase in profit margins, a decrease in profit dispersion, and an expansion in debt capacity and investment. Contract mix is thus an active hedging margin shaping financial responses to shocks.",
    category: "wp"
  },

  {
    authors: [
      { name: "Andrea Alati" }
    ],
    year: 2021,
    title: "Initial aggregate conditions and heterogeneity in firm-level markups",
    pdf: "https://andrealati.github.io/docs/wp/jmp_alati.pdf",
    abstract: "I explore the role of aggregate fluctuations as a persistent determinant of heterogeneity in firm-level markups. To analyze how business cycles generate dispersion in markups, I estimate the effects of aggregate conditions at key moments of firms\u2019 lives on the age profiles of markups for a sample of U.S. listed companies. Using the estimated markups, I calibrate a general equilibrium model that features heterogeneous product markets, customer base accumulation and firm dynamics. A novel feature of the model is that, in addition to making direct investments in customer acquisition, firms can accumulate customers by increasing sales, which is important to match the empirical findings. As the value of operating in each product market fluctuates endogenously with business cycles, aggregate conditions generate a selection on the product-market composition of firm cohorts that results in time-varying heterogeneity in product-market characteristics across active companies. This heterogeneity is persistent and can significantly affect both the response of the economy to future aggregate shocks and the co-movements of aggregate markups with output.",
    category: "wp"
  },

  // ---- Work in Progress ----
  {
    authors: [
      { name: "Edoardo Acabbi", url: "https://eacabbi.github.io" },
      { name: "Andrea Alati" },
      { name: "Francesco Del Prato", surname: "Del Prato", url: "https://francescodelprato.github.io/" }
    ],
    title: "The Worker and Firm Components of Monopsony",
    category: "wip"
  },

  {
    authors: [
      { name: "Andrea Alati" },
      { name: "Tomas Key" },
      { name: "Philip Schnattinger", url: "https://philipschnattinger.github.io" },
      { name: "Bradley Speigner" },
      { name: "Eran Yashiv", url: "https://www.yashiv.sites.tau.ac.il/" }
    ],
    title: "Hiring, Mismatch, and Vacancies: Lessons from Unique U.K. Vacancy Data",
    category: "wip"
  },

  {
    authors: [
      { name: "Andrea Alati" },
      { name: "Fergus Cumming", url: "https://sites.google.com/view/ferguscumming" },
      { name: "Alberto Polo", url: "https://www.poloalberto.com/" }
    ],
    title: "Household Income and Debt",
    category: "wip"
  },

  {
    authors: [
      { name: "Edoardo Acabbi", url: "https://eacabbi.github.io/" },
      { name: "Andrea Alati" },
      { name: "Ben Griffy", url: "https://www.bengriffy.com/" },
      { name: "Luca Mazzone", url: "https://lucamazzone.github.io/" },
      { name: "Stanislav Rabinovich", url: "https://sites.google.com/site/stanrabinovicheconomics/" }
    ],
    title: "The Optimal Design of Job Retention Schemes",
    category: "wip"
  },

  // ---- Dormant ----

  {
    authors: [
      { name: "Andrea Alati" },
      { name: "Adrien Bussy", url: "https://sites.google.com/view/abussy/home" },
      { name: "Friedrich Geiecke", url: "https://sites.google.com/view/friedrichgeiecke/research" }
    ],
    title: "Free manuals and productivity",
    abstract: "This note considers the possible productivity effect of the vast amount of free answers to coding questions available online, a phenomenon we term manuals. Large parts of the manual production are the result of non-pecuniary motives, e.g. warm glow and social recognition. Developers take the time to answer detailed programming questions online and their answers are freely accessible. Different users than those who had originally asked the questions search and find the answers on a daily basis when they have to solve similar problems in their work. The re-use component of answers is very substantial. Up to 2018, there were around 17 million questions on today\u2019s most popular website. These questions and their answers have been been viewed around 39 billion times over the same time span. Unlike patents or other measures of technological progress, most of such manuals has no proprietary rights or price. To motivate our analysis, we first establish that historical use of programming alone is a surprisingly competitive predictor of recent regional US economic growth, also when additionally controlling for historical IT investment or education. We then document the frequent use of manuals by programmers and look into the social norms which drive their wide-spread provision. A stylized model depicts manuals and new functionalities in programming languages as being close to perfect complements in a production function: The economy could not leverage the productivity of new programming functionalities close to as quickly without the widespread norms that generate the required manuals almost simultaneously.",
    category: "dormant"
  },

  {
    authors: [
      { name: "Andrea Alati" },
      { name: "Silvana Tenreyro", url: "http://personal.lse.ac.uk/tenreyro/" },
      { name: "Gregory Thwaites", url: "https://www.gregorythwaites.com/" }
    ],
    title: "The public and private debt channel of monetary policy",
    category: "dormant"
  }

];


// ============================================================
// Render function — fills every <div data-papers="..."> in index.html
// with the papers of that category, most recent first.
// ============================================================

(function () {
  // How the author line is written (authors are always sorted by surname):
  //   "full"  — every author
  //   "joint" — "Joint with X and Y" (coauthors only)
  var AUTHOR_FORMAT = "full";
  var ME = "Andrea Alati";

  function surname(a) {
    return a.surname || a.name.split(" ").pop();
  }

  function alphabetical(authors) {
    return authors.slice().sort(function (x, y) {
      return surname(x).localeCompare(surname(y), "en", { sensitivity: "base" });
    });
  }

  function joinNames(names) {
    if (names.length <= 1) return names.join("");
    return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  }

  function renderAuthor(a) {
    if (a.name === ME) return '<span class="me">' + a.name + "</span>";
    return a.url ? '<a href="' + a.url + '">' + a.name + "</a>" : a.name;
  }

  function renderAuthors(p) {
    var authors = alphabetical(p.authors);
    var coauthors = authors.filter(function (a) { return a.name !== ME; });
    var line = "";
    if (coauthors.length > 0) {
      line = AUTHOR_FORMAT === "joint"
        ? "Joint with " + joinNames(coauthors.map(renderAuthor))
        : joinNames(authors.map(renderAuthor));
    }
    if (p.year) line += (line ? " · " : "") + p.year;
    return line ? '<p class="paper-authors">' + line + "</p>" : "";
  }

  function renderLinks(p) {
    var links = [];
    if (p.pdf) links.push({ label: "PDF", url: p.pdf });
    (p.links || []).forEach(function (l) {
      if (l.url) links.push(l);
      else console.warn('papers.js: no URL for "' + l.label + '" on "' + p.title + '" (button hidden)');
    });
    if (links.length === 0) return "";
    return '<div class="paper-links">' + links.map(function (l) {
      return '<a class="pill" href="' + l.url + '">' + l.label + "</a>";
    }).join("") + "</div>";
  }

  function renderPaper(p) {
    var html = '<article class="paper">';
    html += '<div class="paper-head"><h3 class="paper-title">' + p.title + "</h3>" + renderLinks(p) + "</div>";
    html += renderAuthors(p);
    if (p.note) html += '<p class="paper-note">' + p.note + "</p>";
    if (p.status) html += '<span class="status">' + p.status + "</span>";
    if (p.abstract) {
      html += '<details class="paper-abstract"><summary>Abstract</summary><p>' + p.abstract + "</p></details>";
    }
    return html + "</article>";
  }

  document.querySelectorAll("[data-papers]").forEach(function (container) {
    var cat = container.getAttribute("data-papers");
    var list = papers
      .filter(function (p) { return p.category === cat; })
      .sort(function (a, b) { return (b.year || 0) - (a.year || 0); }); // stable: ties keep file order
    container.innerHTML = list.map(renderPaper).join("");
  });
})();
