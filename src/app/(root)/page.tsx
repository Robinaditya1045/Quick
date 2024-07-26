// src/app/(root)/page.tsx
import { currentUser } from '@clerk/nextjs/server';

export default async function Page() {
  const user = await currentUser();

  console.log(user);

  if (!user) return <div>Not signed in</div>;

  return (
  <div>
    <img src={user.imageUrl} width={32} height={32} alt={"img"} />
  <div>Hello {user?.firstName} {user.lastName}</div>
  </div>
  );
}
