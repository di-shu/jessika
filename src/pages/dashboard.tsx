import Container from "../components/common/container";
import calendarIcon from "@assets/icons/calendar.svg";
import usersIcon from "@assets/icons/users.svg";

export default function Dashboard() {
  return (
    <main className="py-8">
      <Container>
        <h2 className="text-2xl font-bold mb-6">Welcome back, Dr. Smith</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card text-card-foreground rounded-xl border shadow">
            <div>
              <div className="">Total Students</div>
              <span>24</span>
            </div>
            <img src={usersIcon} alt="users" />
          </div>
          <div className="bg-card text-card-foreground rounded-xl border shadow">
            <div>
              <div className="">Sessions Today</div>
              <span>8</span>
            </div>
            <img src={calendarIcon} alt="sessions" />
          </div>
        </div>
      </Container>
    </main>
  );
}
