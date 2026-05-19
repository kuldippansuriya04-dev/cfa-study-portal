import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { useMockExams } from "../hooks/useBackend";
import type { MockExam } from "../types/cfa";

const MOCK_LABELS: Record<string, string> = {
  "mock-1": "MOCK EXAM 1",
  "mock-2": "MOCK EXAM 2",
  "mock-3": "MOCK EXAM 3",
  "mock-4": "MOCK EXAM 4",
  "mock-5": "MOCK EXAM 5",
  "kaplan-mock-1": "KAPLAN MOCK 1",
};

const SESSION_DETAILS: Record<string, string> = {
  "mock-1-s1": "90 Qs - Ethics, FSA, Econ, Quant",
  "mock-1-s2": "90 Qs - FI, Equity, Derivatives, PM, AI",
  "mock-2-s1": "90 Qs - Ethics, FSA, Econ, Quant, CF",
  "mock-2-s2": "90 Qs - Equity, FI, Derivatives, AI, PM",
  "mock-3-s1": "90 Qs - Ethics, Quant, Econ, FSA, CF",
  "mock-3-s2": "90 Qs - Equity, FI, Derivatives, AI, PM",
  "mock-4-s1": "90 Qs - Ethics, Quant, Econ, FSA, CF",
  "mock-4-s2": "90 Qs - Equity, FI, Derivatives, AI, PM",
  "mock-5-s1": "90 Qs - Ethics, Quant, Econ, FSA, CF",
  "mock-5-s2": "90 Qs - Equity, FI, Derivatives, AI, PM",
  "kaplan-mock-1-s1": "90 Qs - Kaplan Q1-90",
  "kaplan-mock-1-s2": "90 Qs - Kaplan Q91-180",
};

function groupKey(examId: string) {
  return examId.replace(/-s[12]$/, "");
}

function sessionNumber(examId: string) {
  return examId.endsWith("-s2") ? "2" : "1";
}

function groupExams(exams: MockExam[]) {
  const grouped = new Map<string, MockExam[]>();
  for (const exam of exams) {
    const key = groupKey(exam.id);
    grouped.set(key, [...(grouped.get(key) ?? []), exam]);
  }
  return Array.from(grouped.entries()).map(([key, items]) => ({
    key,
    label: MOCK_LABELS[key] ?? key.toUpperCase(),
    sessions: items.sort((a, b) => a.id.localeCompare(b.id)),
  }));
}

export default function Exams() {
  const { data: exams, isLoading } = useMockExams();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Skeleton className="mx-auto mb-6 h-10 w-64" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  const grouped = groupExams(exams ?? []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#183811] px-3 py-0 sm:px-5">
      <div className="mx-auto max-w-[750px] rounded-b-xl bg-white px-4 pb-14 pt-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-12">
        <div className="space-y-7">
          {grouped.map((group) => (
            <section key={group.key} aria-labelledby={`${group.key}-title`}>
              <h1
                id={`${group.key}-title`}
                className="mb-3 text-center font-mono text-[14px] font-bold uppercase tracking-[0.5em] text-[#1f2933]"
              >
                {group.label}
              </h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.sessions.map((exam) => (
                  <Link
                    key={exam.id}
                    to="/exams/$examId/take"
                    params={{ examId: exam.id }}
                    className="block"
                    data-ocid={`start-exam-${exam.id}`}
                  >
                    <Card className="flex h-[98px] flex-col items-center justify-center rounded-lg border-0 bg-[#73c33d] px-4 text-center text-white shadow-none transition hover:bg-[#65b535] hover:shadow-md">
                      <div className="text-[18px] font-extrabold">
                        Session {sessionNumber(exam.id)}
                      </div>
                      <div className="mt-2 text-[14px] font-semibold leading-snug">
                        {SESSION_DETAILS[exam.id] ?? exam.description}
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link to="/history" className="mt-8 block" data-ocid="exam-history">
          <Button className="h-[76px] w-full rounded-lg bg-[#18345a] text-white hover:bg-[#122947]">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="flex items-center gap-2 text-base font-extrabold">
                <BarChart3 className="h-5 w-5" />
                My Exam History
              </span>
              <span className="text-xs font-semibold text-white/80">
                View past attempts, mistakes & progress
              </span>
            </div>
          </Button>
        </Link>

        <p className="mt-2 text-center font-mono text-[13px] tracking-[0.18em] text-gray-400">
          Candidate: USER DEMO &nbsp; - &nbsp; Feb 2025 &nbsp; - &nbsp;
          Prometric Style
        </p>
      </div>
    </div>
  );
}
