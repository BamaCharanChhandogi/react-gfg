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

export const App = () => <GFGProfile username={"bamacharan"} img="https://media.licdn.com/dms/image/D5603AQGj1Vs1ZRE6hQ/profile-displayphoto-shrink_800_800/0/1705839123866?e=2147483647&v=beta&t=EnTSIh_M1Q_J6CDHeUdElbdH-nOBhmvuXC7UifisZfE"/>;
