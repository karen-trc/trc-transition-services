import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
  linkText?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-light">
      <div className="p-6">
        {icon && (
          <div className="w-16 h-16 mb-4 flex items-center justify-center bg-cream rounded-lg">
            <span className="text-3xl">{icon}</span>
          </div>
        )}
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-dark mb-6 leading-relaxed">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-accent hover:text-accent-dark font-semibold transition-colors"
        >
          {linkText}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
