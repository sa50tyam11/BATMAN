import { currentUser } from '@clerk/nextjs/server';

export async function isAdmin() {
  const user = await currentUser();
  if (!user) return false;
  
  const primaryEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  )?.emailAddress;
  
  return primaryEmail === process.env.ADMIN_EMAIL;
}
