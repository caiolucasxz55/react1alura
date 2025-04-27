import { InfoCardProps } from "@/types/InfoCardProps";


export default function InfoCard({ title, description }: InfoCardProps) {
    return (
      <section className="container-card">
        <div className="p-12 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </section>
    );
  }
  