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
fn counterWrapper(counter: *usize, mutex: *std.Thread.Mutex, matcher: Matcher, search_criteria: SearchContext) void {
    const match = matcher(search_criteria);
    if (match) {
        mutex.lock();
        defer mutex.unlock();
        counter.* += 1;
    }
}
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

