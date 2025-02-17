import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../src/app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Example/app-Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Number: Story = {
  args: {
    label: 'Number-input',
    placeholder: 'Enter a number',
    type: 'number',
  },
};

export const Text: Story = {
  args: {
    label: 'text-input',
    placeholder: 'Enter a text',
    type: 'text',
  },
};
