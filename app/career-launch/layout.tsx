import './career-launch.css';
import Link from 'next/link';

export const metadata = {
  title: 'Career Launch Program | TRC Transition Services',
  description: 'A full-year career support program for students, career changers, mid-career professionals, and senior executives. Resume, LinkedIn, coaching, and dedicated support.',
};

export default function CareerLaunchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="trc-scope">
      <div className="trc-page">
        <nav className="trc-subnav" aria-label="Career Launch sections">
          <Link href="/career-launch">Overview</Link>
          <Link href="/career-launch/students">Students</Link>
          <Link href="/career-launch/career-changers">Career Changers</Link>
          <Link href="/career-launch/mid-career">Mid-Career</Link>
          <Link href="/career-launch/senior-executive">Executive</Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
