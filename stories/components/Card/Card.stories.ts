import type { Meta, StoryObj } from "@storybook/react";

import Card from ".";

const meta = {
  title: "Ceibo/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // image: {
    //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cQNVR8Dhjy6FgsxrizQ9PqPyTbGpmPYHLv2O7R9AFQ&s",
    //   alt: "Messi",
    //   width: 200,
    //   height: 200
    // }
  },
};
