// ============================================================
// Paper data — edit this array to add/remove/reorder papers.
//
// Fields:
//   authors:  [{ name: "...", url: "..." (optional) }, ...]
//   year:     number (publication / working-paper year)
//   title:    string
//   pdf:      URL string (optional — omit if no PDF available)
//   note:     HTML string shown below the title (optional)
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
    year: 2025,
    title: "Sorting into Entrepreneurial Teams",
    pdf: "https://andrealati.github.io/docs/wp/AAMM_team.pdf",
    note: 'Also available at <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4068858">SSRN</a>',
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
    note: 'R &amp; R at the American Economic Review, also available at <a href="...">SSRN</a> and <a href="...">BoE-WP</a><br/>Previously circulated as <i>"Human Capital Ladders, Cyclical Sorting, and Hysteresis"</i>',
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
    note: 'Also available at <a href="https://www.bankofengland.co.uk/working-paper/2024/firms-sales-expectations-and-marginal-propensity-to-invest">BoE-WP</a>',
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
    note: 'New version! Also available at <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4698308">SSRN</a> and <a href="https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2023/defusing-leverage-liquidity-management-and-labor-contracts.pdf">BoE-WP</a>',
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
    note: "",
    abstract: "I explore the role of aggregate fluctuations as a persistent determinant of heterogeneity in firm-level markups. To analyze how business cycles generate dispersion in markups, I estimate the effects of aggregate conditions at key moments of firms\u2019 lives on the age profiles of markups for a sample of U.S. listed companies. Using the estimated markups, I calibrate a general equilibrium model that features heterogeneous product markets, customer base accumulation and firm dynamics. A novel feature of the model is that, in addition to making direct investments in customer acquisition, firms can accumulate customers by increasing sales, which is important to match the empirical findings. As the value of operating in each product market fluctuates endogenously with business cycles, aggregate conditions generate a selection on the product-market composition of firm cohorts that results in time-varying heterogeneity in product-market characteristics across active companies. This heterogeneity is persistent and can significantly affect both the response of the economy to future aggregate shocks and the co-movements of aggregate markups with output.",
    category: "wp"
  },

  // ---- Work in Progress ----

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
// Render function — builds the HTML from the papers array above
// ============================================================

(function() {
  var categoryMeta = {
    wp:      { heading: null },            // falls under the main "Research" h2
    wip:     { heading: "Work in Progress" },
    dormant: { heading: "Dormant" }
  };

  var categoryOrder = ["wp", "wip", "dormant"];

  function renderAuthor(a) {
    if (a.url) {
      return '<a href="' + a.url + '">' + a.name + '</a>';
    }
    return a.name;
  }

  function renderAuthors(authors) {
    if (authors.length === 1) return renderAuthor(authors[0]);
    var parts = [];
    for (var i = 0; i < authors.length; i++) {
      if (i === authors.length - 1) {
        parts.push(' and ' + renderAuthor(authors[i]));
      } else if (i > 0) {
        parts.push(', ' + renderAuthor(authors[i]));
      } else {
        parts.push(renderAuthor(authors[i]));
      }
    }
    return parts.join('');
  }

  function renderPaper(p) {
    // Use <div> not <p> — <details> is a block element and browsers
    // auto-close <p> when they encounter it, breaking the layout.
    var html = '<div class="paper-entry">';

    // Authors + year
    html += renderAuthors(p.authors);
    if (p.year) html += ' (' + p.year + ').';
    html += '<br/>';

    // Title + PDF icon
    html += '<strong>' + p.title + '</strong>';
    if (p.pdf) {
      html += ' <a href="' + p.pdf + '" class="fas fa-file-pdf" title="PDF"></a>';
    }
    html += '<br/>';

    // Sub-note
    if (p.note) {
      html += '<sub>' + p.note + '</sub>';
    }

    // Abstract
    if (p.abstract) {
      html += '<details class="paper-abstract">';
      html += '<summary>Abstract</summary>';
      html += p.abstract;
      html += '</details>';
    }

    html += '</div>';
    return html;
  }

  // Build the full research section content
  var container = document.getElementById('papers-container');
  if (!container) return;

  var output = '';

  for (var c = 0; c < categoryOrder.length; c++) {
    var cat = categoryOrder[c];
    var meta = categoryMeta[cat];

    // Collect papers in this category
    var catPapers = [];
    for (var i = 0; i < papers.length; i++) {
      if (papers[i].category === cat) catPapers.push(papers[i]);
    }
    if (catPapers.length === 0) continue;

    // Sort by year descending (most recent first); papers without year go last
    catPapers.sort(function(a, b) {
      return (b.year || 0) - (a.year || 0);
    });

    // Section sub-heading (WIP, Dormant)
    if (meta.heading) {
      output += '<div class="title_content">';
      output += '<h3 class="subsection-heading">' + meta.heading + '</h3>';
      output += '</div>';
    }

    for (var j = 0; j < catPapers.length; j++) {
      output += renderPaper(catPapers[j]);
    }
  }

  container.innerHTML = output;
})();
