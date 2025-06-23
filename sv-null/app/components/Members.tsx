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
        <div key={i} className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-xs text-gray-400">{member.date}</p>
        </div>
      ))}
    </div>
  );
}
