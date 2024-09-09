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
        console.log('Raw Data:', rawData);
        const validatedFields = profileSchema.parse(rawData);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields
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

export const fetchProfileImage = async () => {
    const user = await currentUser();
    if(!user) return null;

    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id
        },
        select: {
            profileImage: true
        }
    });

    return profile?.profileImage;
};