const dummyUser = [
  {
    id: "1",
    username: "john_doe",
    password: "admin",
    email: "emily.johnson@x.dummyjson.com",
    role: "user",
    name: "John Doe",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    username: "jane_doe",
    password: "pass1",
    email: "alpha.7886@gmail.com",
    role: "admin",
    name: "Jane Doe",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "3",
    username: "Bob_doe",
    password: "admin",
    email: "bob.doe@admin.gg",
    role: "organizer",
    name: "Bob Doe",
    image: "https://i.pravatar.cc/300",
  },
];
const getUserByEmail = async (email: string) => {
  const userData = process.env.NEXT_PUBLIC_EVENT_API;

  try {
    // const response = await fetch(`${userData}/get + email`);
    // const data = await response.json();
    // const user = data.users.find((user: any) => user.email === email);
    const user = dummyUser.find((user: any) => user.email === email);
    return user;
  } catch (error) {
    console.error("Can't catch user data:", error);
  }
};

export default getUserByEmail;
