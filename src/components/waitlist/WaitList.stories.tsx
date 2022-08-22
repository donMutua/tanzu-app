import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WaitListForm } from "./WaitListForm";

export default {
  title: "components/WaitListForm",
  component: WaitListForm,
} as ComponentMeta<typeof WaitListForm>;

const Template: ComponentStory<typeof WaitListForm> = (args) => (
  <WaitListForm {...args} />
);

export const Default = Template.bind({});
