'use client';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { LuShare2 } from 'react-icons/lu';

import {
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
} from 'react-share';

function ShareButton({
    propertyId,
    name,
}: {
    propertyId: string;
    name: string;
}) {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/properties/${propertyId}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='icon' className='p-2'>
                    <LuShare2 />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side='top'
                align='end'
                sideOffset={10}
                className='flex items-center gap-x-2 justify-center w-full'
            >
                <FacebookShareButton url={shareLink} title={name}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareLink} title={name}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <EmailShareButton url={shareLink} subject={name}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </PopoverContent>
        </Popover>
    );
}
export default ShareButton;