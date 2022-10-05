import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DynamicForm from './DynamicForm';

export default {
    title: 'Example/DynamicForm',
    component: DynamicForm,
} as ComponentMeta<typeof DynamicForm>;

const Template: ComponentStory<typeof DynamicForm> = (args) => <DynamicForm {...args} />;

export const LoginForm = Template.bind({});
LoginForm.args = {
    data: [{
        id: '001',
        type: 'text',
        label: 'Username',
        value: 'Username',
        onChangeHandler: () => { return false; },
        errorText: 'Username cannot contain number or symbols',
        validator: () => { return false; },
    },
    {
        id: '002',
        type: 'password',
        label: 'Password',
        value: 'Password',
        onChangeHandler: () => { return false; },
        errorText: 'Password must be minimum 8 characters long',
        validator: () => { return false; },
    }]
};

export const RegisterForm = Template.bind({});
RegisterForm.args = {
    data: [{
        id: '001',
        type: 'text',
        label: 'First Name',
        value: 'First Name',
        onChangeHandler: () => { return false; },
        errorText: 'First name cannot contain number or symbols',
        validator: () => { return false; },
    },
    {
        id: '002',
        type: 'text',
        label: 'Last Name',
        value: 'Last Name',
        onChangeHandler: () => { return false; },
        errorText: 'Last name cannot contain number or symbols',
        validator: () => { return false; },
    },
    {
        id: '003',
        type: 'text',
        label: 'Email',
        value: 'Email',
        onChangeHandler: () => { return false; },
        errorText: 'Please enter a valid email',
        validator: () => { return false; },
    },
    {
        id: '004',
        type: 'text',
        label: 'Phone Number',
        value: 'Phone Number',
        onChangeHandler: () => { return false; },
        errorText: 'Please enter a valid phone number',
        validator: () => { return false; },
    }]
};