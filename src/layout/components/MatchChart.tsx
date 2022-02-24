const people = [
  {
    name: '1',
    title: '160',
    role: '169',
    email: '145',
  },
  {
    name: '1',
    title: '160',
    role: '169',
    email: '145',
  },
  {
    name: '1',
    title: '160',
    role: '169',
    email: '145',
  },
  {
    name: '1',
    title: '160',
    role: '169',
    email: '145',
  },
  // More people...
];
export const MatchChart = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle ">
          <div className="overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody>
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={
                      personIdx % 2 === 0
                        ? 'bg-gray-50 dark:bg-slate-700'
                        : 'bg-white dark:bg-slate-600'
                    }
                  >
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.name}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.title}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.email}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
