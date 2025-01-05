import LessonCard from "@/app/ui/lesson";

const CoursePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <br />
      <br />
      <br />
      <div className="text-5xl font-bold text-center">Course Page</div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center m-5">
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
        <LessonCard
          title="Lesson 01"
          description="Get a basic idea about the Eboney holdings"
        />
      </div>
    </div>
  );
};

export default CoursePage;
