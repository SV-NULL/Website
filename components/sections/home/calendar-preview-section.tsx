import CalendarGrid from "@/components/features/calendar/calendar-grid";
import Button from "@/components/ui/button";

const CalendarPreviewSection = () => {
  return (
    <section className="max-w-4xl mx-auto my-24 px-8">
      <p className="text-center text-yellow-600 text-xl sm:text-2xl">
        Kalender
      </p>
      <h2 className="text-center text-4xl font-bold text-yellow-400 mb-16">
        Komende activiteiten
      </h2>
      <CalendarGrid limit={2} />
      <div className="text-center mt-12">
        <Button href="/kalender">Bekijk alle activiteiten</Button>
      </div>
    </section>
  );
};

export default CalendarPreviewSection;
