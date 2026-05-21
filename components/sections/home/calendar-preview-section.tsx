import CalendarGrid from "@/components/features/calendar/calendar-grid";
import Button from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";

const CalendarPreviewSection = () => {
  return (
    <section className="max-w-4xl mx-auto my-32 px-8">
      <SectionBadge>Kalender</SectionBadge>
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-16">
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
