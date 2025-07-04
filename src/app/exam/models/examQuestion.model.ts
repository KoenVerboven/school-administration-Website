export interface ExamQuestion {
    id: number;
    examId: number;
    questionNumber: number;
    questionType: string; // 'singleChoice', 'multipleChoice', 'text'
    questionText: string;
    answerOptions?: string[]; // only for singleChoice and multipleChoice
    correctAnswers?: string[]; // only for singleChoice and multipleChoice
    maxScore: number;
    minScoreToPassQuestion: number;
    isMandatory: boolean;
    explanation?: string; // optional, for text questions or explanations
}