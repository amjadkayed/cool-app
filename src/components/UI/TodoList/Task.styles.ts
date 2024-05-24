import { motion } from "framer-motion";
import styled from "styled-components";

export const TaskContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  background-color: blue;
  box-sizing: border-box;
  padding: 10px;
  &:active {
    cursor: grabbing;
    opacity: 1;
  }
`;
