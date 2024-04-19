import React from "react";
import { Meta } from "@storybook/react";

import { GFGProfile } from "../components/GFGProfile";
import './GFGProfile.css'

export default {
  title: "App Test",
  component: GFGProfile,
  parameters: {
    // add parameters if needed
  },
} as Meta;

export const App = () => <GFGProfile username={"bamacharan"}/>;
