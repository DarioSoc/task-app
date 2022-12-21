export interface Task {
  id?: string;
  title: string;
  description: string;
  isCompleted: boolean;
  type: string;
  created_timestamp?: string;
  updated_timestamp?: string;
  completed_timestamp?: string;
}
