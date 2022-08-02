import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HomeScreen } from "./HomeScreen";

export default {
  title: "screens/HomeScreen",
  component: HomeScreen,
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = () => <HomeScreen />;

export const Default = Template.bind({});
