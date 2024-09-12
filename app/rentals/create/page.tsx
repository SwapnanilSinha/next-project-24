import React from 'react'
import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createPropertyAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import ImageInput from '@/components/form/ImageInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';

function CreateProperty() {
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>
                Create Property
            </h1>
            <div className='border p-8 rounded'>
                <h3 className='text-leg mb-4 font-medium'>General Info</h3>
                <FormContainer action={createPropertyAction}>
                    <div className='grid md:grid-cols-2 gap-8 mb-4'>
                        <FormInput name='name' type='text' label='Property Name'></FormInput>
                        <FormInput name='tagline' type='text' label='Tagline'></FormInput>
                        <PriceInput />
                        <CategoriesInput />
                    </div>
                    <TextAreaInput name='description' labelText='Description (10 - 1000 Words)' />
                    <div className='grid sm:grid-cols-2 gap-8 mt-4'>
                        <CountriesInput />
                        <ImageInput />
                    </div>
                    <h3 className='text-lg mt-8 mb-2 font-medium'>Propoerty Accomodation Details</h3>
                    <CounterInput detail='guests' />
                    <CounterInput detail='bedrooms' />
                    <CounterInput detail='beds' />
                    <CounterInput detail='baths' />
                    <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
                    <AmenitiesInput />
                    <SubmitButton text='create property' className='mt-12' size={'default'}></SubmitButton>
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProperty