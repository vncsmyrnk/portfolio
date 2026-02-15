export const projects = [
  {
    name: "projects.fakeapi.title",
    description: "projects.fakeapi.description",
    language: "go",
    codeString: `[...]
delayDuration := stdtime.Duration(activeEndpoint.OutputDelaySeconds) * stdtime.Second
s.TimeProvider.Sleep(delayDuration)

w.Header().Set("Content-Type", "application/json")
w.WriteHeader(activeEndpoint.OutputStatus)

if activeEndpoint.OutputContent == nil {
    return
}
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/fakeapi",
    linkDescription: "projects.button-to-github",
    tags: [
      "cli",
      "mock",
      "go",
      "tests",
      "codecov",
      "ci/cd",
      "rest api",
    ],
  },
  {
    name: "projects.shell-utils.title",
    description: "projects.shell-utils.description",
    language: "sh",
    codeString: `[...]
if help_flag_set "$@"; then
  print_help_for_file "$script_path" || {
    exit 1
  }
  exit 0
fi

execute_script "$script_path" "$found_script_arguments"
exit
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/shell-utils",
    linkDescription: "projects.button-to-github",
    tags: [
      "shell",
      "bash",
      "cli",
      "completions",
    ],
  },
  {
    name: "projects.tcc.title",
    description: "projects.tcc.description",
    language: "tex",
    codeString: `[...]
\\newpage
\\selectlanguage{english}
\\begin{abstract}
\\noindent
Building Docker images through traditional methods presents challenges related to size, security, and reproducibility, limiting efficiency in production environments.
\\\\textbf{\\keyword{Keywords: }} Docker. Nix. Containers. Package management. Security.
\\end{abstract}
[...]`,
    linkUrl: "https://bib.pucminas.br/acervo/571388",
    linkDescription: "projects.button-to-pergamum",
    tags: [
      "nix",
      "docker",
      "containers",
      "package managers",
      "security",
      "ci/cd",
    ],
  },
  {
    name: "projects.ashttp.title",
    description: "projects.ashttp.description",
    language: "go",
    codeString: `[...]
req, err := request.ToHTTPRequest(setting)
if err != nil {
    fatal("failed to build request: %v", err)
}

response, err := http.Execute(req)
if err != nil {
    fatal("failed to execute request: %v", err)
}
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/ashttp",
    linkDescription: "projects.button-to-github",
    tags: [
      "go",
      "cli",
      "http",
      "client",
    ],
  },
  {
    name: "projects.dotfiles.title",
    description: "projects.dotfiles.description",
    language: "bash",
    codeString: `[...]
ZSH_THEME="bira"
plugins=(git z fzf zsh-syntax-highlighting zsh-autosuggestions)
[ -d "$HOME/.config/util/completions" ] && fpath=($HOME/.config/util/completions $fpath)
[ -f "$HOME/.config/util/setup" ] && \\. "$HOME/.config/util/setup"

# User configuration
export EDITOR='nvim'
export LANG=en_US.UTF-8
export UTILS_RC_PATH="$HOME/.utils/rc"
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/dotfiles",
    linkDescription: "projects.button-to-github",
    tags: [
      "shell",
      "zsh",
      "dotfiles",
      "linux",
    ],
  },
  {
    name: "projects.aoc.title",
    description: "projects.aoc.description",
    language: "zig",
    codeString: `[...]
const matchers: []const Matcher = &.{
    lastCharsMatchHorizontally,
    lastCharsMatchVertically,
};
const search = SearchContext{
    .search_word = search_word,
    .starting_row_index = row_index,
    .starting_column_index = column_index,
};
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/aoc",
    linkDescription: "projects.button-to-github",
    tags: [
      "zig",
      "perl",
      "competitive-programming",
      "shell",
      "awk",
    ],
  },
  {
    name: "projects.restaurant.title",
    description: "projects.restaurant.description",
    language: "python",
    codeString: `[...]
bp = Blueprint('bp_ingrediente', __name__)

@bp.get("")
def get_ingredientes():
  with session_scope() as session:
  ingredientes = session.query(Ingrediente).all()
return jsonify([i.serialize() for i in ingredientes])
[...]`,
    linkUrl: "https://github.com/Sistema-de-integracao-em-restaurante/api",
    linkDescription: "projects.button-to-github",
    tags: [
      "rest api",
      "python",
      "flask",
      "sqlalchemy",
      "docker",
      "ci/cd",
      "github actions",
    ],
  },
  {
    name: "projects.todayiwill.title",
    description: "projects.todayiwill.description",
    language: "rust",
    codeString: `[...]
let args = Cli::parse();
let config = Config::default();
match args.command {
    Commands::Add { description, time } => {
        let result = helper::parse_time(&time);
        let (hour, minutes) = match result {
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/todayiwill",
    linkDescription: "projects.button-to-github",
    tags: [
      "cli",
      "rust",
      "clap",
      "tests",
      "codecov",
      "ci/cd",
      "github actions",
    ],
  },
  {
    name: "projects.work-time-calculator.title",
    description: "projects.work-time-calculator.description",
    language: "java",
    codeString: `[...]
@PostMapping(value = "day")
public ResponseEntity<List<Calculation>> calculateDay(@Valid @RequestBody RequestDay requestDay) {
  Day day =
    DayBuilder.of(
      requestDay.getDate(), requestDay.getRegisteredRecords(), requestDay.getShiftRecords());
      List<Calculation> calculations = day.calculate();
      return ResponseEntity.ok(calculations);
}
[...]`,
    linkUrl: "https://github.com/clocked-app/calculations-api",
    linkDescription: "projects.button-to-github",
    tags: [
      "rest api",
      "java",
      "spring boot",
      "docker",
      "ci/cd",
      "github actions",
    ],
  },
  {
    name: "projects.sentiment-analysis.title",
    description: "projects.sentiment-analysis.description",
    language: "python",
    codeString: `[...]
@app.post("/analyze")
def analyze():
  distilled_student_sentiment_classifier = pipeline(
    model="lxyuan/distilbert-base-multilingual-cased-sentiments-student",
      return_all_scores=True
)
print(request.data, request.json)
sentence_to_analyze = request.json['sentence']
return distilled_student_sentiment_classifier(sentence_to_analyze)
[...]`,
    linkUrl: "https://github.com/vncsmyrnk/sentiment-analysis-pt",
    linkDescription: "projects.button-to-github",
    tags: [
      "nlp",
      "ai",
      "rest api",
      "python",
      "tensorflow",
      "ci/cd",
      "github actions",
    ],
  },
  {
    name: "projects.digital-donations.title",
    description: "projects.digital-donations.description",
    language: "javascript",
    codeString: `[...]
const getById = async (ctx, next) => {
  const images = await models[modelName].findAll({
    where: {
      idEquipamento: ctx.params.id
    }
  })
  return images;
};
[...]`,
    linkUrl: "https://github.com/doardigital/api",
    linkDescription: "projects.button-to-github",
    tags: ["rest api", "node.js", "koa.js", "docker"],
  },
];

