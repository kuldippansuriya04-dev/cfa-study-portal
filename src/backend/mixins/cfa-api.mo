import Types "../types/cfa";
import CfaLib "../lib/cfa";
import List "mo:core/List";
import Map "mo:core/Map";

mixin (
  topics : List.List<Types.Topic>,
  questions : List.List<Types.Question>,
  mockExams : List.List<Types.MockExam>,
  practiceAttempts : List.List<Types.PracticeAttempt>,
  examAttempts : List.List<Types.ExamAttempt>,
  userStats : Map.Map<Types.UserId, Types.UserStats>,
  counters : Types.Counters,
) {

  // ── Read: Topics ─────────────────────────────────────────────────────────
  public query func getTopics() : async [Types.Topic] {
    CfaLib.listTopics(topics);
  };

  public query func getTopic(id : Nat) : async ?Types.Topic {
    CfaLib.getTopic(topics, id);
  };

  // ── Read: Questions ──────────────────────────────────────────────────────
  public query func getQuestions(topicId : Nat) : async [Types.Question] {
    CfaLib.getQuestions(questions, topicId);
  };

  // ── Read: Mock Exams ─────────────────────────────────────────────────────
  public query func getMockExams() : async [Types.MockExam] {
    CfaLib.listMockExams(mockExams);
  };

  public query func getMockExam(id : Nat) : async ?Types.MockExam {
    CfaLib.getMockExam(mockExams, id);
  };

  public query func getMockExamQuestions(examId : Nat) : async [Types.Question] {
    switch (CfaLib.getMockExam(mockExams, examId)) {
      case null [];
      case (?exam) CfaLib.getQuestionsByIds(questions, exam.questionIds);
    };
  };

  // ── Update: Practice ─────────────────────────────────────────────────────
  public shared ({ caller }) func submitPracticeAnswer(
    topicId : Nat,
    questionId : Nat,
    selectedIndex : Nat,
  ) : async Types.PracticeResult {
    let (result, newId) = CfaLib.submitPracticeAnswer(
      questions,
      practiceAttempts,
      userStats,
      counters.nextPracticeId,
      caller,
      topicId,
      questionId,
      selectedIndex,
    );
    counters.nextPracticeId := newId;
    result;
  };

  // ── Update: Exam ─────────────────────────────────────────────────────────
  public shared ({ caller }) func submitExamAttempt(
    examId : Nat,
    answers : [Types.ExamAnswer],
  ) : async Types.ExamAttempt {
    let (attempt, newId) = CfaLib.submitExamAttempt(
      mockExams,
      questions,
      examAttempts,
      userStats,
      counters.nextExamAttemptId,
      caller,
      examId,
      answers,
    );
    counters.nextExamAttemptId := newId;
    attempt;
  };

  // ── Read: User history & stats ───────────────────────────────────────────
  public shared query ({ caller }) func getMyExamHistory() : async [Types.ExamAttempt] {
    CfaLib.getMyExamHistory(examAttempts, caller);
  };

  public shared query ({ caller }) func getMyStats() : async Types.UserStats {
    CfaLib.getMyStats(userStats, caller);
  };

  public shared query ({ caller }) func getMyTopicStats() : async [(Nat, Nat, Nat)] {
    CfaLib.getMyTopicStats(userStats, caller);
  };
};
