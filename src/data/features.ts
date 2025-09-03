import agentDemo from "@/assets/agent-mode.mov";
import agentDemoPicture from "@/assets/agent-mode.jpg";
import chatDemo from "@/assets/chat-mode.mov";
import chatDemoPicture from "@/assets/chat-mode.jpg";
import claudeCodeDemo from "@/assets/claude-code.mov";
import claudeCodeDemoPicture from "@/assets/claude-code.jpg";
import xcode26Demo from "@/assets/xcode26-demo.mov";
import xcode26DemoPicture from "@/assets/xcode26-demo.jpg";

export interface Feature {
  id: string; // Stable identifier that won't change
  title: string;
  description: string;
  image: string;
  video?: string;
  navLabel?: string; // Optional shorter label for navigation
}

export const features: Feature[] = [
  {
    id: "agent-mode",
    title: "Agentic AI",
    navLabel: "Agent",
    description: "Delegate entire tasks to an autonomous agent. Remain in the loop with instant feedback, and in control thanks to fine grained permissions.",
    video: agentDemo,
    image: agentDemoPicture
  },
  {
    id: "chat-mode",
    title: "Chat",
    description: "Switch to 'Chat' mode and get detailed answers or explanations without modifying your code. Compared to other chat alternatives (e.g. ChatGPT, Google etc), cmd provides relevant context to get more accurate results.",
    video: chatDemo,
    image: chatDemoPicture,
  },
  {
    id: "claude-code",
    title: "Claude Code",
    description: "You can interact directly with Claude Code through cmd. If you prefer using Claude Code over other tools for its advanced agentic capabilities, or because you have a subscription cmd has you covered. cmd makes Claude Code accessible right from Xcode, and displays its output in a rich native UI.",
    video: claudeCodeDemo,
    image: claudeCodeDemoPicture,
  },
  {
    id: "xcode-26-integration",
    title: "Xcode 26",
    description: "In Xcode 26, you can chose to interact with cmd through the new 'Code Assist' interface. When working on complex tasks, cmd's agentic AI is much more powerful than that of Xcode which cripples the most powerful LLMs with unnecessary privacy limitations. It's also easier to manage configurations like using a specific AI provider in cmd.",
    video: xcode26Demo,
    image: xcode26DemoPicture,
  },
];