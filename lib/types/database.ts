export interface AptitudeTestResults {
  answers: {
    dexterity?: string;
    physicalStrength?: string;
    learningAttitude?: string;
    patience?: string;
    communication?: string;
    passion?: string;
    salaryKnowledge?: string;
    aiDemand?: string;
    futureVision?: string;
  };
  score: number;
  percentage: number;
  level: string;
  message: string;
  timestamp: string;
}

export interface JobApplication {
  id?: string;
  session_id: string;
  current_step: number;
  desired_timing?: string;
  experience?: string;
  location?: string;
  name?: string;
  birth_date?: string;
  email?: string;
  phone?: string;
  aptitude_test_results?: AptitudeTestResults;
  status: 'in_progress' | 'completed' | 'abandoned';
  created_at?: string;
  updated_at?: string;
  completed_at?: string;
}

export interface ContactInquiry {
  id?: string;
  user_type: 'employer' | 'jobseeker' | 'other';
  company_name?: string;
  desired_position?: string;
  experience_years?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved';
  created_at?: string;
  updated_at?: string;
}
