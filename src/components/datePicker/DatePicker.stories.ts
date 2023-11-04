import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker";

const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    label: "Date",
  },
};
