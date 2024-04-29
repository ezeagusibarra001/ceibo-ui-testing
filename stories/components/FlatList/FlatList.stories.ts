import type { Meta, StoryObj } from "@storybook/react";

import FlatList from ".";

const meta = {
  title: "Ceibo/FlatList",
  component: FlatList,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FlatList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    elements: ["eze", "tomi", "ser"],
    render: (e) => e,
  },
};
