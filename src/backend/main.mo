import List "mo:core/List";
import Map "mo:core/Map";
import Types "types/cfa";
import CfaLib "lib/cfa";
import CfaApiMixin "mixins/cfa-api";

actor Main {

  // ── Stable state ──────────────────────────────────────────────────────────
  let topics = List.empty<Types.Topic>();
  let questions = List.empty<Types.Question>();
  let mockExams = List.empty<Types.MockExam>();
  let practiceAttempts = List.empty<Types.PracticeAttempt>();
  let examAttempts = List.empty<Types.ExamAttempt>();
  let userStats = Map.empty<Types.UserId, Types.UserStats>();
  let counters : Types.Counters = {
    var nextPracticeId = 0;
    var nextExamAttemptId = 0;
  };
  var seeded : Bool = false;

  // ── One-time seed on first init ───────────────────────────────────────────
  if (not seeded) {
    CfaLib.seedTopics(topics);
    CfaLib.seedQuestions(questions);
    CfaLib.seedMockExams(mockExams);
    seeded := true;
  };

  // ── Compose API mixin ─────────────────────────────────────────────────────
  include CfaApiMixin(
    topics,
    questions,
    mockExams,
    practiceAttempts,
    examAttempts,
    userStats,
    counters,
  );
};
