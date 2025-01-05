import mongoose, { Schema, model, Document } from "mongoose";

export interface LessonDocument extends Document {
  _id: string;
  english: {
    title: string;
    description: string;
    videoUrl: string;
    quizUrl: string;
  };
  sinhala: {
    title: string;
    description: string;
    videoUrl: string;
    quizUrl: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema = new Schema<LessonDocument>(
  {
    english: {
      title: {
        type: String,
        required: [true, "English title is required"],
      },
      description: {
        type: String,
        required: [true, "English description is required"],
      },
      videoUrl: {
        type: String,
        required: [true, "English video URL is required"],
      },
      quizUrl: {
        type: String,
        required: [true, "English quiz URL is required"],
      },
    },
    sinhala: {
      title: {
        type: String,
        required: [true, "Sinhala title is required"],
      },
      description: {
        type: String,
        required: [true, "Sinhala description is required"],
      },
      videoUrl: {
        type: String,
        required: [true, "Sinhala video URL is required"],
      },
      quizUrl: {
        type: String,
        required: [true, "Sinhala quiz URL is required"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Lesson =
  mongoose.models.Lesson || model<LessonDocument>("Lesson", LessonSchema);

export default Lesson;
