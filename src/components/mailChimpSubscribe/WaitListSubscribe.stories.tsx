import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WaitListSubscribe } from "./WaitListSubscribe";

export default {
  title: "components/WaitListSubscribe",
  component: WaitListSubscribe,
} as ComponentMeta<typeof WaitListSubscribe>;

const Template: ComponentStory<typeof WaitListSubscribe> = () => (
  <WaitListSubscribe />
);

export const Default = Template.bind({});
