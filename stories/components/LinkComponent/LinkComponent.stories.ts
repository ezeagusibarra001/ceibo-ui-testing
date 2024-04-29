import type { Meta, StoryObj } from "@storybook/react";

import LinkComponent from ".";

const meta = {
  title: "Ceibo/Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Ceibo-UI",
    href: "https://www.npmjs.com/package/ceibo-ui?activeTab=readme",
  },
};
