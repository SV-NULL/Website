// File: components/Members.tsx
'use client';

interface Member {
  name: string;
  role: string;
  date: string;
  image: string;
}

export default function Members({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {members.map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center p-4 h-full">
          <div className="w-72 aspect-square mb-4 overflow-hidden rounded-full">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mt-auto">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-xs text-gray-400">{member.date}</p>
        </div>
      ))}
    </div>
  );
}
