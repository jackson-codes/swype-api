import { EmotionalOpinion } from "../entity/Opinion";

export interface OpinionSaveArgs {
  userId: number;
  showId: number;
  seen: boolean;
  opinion: EmotionalOpinion;
}