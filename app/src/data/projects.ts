export const projects = [
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
    linkUrl: "https://github.com/doardigital/api",
    linkDescription: "projects.button-to-github",
    tags: ["rest api", "node.js", "koa.js", "docker"],
  },
];

