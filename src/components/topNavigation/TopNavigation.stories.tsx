import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TopNavigation } from "./TopNavigation";

export default {
  title: "components/TopNavigation",
  component: TopNavigation,
} as ComponentMeta<typeof TopNavigation>;

const Template: ComponentStory<typeof TopNavigation> = () => <TopNavigation />;

export const Default = Template.bind({});
