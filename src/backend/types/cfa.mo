module {
  // ── Core identity types ──────────────────────────────────────────────────
  public type UserId = Principal;
  public type Timestamp = Int;

  // ── Content types ────────────────────────────────────────────────────────
  public type Topic = {
    id : Nat;
    title : Text;
    description : Text;
    weightMin : Nat;
    weightMax : Nat;
    learningObjectives : [Text];
  };

  public type Question = {
    id : Nat;
    topicId : Nat;
    stem : Text;
    options : [Text]; // exactly 3 options: A, B, C
    correctIndex : Nat; // 0=A, 1=B, 2=C
    explanation : Text;
    difficulty : Text;
  };

  public type MockExam = {
    id : Nat;
    title : Text;
    questionIds : [Nat];
  };

  // ── Submission / scoring types ───────────────────────────────────────────
  // A single scored answer within an ExamAttempt
  public type UserAnswer = {
    questionId : Nat;
    selectedIndex : Nat;
    isCorrect : Bool;
    timestamp : Int;
  };

  // topicBreakdown: [(topicId, correct, total)]
  public type ExamAttempt = {
    id : Nat;
    examId : Nat;
    userId : Principal;
    answers : [UserAnswer];
    score : Nat;
    totalQuestions : Nat;
    startedAt : Int;
    completedAt : Int;
    topicBreakdown : [(Nat, Nat, Nat)];
  };

  public type PracticeAttempt = {
    id : Nat;
    topicId : Nat;
    userId : Principal;
    questionId : Nat;
    selectedIndex : Nat;
    isCorrect : Bool;
    timestamp : Int;
  };

  // topicStats: [(topicId, correct, total)]
  public type UserStats = {
    userId : Principal;
    totalPracticeCorrect : Nat;
    totalPracticeAttempts : Nat;
    studyStreak : Nat;
    lastActiveDate : Text;
    topicStats : [(Nat, Nat, Nat)];
  };

  // ── Mutable counter state (passed by reference to mixins) ────────────────
  public type Counters = {
    var nextPracticeId : Nat;
    var nextExamAttemptId : Nat;
  };

  // ── API helper types ─────────────────────────────────────────────────────
  public type ExamAnswer = {
    questionId : Nat;
    selectedIndex : Nat;
  };

  public type PracticeResult = {
    isCorrect : Bool;
    correctIndex : Nat;
    explanation : Text;
    attempt : PracticeAttempt;
  };
};
