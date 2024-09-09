'use server'

import { profileSchema } from './schemas';
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser();
        if(!user) throw new Error('Not logged in.');

        const rawData = Object.fromEntries(formData);
        // const validatedFields = profileSchema.parse(rawData);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                // ...validatedFields,
                firstName: 'sample', lastName: '1234', username:'sample'
            }
        });
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            },
        });
        return { message: 'Profile was created.' };
    } catch (err) {
        console.log(err);
        return { message: err instanceof Error ? err.message : 'There was an error.' };
    }
    redirect('/');
};