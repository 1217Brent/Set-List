import '../components/Chat';
import UserProfileCard from '../components/UserProfileCard';
import zanderWhite from '../assets/zander-white-picture.png';
import karimKatta from '../assets/karim-katta.png';
import michaelHui from '../assets/michaelhui.png';

function UserList() {
  const data = [
    {id: 1, title: "Zander White", instrument: "violin & bass", description: "Best bassist", image: zanderWhite},
    {id: 2, title: "Karim Katta", instrument: "CEO", description: "Our CEO", image: karimKatta},
    {id: 2, title: "Michael Hui", instrument: "marketing manager", description: "i love u", image: michaelHui},
  ]

  return (
      <div className="max-h-96 overflow-y-auto border p-4 rounded-lg shadow-lg">
        {data.map((item) => (
          <UserProfileCard key={item.id} title={item.title} instrument={item.instrument} description={item.description} image={item.image} />
        ))}
      </div>
  )
}

export default UserList;
